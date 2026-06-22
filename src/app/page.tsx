"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Download, Mail, Github, Linkedin, MapPin, Phone,
  Code2, Database, Server, Cloud, Sparkles, Briefcase, GraduationCap,
  ExternalLink, Zap, Layers, Globe, Menu, X, Check,
} from "lucide-react";

import { Counter } from "@/components/portfolio/Counter";
import { ElegantShapes } from "@/components/portfolio/ElegantShapes";
import InteractiveBentoGallery, { type MediaItemType } from "@/components/ui/interactive-bento-gallery";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import FeedbackSlider from "@/components/ui/feedback-slider";
const portrait = "/assets/foto.png";
const projMapazzz = "/assets/project-mapazzz.jpg";
const projKorta = "/assets/project-korta.jpg";
const projSigad = "/assets/project-sigad.jpg";
const projAlphaHydrae = "/assets/alpha-hydrae.png";
const demoSigad = { url: "/videos/demo-sigad.mp4" };
const demoMapazzz = { url: "/videos/demo-mapazzz.mp4" };


const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: "easeOut" as const } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60, filter: "blur(8px)" },
  show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" as const } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60, filter: "blur(8px)" },
  show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(8px)" },
  show: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" as const } },
};


const caseStudies = [
  {
    title: "AlphaHydrae — Detecção e Resposta a Incidentes",
    client: "Hackathon de Cibersegurança · ANGOTIC 2026",
    problem: "As organizações angolanas enfrentam um desafio crítico: infraestruturas digitais crescem mais rápido do que a capacidade de as proteger. Sem automação, a detecção de incidentes leva de 6 a 8 horas.",
    solution: "Desenvolvi um sistema inteligente de detecção e resposta automática (SOAR) que orquestra workflows via N8N e analisa eventos de incidentes usando IA Generativa (Google Gemini), reduzindo o tempo de resposta para 2-3 minutos.",
    stack: ["React", "Django Ninja", "Python", "N8N", "Google Gemini AI", "PostgreSQL"],
    results: [
      { k: "2-3 min", v: "tempo de resposta" },
      { k: "< 1 seg", v: "tempo de detecção" },
      { k: "−80%+", v: "carga de trabalho manual" },
    ],
    image: projAlphaHydrae,
    liveUrl: "https://alpha-hydrae.vercel.app/",
    videoUrl: "https://drive.google.com/file/d/1xA05KCmdhccAdj7xtKDONj44LOTDd3GP/view?usp=sharing"
  },
  {
    title: "SIGAD — Sistema de Avaliação de Desempenho",
    client: "IMOGESTIN · via DH-IT",
    problem: "Avaliação de funcionários geriam-se em papel e folhas Excel, com erros e atrasos na atribuição de prémios.",
    solution: "Construí um sistema desktop em C# / WinForms com SQL Server que automatiza o ciclo de avaliação, prémios e promoções.",
    stack: ["C#", ".NET", "WinForms", "SQL Server"],
    results: [
      { k: "−80%", v: "tempo de avaliação" },
      { k: "100%", v: "auditável" },
      { k: "1 RH", v: "opera tudo" },
    ],
    image: projSigad,
  },
  {
    title: "Mapazzz — Mapeamento de Risco de Malária",
    client: "Hackathon · Escola 42 Luanda",
    problem: "Comunidades sem dados em tempo real sobre zonas de risco de malária e sem canais de educação localizada.",
    solution: "App de geolocalização com mapa de risco comunitário e conteúdo educativo, desenhada em Figma e prototipada para campo.",
    stack: ["React Native", "Figma", "GeoJSON", "Node.js"],
    results: [
      { k: "48h", v: "hackathon entregue" },
      { k: "1k+", v: "pontos mapeáveis" },
      { k: "PT/UM", v: "multilíngue" },
    ],
    image: projMapazzz,
  },
];

