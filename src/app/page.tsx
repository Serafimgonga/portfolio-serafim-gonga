"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Download, Mail, Github, Linkedin, MapPin, Phone,
  Code2, Database, Server, Cloud, Sparkles, Briefcase, GraduationCap,
  ExternalLink, Zap, Layers, Globe, Menu, X,
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
  { name: "AlphaHydrae", desc: "Sistema inteligente (SOAR) de resposta automatizada a incidentes com IA.", stack: ["Django Ninja", "N8N", "Gemini AI", "React"], img: projAlphaHydrae, link: "https://alpha-hydrae.vercel.app/" },
  { name: "KORTA", desc: "Barber on-demand platform — pedidos ao domicílio com base em geolocalização.", stack: ["Next.js", "Node.js", "PostgreSQL"], img: projKorta, link: "#" },
  { name: "Mapazzz", desc: "Mapa colaborativo de risco de malária e educação comunitária.", stack: ["React", "Figma", "Node.js"], img: projMapazzz, link: "#" },
  { name: "SIGAD", desc: "Sistema desktop de avaliação de desempenho para IMOGESTIN.", stack: ["C#", ".NET", "SQL Server"], img: projSigad, link: "#" },
];

const services = [
  { icon: Globe, title: "Aplicações Web", desc: "Sites institucionais, dashboards e SaaS em Next.js / React, com foco em performance e SEO." },
  { icon: Server, title: "APIs & Backend", desc: "APIs REST em ASP.NET Core e Node.js, com PostgreSQL, autenticação e arquitetura limpa." },
  { icon: Layers, title: "Sistemas Empresariais", desc: "ERPs, CRMs e ferramentas internas que automatizam processos e reduzem trabalho manual." },
];

