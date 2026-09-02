import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 1. Rate Limiting em memória (Máximo de 5 envios por IP a cada 10 minutos)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutos

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

// 2. Sanitização contra injecção de scripts HTML (XSS)
function sanitizeText(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// 3. Prevenção de Header Injection (Remover quebras de linha em headers)
function cleanHeaderInput(str: string): string {
  return str.replace(/[\r\n]/g, "").trim();
}

export async function POST(request: Request) {
  try {
    // Obter IP do cliente para Rate Limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Limite de envios excedido por segurança. Aguarde 10 minutos antes de tentar novamente.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message, website } = body;

    // 4. Protecção Honeypot: Se o campo invisível 'website' foi preenchido, é um BOT!
    if (website && website.trim() !== "") {
      // Simular sucesso para enganar o bot de spam, mas não enviar e-mail real
      console.warn(`[SEGURANÇA] Bot de spam bloqueado via Honeypot do IP: ${ip}`);
      return NextResponse.json({
        success: true,
        message: "Mensagem enviada com sucesso!",
      });
    }

    // 5. Validação de campos obrigatórios
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Todos os campos (nome, email, mensagem) são obrigatórios." },
        { status: 400 }
      );
    }

    // 6. Limite de tamanho de inputs (evitar ataques DoS por mensagens gigantes)
    if (name.length > 100 || email.length > 100 || message.length > 3000) {
      return NextResponse.json(
        { success: false, error: "A mensagem excede o limite máximo permitido." },
        { status: 400 }
      );
    }

    // 7. Regex rigorosa de validação de email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Endereço de e-mail inválido." },
        { status: 400 }
      );
    }

    // Limpar e sanitizar dados
    const cleanName = cleanHeaderInput(name);
    const cleanEmail = cleanHeaderInput(email);
    const safeName = sanitizeText(cleanName);
    const safeEmail = sanitizeText(cleanEmail);
    const safeMessage = sanitizeText(message.trim());

    // 8. Configurações SMTP
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "serafimag2020@gmail.com";

    // Se existirem credenciais SMTP configuradas no .env.local
    if (smtpUser && smtpPass && smtpPass !== "sua_palavra_passe_de_aplicacao_aqui") {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      // Email para o Serafim (Notificação de novo contacto)
      const mailOptionsToAdmin = {
        from: `"Portfólio Serafim Gonga" <${smtpUser}>`,
        replyTo: cleanEmail,
        to: receiverEmail,
        subject: `📬 Novo contacto de ${cleanName} via Portfólio`,
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #0d1117; color: #e6edf3; padding: 24px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #30363d;">
            <h2 style="color: #38bdf8; margin-top: 0;">Novo Contacto Recebido no Portfólio</h2>
            <p><strong>Nome:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color: #38bdf8;">${safeEmail}</a></p>
            <div style="background-color: #161b22; padding: 16px; border-radius: 8px; border-left: 4px solid #38bdf8; margin-top: 16px;">
              <p style="margin: 0; white-space: pre-wrap; color: #c9d1d9;">${safeMessage}</p>
            </div>
            <hr style="border: 0; border-top: 1px solid #30363d; margin: 24px 0;" />
            <p style="font-size: 12px; color: #8b949e;">Mensagem segura enviada a partir do formulário de contacto do site serafimgonga.dev (IP: ${ip}).</p>
          </div>
        `,
      };

      // Email de confirmação automática para o visitante
      const mailOptionsToSender = {
        from: `"Serafim Gonga" <${smtpUser}>`,
        to: cleanEmail,
        subject: `Obrigado pelo contacto, ${cleanName}! | Serafim Gonga`,
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #0d1117; color: #e6edf3; padding: 24px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #30363d;">
            <h2 style="color: #38bdf8; margin-top: 0;">Olá ${safeName}, obrigado pela mensagem!</h2>
            <p>Recebi a tua mensagem e entrarei em contacto o mais breve possível.</p>
            <div style="background-color: #161b22; padding: 16px; border-radius: 8px; margin-top: 16px;">
              <p style="margin: 0; font-size: 14px; color: #8b949e;"><strong>Resumo da tua mensagem:</strong></p>
              <p style="margin: 8px 0 0 0; white-space: pre-wrap; color: #c9d1d9;">"${safeMessage}"</p>
            </div>
            <hr style="border: 0; border-top: 1px solid #30363d; margin: 24px 0;" />
            <p style="font-size: 13px; color: #c9d1d9;">Com os melhores cumprimentos,<br><strong>Serafim Adão Gonga</strong><br><span style="color: #8b949e;">Fullstack Software Engineer</span></p>
          </div>
        `,
      };

      // Enviar os dois emails em paralelo
      await Promise.all([
        transporter.sendMail(mailOptionsToAdmin),
        transporter.sendMail(mailOptionsToSender),
      ]);

      return NextResponse.json({
        success: true,
        message: "Mensagem enviada com sucesso! Obrigado pelo contacto.",
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          error: "Para os e-mails chegarem à tua caixa de entrada real, configura a tua Palavra-passe de Aplicação no .env.local (SMTP_PASS).",
        },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error("Erro ao enviar email via SMTP:", error);
    let errMsg = "Ocorreu um erro ao tentar enviar a mensagem via SMTP.";
    if (error?.code === "EAUTH" || error?.responseCode === 535 || error?.responseCode === 534 || error?.message?.includes("Invalid login")) {
      errMsg = "Erro de autenticação do Gmail: O Gmail rejeitou a palavra-passe. A Google exige uma 'Palavra-passe de Aplicação' de 16 caracteres (gerada em myaccount.google.com/apppasswords) em vez da tua palavra-passe normal.";
    }
    return NextResponse.json(
      { success: false, error: errMsg },
      { status: 500 }
    );
  }
}
