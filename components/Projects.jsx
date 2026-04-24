import { portfolioData } from '@/data/portfolio';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Fundo Decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center">
            Projetos Destacados
          </h2>
          <p className="text-center text-slate-300 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e as soluções que implementamos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative h-full rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 shadow-professional hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Imagem do Projeto */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center relative overflow-hidden group-hover:from-blue-600 group-hover:to-cyan-600 transition-colors duration-500">
                <div className="text-6xl group-hover:scale-125 transition-transform duration-500">
                  {getProjectEmoji(project.id)}
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-500"></div>
              </div>

              {/* Conteúdo do Projeto */}
              <div className="p-6 space-y-4 bg-white dark:bg-slate-900 relative z-10">
                {/* Title & Status */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                </div>

                {/* Role */}
                <div className="flex items-center space-x-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    👤 Papel:
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {project.role}
                  </span>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    🛠️ Tecnologias
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 font-medium border border-blue-200/50 dark:border-blue-700/30 hover:shadow-md transition-shadow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    ✨ Funcionalidades Principais
                  </p>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 group/item">
                        <span className="text-blue-500 font-bold group-hover/item:translate-x-1 transition-transform">✓</span>
                        <span className="group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">{feature}</span>
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-blue-600 dark:text-blue-400 text-xs font-semibold">
                        +{project.features.length - 3} mais funcionalidades
                      </li>
                    )}
                  </ul>
                </div>

                {/* Timeline & Status */}
                <div className="flex items-center justify-between text-sm pt-2">
                  <span className="text-slate-600 dark:text-slate-400">
                    ⏱️ {project.timeline}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 text-xs font-semibold border border-green-200/50 dark:border-green-700/30">
                    {project.status}
                  </span>
                </div>

                {/* Link do Projeto */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 group/btn"
                >
                  <span className="flex items-center justify-center gap-2">
                    Ver Projeto
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-lg text-slate-300">
            Tem um projeto em mente?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Vamos Colaborar
          </a>
        </div>
      </div>
    </section>
  );
}

function getProjectEmoji(id) {
  const emojis = {
    1: '🏫',
    2: '📚',
    3: '🗄️',
  };
  return emojis[id] || '💻';
}
