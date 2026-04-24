import { portfolioData } from '@/data/portfolio';

export default function Hero() {
  const { personal, social } = portfolioData;

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Elementos Decorativos */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-200 dark:bg-cyan-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse-glow"></div>
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 shadow-professional">
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                  <span className="text-5xl animate-float">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              <span className="block">Olá, eu sou</span>
              <span className="block gradient-text">{personal.name}</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-semibold mb-4">
              {personal.title}
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {personal.subtitle}
            </p>
          </div>

          {/* Botões CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 group"
            >
              Ver Projetos
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-slate-800/50 transition-all duration-300 glass"
            >
              Entre em Contacto
            </a>
          </div>

          {/* Links Sociais */}
          <div className="flex justify-center gap-4 pt-4">
            {social.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-professional transition-all duration-300 hover:-translate-y-1"
                title={link.name}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <SocialIcon name={link.icon} />
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <div className="space-y-1 p-4 rounded-lg hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors duration-300">
              <p className="text-3xl font-bold gradient-text">
                {portfolioData.stats.experience}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Anos de Experiência</p>
            </div>
            <div className="space-y-1 p-4 rounded-lg hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors duration-300">
              <p className="text-3xl font-bold gradient-text">
                {portfolioData.stats.projects}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Projetos Completados</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {portfolioData.stats.satisfaction}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Satisfação Clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ name }) {
  const icons = {
    github: '🐙',
    linkedin: '💼',
    mail: '✉️',
    whatsapp: '💬',
  };
  return <span className="text-xl">{icons[name] || '🔗'}</span>;
}
