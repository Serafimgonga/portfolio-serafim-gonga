import { portfolioData } from '@/data/portfolio';

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Sobre Mim
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="hidden md:flex justify-center">
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-1">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center">
                <span className="text-9xl">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {personal.bio}
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Minha Jornada</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Formação Contínua</p>
                    <p className="text-slate-600 dark:text-slate-400">Engenharia de Software na Escola 42 Luanda</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Experiência Prática</p>
                    <p className="text-slate-600 dark:text-slate-400">5+ anos em análise funcional e desenvolvimento</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Ponte Negócio-Tecnologia</p>
                    <p className="text-slate-600 dark:text-slate-400">Especialista em traduzir requisitos de negócio em soluções viáveis</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Informações de Contacto</h3>
              <div className="space-y-2 text-slate-600 dark:text-slate-400">
                <p className="flex items-center space-x-2">
                  <span>📧</span>
                  <a href={`mailto:${personal.email}`} className="hover:text-blue-600 transition">
                    {personal.email}
                  </a>
                </p>
                <p className="flex items-center space-x-2">
                  <span>📱</span>
                  <a href={`tel:${personal.phone}`} className="hover:text-blue-600 transition">
                    {personal.phone}
                  </a>
                </p>
                <p className="flex items-center space-x-2">
                  <span>📍</span>
                  <span>{personal.location}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
