# ⚡ Quick Start (5 minutos)

Guia super rápido para começar.

---

## 1️⃣ Clonar / Baixar

```bash
git clone https://github.com/seu-usuario/serafim-portfolio.git
cd serafim-portfolio
```

---

## 2️⃣ Instalar Dependências

```bash
npm install
```

---

## 3️⃣ Rodar Localmente

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) 🎉

---

## 4️⃣ Editar Conteúdo

Abra `data/portfolio.js` e edite tudo!

```javascript
// Adicionar novo projeto, skills, experiência...
```

---

## 5️⃣ Deploy (Vercel)

```bash
# 1. Push para GitHub
git push origin main

# 2. Vá para vercel.com
# 3. Conecte seu repositório GitHub
# 4. Clique Deploy 🚀
```

---

## 📝 Comandos Úteis

```bash
npm run dev      # Rodar em localhost:3000
npm run build    # Build estático
npm run start    # Rodar build localmente
npm run lint     # Verificar código
npm run export   # Export para HTML puro (GitHub Pages)
```

---

## 🎨 Personalizar

### Cores

Edite `tailwind.config.js` (linha 8-20)

### Fontes

Edite `pages/_document.jsx` (linha 7-11)

### Conteúdo

Edite `data/portfolio.js` (onde tudo está!)

---

## ✅ Checklist de Deploy

- [ ] `npm run dev` funciona?
- [ ] `npm run build` funciona?
- [ ] Conteúdo está atualizado?
- [ ] Links funcionam?
- [ ] Mobile responsivo? (F12 em navegador)

**Tudo pronto?** → Deploy em Vercel!

---

## 🆘 Problemas?

```bash
# Limpar cache
rm -rf .next node_modules
npm install
npm run dev
```

---

**Mais dúvidas?** Veja `README.md` ou `DEPLOYMENT.md`

**Let's go! 🚀**
