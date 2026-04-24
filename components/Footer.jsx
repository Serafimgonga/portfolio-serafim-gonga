import { portfolioData } from '@/data/portfolio';

export default function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">SA</span>
              </div>
              <span className="font-bold text-white">Serafim Gonga</span>
            </div>
            <p className="text-sm text-slate-400">
              Software Engineer & Functional Analyst
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition">
                  Competências
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-400 transition">
                  Experiência
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition">
                  Projetos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${personal.email}`} className="hover:text-blue-400 transition">
                  {personal.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personal.phone}`} className="hover:text-blue-400 transition">
                  {personal.phone}
                </a>
              </li>
              <li className="text-slate-400">{personal.location}</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition text-sm"
              >
                🐙
              </a>
              <a
                href="https://linkedin.com/in/serafim-gonga-08075b2a9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition text-sm"
              >
                💼
              </a>
              <a
                href="https://wa.me/244945176834"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition text-sm"
              >
                💬
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-slate-400">
          <p>
            © {currentYear} Serafim Adão Gonga. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido com <span className="text-blue-400">💙</span> usando Next.js + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