const projects = [
  {
    name: "SEPE NIF API",
    desc: "API para consulta de dados fiscais por NIF em Angola com cache, rate limit e comprovativos em PDF.",
    stack: ["FastAPI", "Python", "Playwright", "Docker"],
    img: "/assets/Api-Nif/Captura de ecrã de 2026-06-22 17-20-35.png",
    link: "https://sepe-nif-api-1.onrender.com/docs#/Consultas%20NIF/get_nif_nif__numero__get"
  },
  {
    name: "SaaS B2B & Bots",
    desc: "Plataforma de automação para PMEs com bots Telegram/WhatsApp inteligentes e orquestrador de mensagens.",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "React Native"],
    img: "/assets/project-korta.jpg",
    link: "#"
  },
  {
    name: "CSN — Escola de Condução",
    desc: "Sistema desktop completo para gestão de alunos, aulas, instrutores, finanças e frotas.",
    stack: ["C#", "SQL Server", "EF Core", "WinForms"],
    img: "/assets/project-sigad.jpg",
    link: "#"
  },
  {
    name: "AppMeuNif",
    desc: "Aplicação mobile multi-plataforma para consulta de dados fiscais em tempo real.",
    stack: [".NET MAUI", "C#", "HttpClient", "MVVM"],
    img: "/assets/AppMeuNif/AppHome1.PNG",
    link: "#"
  },
  {
    name: "MapaZZZ — 100Malária",
    desc: "App mobile para monitoramento e prevenção de malária com heatmap, denúncias e modo offline.",
    stack: ["Flutter", "Node.js", "Firebase", "Google Maps"],
    img: "/assets/MapaZZZ/3.png",
    link: "#"
  },
  {
    name: "RoomView Boutique",
    desc: "Plataforma de reserva de quartos em tempo real com painel administrativo completo e ótima UX.",
    stack: ["React", "TypeScript", "Vite", "Tailwind", ".NET"],
    img: "/assets/roomview-boutique/home.png",
    link: "#"
  },
  {
    name: "42ID — Arena de Jogos",
    desc: "Plataforma de duelos e rankings competitivos em tempo real com WebSockets e Redis.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    img: "/assets/alpha-hydrae.png",
    link: "#"
  },
  {
    name: "CSN — Académico Inicial",
    desc: "Primeiro sistema completo de gestão escolar desenvolvido durante formação técnica.",
    stack: ["C#", "SQL Server"],
    img: "/assets/project-sigad.jpg",
    link: "#"
  }
];

const services = [
  { icon: Globe, title: "Aplicações Web", desc: "Sites institucionais, dashboards e SaaS em Next.js / React, com foco em performance e SEO." },
  { icon: Server, title: "APIs & Backend", desc: "APIs REST em ASP.NET Core e Node.js, com PostgreSQL, autenticação e arquitetura limpa." },
  { icon: Layers, title: "Sistemas Empresariais", desc: "ERPs, CRMs e ferramentas internas que automatizam processos e reduzem trabalho manual." },
];

const experience = [
  {
    year: "2024 — Presente",
    role: "Engenharia de Software",
    org: "42 Luanda",
    desc: "Formação intensiva baseada em projetos, aprendizagem autónoma e revisão por pares. Desenvolvimento avançado em sistemas, algoritmos, programação de baixo nível, arquitetura de software e resolução de problemas complexos.",
    techs: ["C", "C++", "Bash", "Algoritmos", "Sistemas"],
  },
  {
    year: "2021 — 2023",
    role: "Programador Pleno",
    org: "DH-IT · Luanda",
    desc: "Participei no desenvolvimento do SIGAD para a IMOGESTIN, contribuindo desde a análise de requisitos até à implementação, testes, formação de utilizadores e suporte operacional. Trabalhei na construção de soluções empresariais focadas em eficiência e fiabilidade.",
    techs: ["C#", ".NET", "SQL Server"],
  },
  {
    year: "2020 — 2021",
    role: "Técnico em Informática",
    org: "Colégio Carvajú",
    desc: "Iniciei a minha trajetória profissional na área tecnológica enquanto desenvolvia o projeto ICSN, um sistema completo de gestão para escolas de condução, abrangendo processos administrativos, gestão de alunos e operações internas.",
    techs: ["C#", "SQL Server"],
  },
];

