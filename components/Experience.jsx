import { portfolioData } from '@/data/portfolio';

export default function Experience() {
  const { experience, education, certifications } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Experiência & Formação
        </h2>

        {/* Linha Temporal de Experiência */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Experiência Profissional</h3>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={job.id}
                className="relative pl-8 pb-8 border-l-2 border-blue-500 last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-4 h-4 rounded-full bg-blue-500"></div>

                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg hover:shadow-lg transition">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      {job.role}
                    </h4>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                      {job.period}
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    <span className="font-semibold">{job.company}</span> • {job.location} ({job.duration})
                  </p>

                  <ul className="space-y-2">
                    {job.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                        <span className="text-blue-500 mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Formação Académica</h3>
          <div className="space-y-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="p-6 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 border border-blue-200 dark:border-slate-600"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <span className="text-sm text-blue-600 dark:text-blue-400">
                    {edu.status}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  <span className="font-semibold">{edu.institution}</span> • {edu.location}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  {edu.period}
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Certificações</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-lg transition"
              >
                <div className="text-3xl mb-3">🏆</div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  {cert.issuer} • {cert.date}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