const experience = [
  { year: "2024 — 2026", role: "Engenharia de Software", org: "42 Luanda", desc: "Formação peer-to-peer baseada em projetos reais. Sistemas, algoritmos, C / C++ / Bash." },
  { year: "2021 — 2023", role: "Programador Pleno", org: "DH-IT · Luanda", desc: "Desenvolvi o SIGAD para a IMOGESTIN em C# / SQL Server. Análise de requisitos, formação de utilizadores, integração de sistemas." },
  { year: "2020 — 2021", role: "Técnico em Informática", org: "Colégio Carvajú", desc: "Projeto final: sistema de gestão para escola de condução (ICSN) em C# e SQL Server." },
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
        <CaseStudies />
        <ZoomShowcase />
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
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Construo sistemas
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                que automatizam processos e <strong className="font-semibold text-foreground">escalam com o teu negócio</strong>.
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
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                De ideias a produtos reais
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                com foco em soluções que geram <strong className="font-semibold text-foreground">resultados mensuráveis</strong> e valor real.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-green transition-transform hover:scale-[1.03]">
                Ver Projetos <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="https://serafimgonga.dev" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                <Download className="h-4 w-4" /> Baixar CV
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
    headline: "Não sou só um dev. Sou quem resolve o problema antes de escrever uma linha.",
    body: "Chamo-me Serafim Adão Gonga. Penso como engenheiro, entrego como profissional. Transformo requisitos nebulosos em sistemas que as pessoas realmente usam — e adoram usar.",
    stat: "7+",
    statLabel: "anos a construir",
    accent: "Fullstack Engineer · Angola",
    color: "from-primary/20 to-transparent",
    dotColor: "bg-primary",
  },
  {
    tag: "O que faço",
    headline: "Do primeiro commit à última linha de documentação — sem deixar nada para trás.",
    body: "Já levei produtos do zero à produção: arquitetura, base de dados, APIs, interfaces, testes e suporte. Não entrego código — entrego sistemas que funcionam.",
    stat: "20+",
    statLabel: "projetos entregues",
    accent: ".NET · Node.js · React · PostgreSQL",
    color: "from-secondary/20 to-transparent",
    dotColor: "bg-secondary",
  },
  {
    tag: "Onde me formo",
    headline: "Aprendo do jeito difícil. De propósito. É assim que fico melhor.",
    body: "Na 42 Luanda aprendo C/C++ e algoritmos sem professores, sem respostas prontas — só peer learning e problemas reais. É brutal. É o que me forma como engenheiro de verdade.",
    stat: "42",
    statLabel: "escola · Luanda",
    accent: "C · C++ · Algoritmos · Peer Learning",
    color: "from-warning/15 to-transparent",
    dotColor: "bg-warning",
  },
  {
    tag: "Como penso",
    headline: "Se não mede, não conta. Bom código é código com impacto real.",
    body: "Automatização, clareza e entrega consistente. Acredito que o melhor software é o que poupa horas de trabalho humano — e que um engenheiro bom é aquele que torna o próximo mais capaz.",
    stat: "80%",
    statLabel: "menos trabalho manual",
    accent: "Clean Code · DevOps · Automação",
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
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Quem sou e a minha <strong className="font-semibold text-foreground">experiência num clique.</strong>
        </h2>

        {/* ── Circular composition ── */}
        <div className="mt-6 sm:mt-14 flex items-center justify-center overflow-hidden w-full h-[360px] sm:h-[480px] md:h-[580px]">
          {/* Outer frame — scaled down on mobile to prevent layout overflow */}
          <div className="relative flex items-center justify-center scale-[0.58] xs:scale-[0.68] sm:scale-[0.82] md:scale-100 origin-center shrink-0" style={{ width: 560, height: 560 }}>

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

        {/* ── Expanded card body below the circle ── */}
        <div className="mt-8 mx-auto max-w-2xl">
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


/* ------------------- CASE STUDIES ------------------- */
function CaseStudies() {
  return (
    <section id="cases" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel icon={Zap}>Estudos de caso</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Produtos reais. Problemas reais. <strong className="font-semibold text-foreground">Resultados mensuráveis.</strong>
        </h2>

        <div className="mt-14 space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={cs.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card/60 p-6 transition-colors hover:border-primary/40 sm:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{cs.client}</div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{cs.title}</h3>

                  <dl className="mt-6 space-y-4 text-sm">
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground">Problema</dt>
                      <dd className="mt-1 text-foreground">{cs.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground">Solução</dt>
                      <dd className="mt-1 text-foreground">{cs.solution}</dd>
                    </div>
                  </dl>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {cs.stack.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">{t}</span>
                    ))}
                  </div>

                  {/*<div className="mt-7 grid grid-cols-3 gap-3">
                    {cs.results.map((r) => (
                      <div key={r.v} className="rounded-xl border border-white/10 bg-background/50 p-3">
                        <div className="text-lg font-semibold text-primary">{r.k}</div>
                        <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{r.v}</div>
                      </div>
                    ))}
                  </div>*/}

                  {("liveUrl" in cs || "videoUrl" in cs) && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {cs.liveUrl && (
                        <a
                          href={cs.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-white/10"
                        >
                          Visitar Web <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                      {cs.videoUrl && (
                        <a
                          href={cs.videoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/15 px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
                        >
                          Ver Vídeo Demo <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <div className={`relative overflow-hidden rounded-2xl border border-white/10 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img src={cs.image} alt={cs.title} width={1200} height={800} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------- PROJECTS BENTO ------------------- */
function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel icon={Layers}>Projetos recentes</SectionLabel>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Coisas que construí ultimamente.</h2>
        <p className="sr-only">Projetos recentes</p>

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
    title: "AlphaHydrae · Resposta a Incidentes",
    desc: "Demonstração da detecção de incidentes, automação com N8N e parecer técnico por IA.",
    url: "https://drive.google.com/file/d/1xA05KCmdhccAdj7xtKDONj44LOTDd3GP/view?usp=sharing",
    span: "md:col-span-2 md:row-span-1",
    thumbnail: projAlphaHydrae,
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

/* ------------------- ZOOM PARALLAX SHOWCASE ------------------- */
function ZoomShowcase() {
  const images = [
    { src: projAlphaHydrae, alt: "AlphaHydrae dashboard" },
    { src: projSigad, alt: "SIGAD dashboard" },
    { src: projKorta, alt: "KORTA wallet" },
    { src: projMapazzz, alt: "Mapazzz mapa" },
    { src: portrait, alt: "Serafim Gonga" },
    { src: projSigad, alt: "SIGAD relatórios" },
    { src: projKorta, alt: "KORTA pagamentos" },
    { src: projMapazzz, alt: "Mapazzz risco" },
  ];
  return (
    <section className="relative">
      <div className="px-6 pt-28 pb-10">
        <div className="mx-auto max-w-6xl text-center">
          <SectionLabel icon={Sparkles}>Imersão visual</SectionLabel>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Faz scroll para <strong className="font-semibold text-foreground">mergulhar</strong> no trabalho.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Um passeio cinematográfico pelos produtos que construí.
          </p>
        </div>
      </div>
      <ZoomParallax images={images} />
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
