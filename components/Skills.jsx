import { portfolioData } from '@/data/portfolio';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white text-center">
            Competências Chave
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Uma seleção das principais competências técnicas e profissionais que aplico nos projetos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-blue-500/50 hover:shadow-professional transition-all duration-500 glass backdrop-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${skillGroup.color} text-white text-sm font-semibold mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}>
                {skillGroup.category}
              </div>

              <div className="space-y-3">
                {skillGroup.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all duration-300 group/item cursor-pointer"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 group-hover/item:scale-150 transition-transform"></span>
                    <span className="text-slate-800 dark:text-slate-100 group-hover/item:text-slate-900 dark:group-hover/item:text-white font-medium transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16 space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Nível de Proficiência
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Avaliação das minhas competências em diferentes áreas
            </p>
          </div>

          <div className="space-y-8">
            {[
              { name: 'Análise Funcional & Requisitos', level: 95, icon: '📋' },
              { name: 'Backend (Node.js, ASP.NET)', level: 90, icon: '⚙️' },
              { name: 'Frontend (React, Next.js)', level: 85, icon: '🎨' },
              { name: 'Banco de Dados (SQL)', level: 88, icon: '🗄️' },
              { name: 'DevOps & Cloud', level: 75, icon: '☁️' },
              { name: 'Metodologias Agile', level: 92, icon: '🏃' },
            ].map((skill, index) => (
              <div key={index} className="group space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-900 dark:text-white flex items-center gap-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <span className="text-2xl">{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden border border-slate-300 dark:border-slate-600">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 transition-all duration-1000 shadow-lg group-hover:shadow-xl"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