const stack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  Backend: ["ASP.NET Core", ".NET 6+", "Node.js", "Express", "Prisma", "EF Core"],
  Database: ["PostgreSQL", "SQL Server", "MySQL", "MariaDB"],
  DevOps: ["Docker", "Linux", "AWS", "Bash", "SSH", "Git"],
};

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">


      {/* Elegant animated shapes background */}
      <ElegantShapes />

      <Nav />
      <main className="relative z-10">
        <Hero />
        <Metrics />
        <Projects />
        <Demos />
        <Services />
        <TechStack />
        <Experience />
        <FeedbackExperience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ------------------- NAV ------------------- */
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    ["Sobre", "#about"],
    ["Cases", "#cases"],
    ["Demos", "#demos"],
    ["Projetos", "#projects"],
    ["Stack", "#stack"],
    ["Contacto", "#contact"],
  ];
  return (
    <header
      className={`fixed inset-x-6 md:inset-x-0 top-4 z-50 mx-auto flex max-w-6xl flex-col glass transition-all duration-300 rounded-3xl md:rounded-full ${isOpen ? "p-5" : "px-5 py-2.5"
        }`}
    >
      <div className="flex w-full items-center justify-between">
        <a href="#" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">S</span>
          <span className="hidden sm:inline">Serafim Gonga</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" onClick={() => setIsOpen(false)} className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105">
            Vamos falar <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-foreground hover:bg-white/10 md:hidden"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden md:hidden"
          >
            <nav className="mt-4 flex flex-col gap-1 border-t border-white/10 pt-4">
              {links.map(([l, h]) => (
                <a
                  key={h}
                  href={h}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {l}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ------------------- HERO ------------------- */
function Hero() {
  const orbitItems = [
    { name: ".NET / C#", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "React Native", icon: "📱" },
    { name: "Docker", icon: "🐳" },
  ];

  return (
    <section className="relative px-6 pt-44 pb-24 sm:pt-56 sm:pb-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px_1fr] lg:items-center">

          {/* Coluna Esquerda */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={slideInLeft}
            className="flex flex-col gap-5 text-left order-2 lg:order-1 max-w-[380px] w-full"
          >


            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
                Reduzo horas de trabalho manual
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                através de <strong className="font-semibold text-foreground">software inteligente</strong>.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { label: "Back-end", icon: Server },
                { label: "Front-end", icon: Globe },
                { label: "Mobile", icon: Layers },
                { label: "Desktop", icon: Layers },
              ].map(({ label, icon: Icon }) => (
                <span key={label} className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-semibold text-foreground">
                  <Icon className="h-3 w-3 text-primary" />
                  {label}
                </span>
              ))}
            </div>

          </motion.div>

          {/* Coluna Central */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={scaleIn}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center justify-center text-center order-1 lg:order-2"
          >
            <div className="animate-float flex flex-col items-center">
              <div className="relative h-[200px] w-[200px] flex items-center justify-center">
                {/* Orbit path line */}
                <div className="absolute h-[260px] w-[260px] rounded-full border border-dashed border-white/10 pointer-events-none" />

                {/* Profile photo */}
                <div className="relative h-[180px] w-[180px] overflow-hidden rounded-full bg-card z-10">
                  <img src="./assets/foto.jpg" alt="Serafim Gonga" className="h-full w-full object-cover" />
                </div>

                {/* 42 Luanda Seal */}
                <div className="absolute -bottom-4 -right-4 z-30 flex items-center gap-2 rounded-xl border border-warning/30 bg-card/90 backdrop-blur px-3 py-2 text-[10px] font-medium text-foreground shadow-2xl pointer-events-auto select-none transition-transform hover:scale-105">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-warning/15 text-warning shrink-0">
                    <Check className="h-3 w-3" />
                  </div>
                  <div className="text-left leading-tight">
                    <div className="font-bold text-[10.5px]">42 Luanda</div>
                    <div className="text-[9.5px] text-muted-foreground">Common Core Graduate</div>
                  </div>
                </div>

                {/* Rotating orbit container */}
                <div className="absolute inset-0 animate-orbit w-full h-full pointer-events-none z-20">
                  {orbitItems.map((item, idx) => {
                    const angle = (idx * 360) / orbitItems.length;
                    const radius = 130; // Radius of orbit
                    const x = Math.round(Math.cos((angle * Math.PI) / 180) * radius);
                    const y = Math.round(Math.sin((angle * Math.PI) / 180) * radius);
                    return (
                      <div
                        key={item.name}
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                        className="absolute left-1/2 top-1/2 pointer-events-auto"
                      >
                        <div className="animate-counter-orbit flex items-center gap-1 rounded-full border border-white/10 bg-card/90 backdrop-blur px-2.5 py-1 text-[10px] font-semibold text-foreground shadow-xl whitespace-nowrap">
                          <span>{item.icon}</span>
                          <span>{item.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coluna Direita */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={slideInRight}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-5 text-left order-3 lg:pl-4 max-w-[380px] lg:ml-auto w-full"
          >
            <div className="space-y-1.5">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
                Da ideia à produção.
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Entrega ponta a ponta com rigor de engenharia:
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Arquitetura",
                "Desenvolvimento",
                "Deploy",
                "Escalabilidade",
                "+20 projetos",
                "42 Luanda",
              ].map((label) => (
                <span key={label} className="inline-flex items-center rounded-full border border-white/10 bg-white/3 px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                  {label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-green transition-transform hover:scale-[1.03]">
                Explorar Projetos <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="https://serafimgonga.dev" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>
          </motion.div>

        </div>


      </div>
    </section>
  );
}



/* ------------------- METRICS / ABOUT ------------------- */
const aboutCards = [
  {
    tag: "Quem sou",
    headline: "Transformo ideias ambiciosas em produtos reais, escaláveis e prontos para crescer.",
    body: "Sou Serafim Adão Gonga, Software Engineer focado em construir soluções digitais que resolvem problemas reais. Combino visão de produto, engenharia e execução para entregar resultados que geram valor.",
    stat: "7+",
    statLabel: "anos de aprendizagem contínua",
    accent: "Software Engineer",
    color: "from-primary/20 to-transparent",
    dotColor: "bg-primary",
  },
  {
    tag: "O que construo",
    headline: "Da estratégia à produção. Sem depender de equipas enormes.",
    body: "Desenvolvo aplicações completas, desde arquitetura e APIs até interfaces modernas e infraestrutura. Trabalho com foco em desempenho, segurança e experiência do utilizador.",
    stat: "20+",
    statLabel: "projetos desenvolvidos",
    accent: ".NET · Node.js · React · PostgreSQL",
    color: "from-secondary/20 to-transparent",
    dotColor: "bg-secondary",
  },
  {
    tag: "42 Luanda",
    headline: "Common Core concluído. Nível Transcender alcançado.",
    body: "Percorri um percurso intensivo de engenharia de software focado em algoritmos, sistemas, arquitetura de software e resolução de problemas na 42 Luanda. A experiência baseada em peer learning reforçou a minha capacidade de aprender rapidamente e enfrentar desafios técnicos complexos.",
    stat: "Transcender",
    statLabel: "Nível na 42 Luanda",
    accent: "42 Luanda Common Core Graduate",
    color: "from-warning/15 to-transparent",
    dotColor: "bg-warning",
  },
  {
    tag: "A minha filosofia",
    headline: "Tecnologia só tem valor quando gera impacto mensurável.",
    body: "Acredito em automação, simplicidade e melhoria contínua. O melhor software é aquele que reduz complexidade, aumenta produtividade e cria novas oportunidades para pessoas e organizações.",
    stat: "80%",
    statLabel: "potencial de automação",
    accent: "Clean Code · DevOps · IA",
    color: "from-chart-5/15 to-transparent",
    dotColor: "bg-chart-5",
  },
];

function Metrics() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  function next() {
    setDirection(1);
    setActive((p) => (p + 1) % aboutCards.length);
  }
  function goTo(i: number) {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  }

  const card = aboutCards[active];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, scale: 0.94, y: dir > 0 ? 30 : -30, filter: "blur(8px)" }),
    center: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" as const } },
    exit: (dir: number) => ({ opacity: 0, scale: 1.04, y: dir > 0 ? -30 : 30, filter: "blur(8px)", transition: { duration: 0.35, ease: "easeIn" as const } }),
  };

  // Pre-calculated integer positions (avoids SSR float mismatch)
  // radius = 230, angles: top=-90°, right=0°, bottom=90°, left=180°
  const navPositions = [
    { x: 0, y: -230 },   // Quem sou — top
    { x: 230, y: 0 },    // O que faço — right
    { x: 0, y: 230 },    // Onde me formo — bottom
    { x: -230, y: 0 },   // Como penso — left
  ];

  return (
    <section id="about" className="relative px-6 py-28 overflow-hidden">
      {/* Connecting line from Hero orbit to About orbit */}
      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[1px] h-[340px] pointer-events-none hidden md:block">
        {/* Dashed vertical track */}
        <div className="h-full w-full bg-gradient-to-b from-transparent via-white/10 to-transparent border-l border-dashed border-white/20" />
        {/* Moving pulse light */}
        <motion.div
          animate={{
            y: ["0px", "340px"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-2px] w-[5px] h-10 rounded-full bg-gradient-to-b from-primary via-primary/50 to-transparent blur-[1px]"
        />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-primary/6 blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl"
      >
        <SectionLabel icon={Sparkles}>Sobre mim</SectionLabel>

        {/* ── Mobile/Tablet Version (< md) ── */}
        <div className="md:hidden mt-8 flex flex-col gap-5 w-full">
          {/* Chapter tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {aboutCards.map((c, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300 ${i === active
                  ? `border-primary/40 bg-primary/10 text-foreground`
                  : "border-white/10 bg-card/60 text-muted-foreground/60"
                  }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${i === active ? c.dotColor : "bg-white/20"} shrink-0`} />
                {c.tag}
              </button>
            ))}
          </div>

          {/* Active Card Body */}
          <div
            onClick={next}
            className="relative cursor-pointer select-none rounded-2xl border border-white/8 bg-card/70 backdrop-blur-xl px-6 py-8 overflow-hidden"
          >
            {/* Animated top color bar */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`bar-mob-${active}`}
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${card.color}`}
              />
            </AnimatePresence>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`mob-content-${active}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground/50">
                    {String(active + 1).padStart(2, "0")} / {aboutCards.length}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`text-2xl font-black ${card.dotColor.replace("bg-", "text-")}`}>{card.stat}</span>
                    <span className="text-[10px] text-muted-foreground/60">{card.statLabel}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground leading-snug">
                  {card.headline}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.body}
                </p>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/3 px-3 py-1 text-xs text-muted-foreground/70">
                  <span className={`h-1.5 w-1.5 rounded-full ${card.dotColor}`} />
                  {card.accent}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Click hint */}
            <p className="text-right text-[10px] text-muted-foreground/30 mt-4">
              clique para avançar →
            </p>
          </div>
        </div>

        {/* ── Circular composition (Desktop only >= md) ── */}
        <div className="hidden md:flex mt-14 items-center justify-center overflow-hidden w-full h-[580px]">
          {/* Outer frame */}
          <div className="relative flex items-center justify-center shrink-0" style={{ width: 560, height: 560 }}>

            {/* Ring 1 — outermost dashed */}
            <div className="absolute inset-0 rounded-full border border-dashed border-white/8 pointer-events-none" />

            {/* Ring 2 — mid solid faint */}
            <div className="absolute inset-[50px] rounded-full border border-white/6 pointer-events-none" />

            {/* Ring 3 — inner glow ring */}
            <div className="absolute inset-[90px] rounded-full border border-white/5 pointer-events-none" />

            {/* 4 cardinal dot markers on Ring 1 */}
            {[{ x: "50%", y: 0 }, { x: "100%", y: "50%" }, { x: "50%", y: "100%" }, { x: 0, y: "50%" }].map((pos, i) => (
              <div
                key={i}
                style={{ left: pos.x, top: pos.y, transform: "translate(-50%, -50%)" }}
                className="absolute h-1.5 w-1.5 rounded-full bg-white/20 pointer-events-none"
              />
            ))}

            {/* Nav chapter buttons — positioned at compass points */}
            {aboutCards.map((c, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{ transform: `translate(calc(-50% + ${navPositions[i].x}px), calc(-50% + ${navPositions[i].y}px))` }}
                className={`absolute left-1/2 top-1/2 flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold tracking-wide transition-all duration-300 ${i === active
                  ? `border-primary/40 bg-primary/15 text-foreground ${c.dotColor.replace("bg-", "shadow-")} shadow-lg`
                  : "border-white/10 bg-card/60 text-muted-foreground/60 hover:text-muted-foreground hover:border-white/20"
                  }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${i === active ? c.dotColor : "bg-white/20"} shrink-0`} />
                {c.tag}
              </button>
            ))}

            {/* ── Central card ── */}
            <div
              onClick={next}
              className="relative z-10 cursor-pointer select-none w-[300px] h-[300px] rounded-full border border-white/10 bg-card/80 backdrop-blur-2xl flex flex-col items-center justify-center text-center overflow-hidden group hover:border-primary/20 transition-all duration-500"
            >
              {/* Animated color ring on top edge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`ring-${active}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`absolute inset-0 rounded-full pointer-events-none`}
                  style={{
                    background: `radial-gradient(circle at 50% 0%, oklch(0.62 0.20 255 / 0.12) 0%, transparent 65%)`,
                  }}
                />
              </AnimatePresence>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="px-8 py-6 flex flex-col items-center gap-3 w-full"
                >
                  {/* Big stat */}
                  <div className={`text-4xl font-black tracking-tighter leading-none ${card.dotColor.replace("bg-", "text-")}`}>
                    {card.stat}
                  </div>
                  <div className="text-[10px] tracking-widest uppercase text-muted-foreground/50">{card.statLabel}</div>

                  {/* Separator line */}
                  <div className="h-px w-12 bg-white/10" />

                  {/* Headline short */}
                  <h3 className="text-sm font-bold leading-snug text-foreground px-2">
                    {card.headline.split(".")[0]}.
                  </h3>

                  {/* Tap hint */}
                  <p className="text-[10px] text-muted-foreground/30 group-hover:text-muted-foreground/60 transition-colors mt-1">
                    toque para avançar
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── Expanded card body below the circle (Desktop only >= md) ── */}
        <div className="hidden md:block mt-8 mx-auto max-w-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`body-${active}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative rounded-2xl border border-white/8 bg-card/50 backdrop-blur px-5 py-5 sm:px-8 sm:py-6 text-center"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`bodybar-${active}`}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" as const }}
                  className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${card.color} rounded-t-2xl`}
                />
              </AnimatePresence>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                {card.body}
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/3 px-4 py-1.5 text-xs font-medium text-muted-foreground/70">
                <span className={`h-1.5 w-1.5 rounded-full ${card.dotColor}`} />
                {card.accent}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------- PROJECTS BENTO ------------------- */
function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel icon={Layers}>Projetos</SectionLabel>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">A minha evolução em engenharia.</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Os meus projetos refletem a minha evolução como Software Engineer — desde sistemas académicos até plataformas SaaS e soluções escaláveis em produção.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-card/60 transition-all hover:-translate-y-1 hover:border-primary/40 ${i === 0 ? "md:col-span-4 md:row-span-2" : "md:col-span-2"
                }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.name} width={1200} height={800} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------- SERVICES ------------------- */
function Services() {
  return ServicesImpl();
}

/* ------------------- DEMOS ------------------- */
const demoMediaItems: MediaItemType[] = [
  {
    id: 1,
    type: "video",
    title: "SIGAD — Avaliação de Desempenho",
    desc: "Sistema desktop em C# / WinForms com SQL Server. Automatiza o ciclo anual de avaliação.",
    url: demoSigad.url,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    type: "video",
    title: "Mapazzz — Risco de Malária",
    desc: "App mobile de mapeamento comunitário em React Native. Hackathon · Escola 42 Luanda.",
    url: demoMapazzz.url,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "KORTA — Wallet & Pagamentos",
    desc: "UI mockup do dashboard de movimentos.",
    url: projKorta,
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 4,
    type: "image",
    title: "SIGAD · Dashboard",
    desc: "Painel de indicadores e ciclo de prémios.",
    url: projSigad,
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 5,
    type: "video",
    title: "SEPE NIF API — Consulta Fiscal",
    desc: "Demonstração em vídeo do funcionamento da API e retorno JSON.",
    url: "/videos/Api-Nif/Gravação de ecrã de 2026-06-22 17-19-45.mp4",
    span: "md:col-span-2 md:row-span-1",
    thumbnail: "/assets/Api-Nif/Captura de ecrã de 2026-06-22 17-20-35.png",
  },
];

function Demos() {
  return (
    <section id="demos" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel icon={Sparkles}>Demos em vídeo</SectionLabel>
        <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Vê os produtos em acção.
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Pequenas demonstrações dos projectos. Clica num cartão para abrir em ecrã grande.
        </p>
        <div className="mt-12">
          <InteractiveBentoGallery mediaItems={demoMediaItems} />
        </div>
      </div>
    </section>
  );
}


/* ------------------- SERVICES (impl) ------------------- */
function ServicesImpl() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel icon={Briefcase}>Serviços</SectionLabel>
        <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">Como posso ajudar a tua equipa.</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-card/60 p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-muted-foreground ring-1 ring-white/10 transition-transform group-hover:scale-110">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------- TECH STACK ------------------- */
function TechStack() {
  const groups: Record<string, { icon: typeof Code2 }> = {
    Frontend: { icon: Code2 },
    Backend: { icon: Server },
    Database: { icon: Database },
    DevOps: { icon: Cloud },
  };
  return (
    <section id="stack" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel icon={Code2}>Stack tecnológica</SectionLabel>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Ferramentas com que trabalho todos os dias.</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {(Object.keys(stack) as (keyof typeof stack)[]).map((g, i) => {
            const Icon = groups[g].icon;
            return (
              <motion.div
                key={g}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-card/60 p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-muted-foreground ring-1 ring-white/10">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight">{g}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {stack[g].map((t) => (
                    <li key={t} className="rounded-md border border-white/10 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------- EXPERIENCE ------------------- */
function Experience() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionLabel icon={GraduationCap}>Experiência & Formação</SectionLabel>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Uma linha do tempo.</h2>

        <ol className="relative mt-14 space-y-10 border-l border-white/10 pl-8">
          {experience.map((e, i) => (
            <motion.li
              key={e.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[37px] top-1 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary ring-4 ring-background" />
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{e.year}</div>
              <h3 className="mt-1 text-xl font-semibold tracking-tight">{e.role}</h3>
              <div className="text-sm text-muted-foreground">{e.org}</div>
              <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
              {e.techs && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {e.techs.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full border border-white/5 bg-white/2 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground/80">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}


/* ------------------- CONTACT ------------------- */
function Contact() {
  return ContactImpl();
}

function FeedbackExperience() {
  return (
    <section id="feedback" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionLabel icon={Sparkles}>Experiência</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              A tua opinião <strong className="font-semibold text-foreground">conta</strong>.
            </h2>
            <p className="mt-5 max-w-lg text-muted-foreground">
              Trabalhei comigo num projecto ou exploraste este portfólio? Deixa-me saber como foi a experiência —
              o feedback é o que me ajuda a entregar melhores produtos a cada iteração.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/30" /> Comunicação clara e iterativa</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/30" /> Entregas orientadas a impacto</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/30" /> Código manutenível e documentado</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <FeedbackSlider />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactImpl() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[140px]" />
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-card/70 p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <SectionLabel icon={Mail}>Vamos construir algo</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Tens uma ideia? <strong className="font-semibold text-foreground">Vamos conversar.</strong></h2>
              <p className="mt-5 text-muted-foreground">
                Disponível para freelancing, contratos de longa duração e oportunidades full-time, remoto ou em Luanda.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <a href="mailto:serafimag2020@gmail.com" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground">
                  <Mail className="h-4 w-4" /> serafimag2020@gmail.com
                </a>
                <a href="tel:+244945176834" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground">
                  <Phone className="h-4 w-4" /> +244 945 176 834
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4" /> Ícolo e Bengo · Zango 1, Luanda
                </div>
              </div>
              <div className="mt-8 flex gap-3">
                <a href="https://github.com/Serafimgonga" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full glass transition-colors hover:bg-white/10"><Github className="h-4 w-4" /></a>
                <a href="https://linkedin.com/in/serafim-gonga-08075b2a9" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full glass transition-colors hover:bg-white/10"><Linkedin className="h-4 w-4" /></a>
                <a href="https://wa.me/244945176834" target="_blank" rel="noreferrer" className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-transform hover:scale-105">WhatsApp <ArrowRight className="h-3.5 w-3.5" /></a>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 rounded-2xl border border-white/10 bg-background/40 p-6">
              <Field label="Nome"><input required type="text" className="w-full rounded-lg border border-white/10 bg-background/60 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary/60" placeholder="O teu nome" /></Field>
              <Field label="Email"><input required type="email" className="w-full rounded-lg border border-white/10 bg-background/60 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary/60" placeholder="tu@empresa.com" /></Field>
              <Field label="Mensagem"><textarea required rows={5} className="w-full resize-none rounded-lg border border-white/10 bg-background/60 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary/60" placeholder="Conta-me sobre o teu projeto..." /></Field>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01] glow-green">
                Enviar mensagem <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

/* ------------------- FOOTER ------------------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
        <div>© {new Date().getFullYear()} Serafim Gonga · Built with care in Luanda.</div>
        <div className="font-mono">serafimgonga.dev</div>
      </div>
    </footer>
  );
}

function SectionLabel({ icon: Icon, children }: { icon: typeof Code2; children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
      <Icon className="h-3.5 w-3.5 text-muted-foreground" /> {children}
    </div>
  );
}
