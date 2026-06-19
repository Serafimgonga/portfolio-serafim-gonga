"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, Download, Mail, Github, Linkedin, MapPin, Phone,
  Code2, Database, Server, Cloud, Sparkles, Briefcase, GraduationCap,
  ExternalLink, Terminal, Zap, Layers, Globe,
} from "lucide-react";
import { Spotlight } from "@/components/portfolio/Spotlight";
import { Counter } from "@/components/portfolio/Counter";
import { ElegantShapes } from "@/components/portfolio/ElegantShapes";
import InteractiveBentoGallery, { type MediaItemType } from "@/components/ui/interactive-bento-gallery";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import FeedbackSlider from "@/components/ui/feedback-slider";
const portrait = "/assets/portrait.jpg";
const projMapazzz = "/assets/project-mapazzz.jpg";
const projKorta = "/assets/project-korta.jpg";
const projSigad = "/assets/project-sigad.jpg";
const demoSigad = { url: "/videos/demo-sigad.mp4" };
const demoMapazzz = { url: "/videos/demo-mapazzz.mp4" };


const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: "easeOut" as const } },
};

const companies = ["DH-IT", "IMOGESTIN", "42 Luanda", "Rocketseat", "Hackathon 42", "KORTA"];

const caseStudies = [
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
      <Spotlight />

      {/* Elegant animated shapes background */}
      <ElegantShapes />

      <Nav />
      <main className="relative z-10">
        <Hero />
        <TrustedBy />
        <Metrics />
        <CaseStudies />
        <ZoomShowcase />
        <Projects />
        <Demos />
        <Services />
        <TechStack />
        <Experience />
        <Terminal_ />
        <FeedbackExperience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ------------------- NAV ------------------- */
function Nav() {
  const links = [
    ["Sobre", "#about"],
    ["Cases", "#cases"],
    ["Demos", "#demos"],
    ["Projetos", "#projects"],
    ["Stack", "#stack"],
    ["Contacto", "#contact"],
  ];
  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto flex max-w-5xl items-center justify-between rounded-full glass px-5 py-2.5">
      <a href="#" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">S</span>
        <span className="hidden sm:inline">Serafim Gonga</span>
      </a>
      <nav className="hidden items-center gap-1 md:flex">
        {links.map(([l, h]) => (
          <a key={h} href={h} className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">{l}</a>
        ))}
      </nav>
      <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105">
        Vamos falar <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </header>
  );
}

/* ------------------- HERO ------------------- */
function Hero() {
  return (
    <section className="relative px-6 pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Disponível para novos projetos · Luanda, Angola
        </motion.div>

        <motion.h1 initial="hidden" animate="show" variants={fadeUp} className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-[88px]">
          <span className="text-gradient">Engenharia de software</span>
          <br />
          que <span className="text-primary">resolve problemas</span> reais.
        </motion.h1>

        <motion.p initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.15 }} className="mx-auto mt-7 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          Sou <strong className="text-foreground">Serafim Gonga</strong>, Fullstack Software Engineer.
          Construo aplicações web, mobile e desktop escaláveis — com .NET, React e PostgreSQL — focadas em automatizar processos e gerar impacto operacional.
        </motion.p>

        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.3 }} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-green transition-transform hover:scale-[1.03]">
            Ver Projetos <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium transition-colors hover:bg-white/10">
            <Mail className="h-4 w-4" /> Contactar
          </a>
          <a href="https://serafimgonga.dev" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            <Download className="h-4 w-4" /> Baixar CV
          </a>
        </motion.div>

        {/* Stat row */}
        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.45 }} className="mx-auto mt-16 grid max-w-3xl grid-cols-3 divide-x divide-white/10 rounded-2xl glass py-5 text-center">
          {[
            { n: 4, s: "+", l: "anos de experiência" },
            { n: 20, s: "+", l: "projetos entregues" },
            { n: 10, s: "+", l: "clientes & equipas" },
          ].map((x) => (
            <div key={x.l} className="px-4">
              <div className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                <Counter to={x.n} suffix={x.s} />
              </div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{x.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------- TRUSTED BY ------------------- */
function TrustedBy() {
  const items = [...companies, ...companies];
  return (
    <section className="border-y border-white/5 bg-card/30 py-10">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">Trabalhei com & formado por</p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-16 pr-16">
          {items.map((c, i) => (
            <span key={i} className="whitespace-nowrap text-xl font-semibold tracking-tight text-muted-foreground/70">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------- METRICS / ABOUT ------------------- */
function Metrics() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/20 blur-3xl" />
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img src={portrait} alt="Retrato de Serafim Gonga" width={800} height={1024} loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </div>
        </motion.div>

        <div>
          <SectionLabel icon={Sparkles}>Sobre mim</SectionLabel>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Construo software como quem <span className="text-primary">resolve um problema</span>, não como quem entrega um ticket.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Fullstack engineer com base sólida em backend (.NET, Node.js) e frontend (React, Next.js).
            Já levei sistemas internos desde a análise de requisitos até à formação dos utilizadores finais —
            passando por arquitetura, base de dados, integração e suporte em produção.
          </p>
          <p className="mt-4 text-muted-foreground">
            Atualmente em formação intensiva na <strong className="text-foreground">42 Luanda</strong>, com foco em sistemas, algoritmos e C / C++.
            Acredito em código limpo, automatização e em entregar valor que se mede em horas de trabalho poupadas.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { k: 80, s: "%", l: "menos trabalho manual" },
              { k: 4, s: "+", l: "stacks dominadas" },
              { k: 100, s: "%", l: "entrega documentada" },
              { k: 24, s: "h", l: "resposta média" },
            ].map((x) => (
              <div key={x.l} className="rounded-xl glass p-4">
                <div className="text-2xl font-semibold text-primary"><Counter to={x.k} suffix={x.s} /></div>
                <div className="mt-1 text-xs text-muted-foreground">{x.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
          Produtos reais. Problemas reais. <span className="text-primary">Resultados mensuráveis.</span>
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
                  <div className="text-xs uppercase tracking-[0.18em] text-primary">{cs.client}</div>
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

                  <div className="mt-7 grid grid-cols-3 gap-3">
                    {cs.results.map((r) => (
                      <div key={r.v} className="rounded-xl border border-white/10 bg-background/50 p-3">
                        <div className="text-lg font-semibold text-primary">{r.k}</div>
                        <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{r.v}</div>
                      </div>
                    ))}
                  </div>
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
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-card/60 transition-all hover:-translate-y-1 hover:border-primary/40 ${
                i === 0 ? "md:col-span-4 md:row-span-2" : "md:col-span-2"
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.name} width={1200} height={800} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
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
            Faz scroll para <span className="text-primary">mergulhar</span> no trabalho.
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
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/30 transition-transform group-hover:scale-110">
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
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
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
              <div className="text-sm text-primary">{e.org}</div>
              <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------- TERMINAL ------------------- */
function Terminal_() {
  const lines = [
    { p: "$ whoami", t: "serafim — fullstack engineer" },
    { p: "$ location", t: "Luanda, Angola · open to remote" },
    { p: "$ stack", t: ".NET · React · PostgreSQL · Docker" },
    { p: "$ currently", t: "Building KORTA + studying at 42 Luanda" },
    { p: "$ status", t: "available_for_hire = true" },
  ];
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-2xl border border-white/10 bg-card/80 font-mono shadow-2xl">
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-background/50 px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-red-500/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <span className="h-3 w-3 rounded-full bg-green-500/70" />
            <span className="ml-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground"><Terminal className="h-3 w-3" /> serafim@portfolio ~ </span>
          </div>
          <div className="space-y-2 p-5 text-sm leading-relaxed">
            {lines.map((l) => (
              <div key={l.p}>
                <span className="text-primary">{l.p}</span>
                <div className="pl-2 text-muted-foreground">→ <span className="text-foreground">{l.t}</span></div>
              </div>
            ))}
            <div className="pt-2"><span className="text-primary">$ </span><span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-primary" /></div>
          </div>
        </motion.div>
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
              A tua opinião <span className="text-primary">conta</span>.
            </h2>
            <p className="mt-5 max-w-lg text-muted-foreground">
              Trabalhei comigo num projecto ou exploraste este portfólio? Deixa-me saber como foi a experiência —
              o feedback é o que me ajuda a entregar melhores produtos a cada iteração.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Comunicação clara e iterativa</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-secondary" /> Entregas orientadas a impacto</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-chart-5" /> Código manutenível e documentado</li>
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
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Tens uma ideia? <span className="text-primary">Vamos conversar.</span></h2>
              <p className="mt-5 text-muted-foreground">
                Disponível para freelancing, contratos de longa duração e oportunidades full-time, remoto ou em Luanda.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <a href="mailto:serafimag2020@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary">
                  <Mail className="h-4 w-4 text-primary" /> serafimag2020@gmail.com
                </a>
                <a href="tel:+244945176834" className="flex items-center gap-3 text-foreground hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" /> +244 945 176 834
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" /> Ícolo e Bengo · Zango 1, Luanda
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
      <Icon className="h-3.5 w-3.5 text-primary" /> {children}
    </div>
  );
}
