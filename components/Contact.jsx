import { portfolioData } from '@/data/portfolio';
import { useState } from 'react';

export default function Contact() {
  const { personal, social } = portfolioData;
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      // Simular envio (em produção, conectar a um serviço como SendGrid ou Formspree)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      e.target.reset();
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center">
          Vamos Trabalhar Juntos
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Tem um projecto interessante ou gostaria de discutir uma oportunidade? Entre em contacto!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Sobre o quê?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
              </button>

              {status === 'success' && (
                <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-center">
                  ✓ Mensagem enviada com sucesso!
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 rounded-lg bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 text-center">
                  ✗ Erro ao enviar. Tente novamente.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Outras Formas de Contacto
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <span className="text-3xl">📧</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Email</p>
                    <p className="text-slate-600 dark:text-slate-400">{personal.email}</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personal.phone}`}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <span className="text-3xl">📱</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Telefone</p>
                    <p className="text-slate-600 dark:text-slate-400">{personal.phone}</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/244945176834"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <span className="text-3xl">💬</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">WhatsApp</p>
                    <p className="text-slate-600 dark:text-slate-400">Mensagem rápida</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start space-x-4 p-4 rounded-lg">
                  <span className="text-3xl">📍</span>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Localização</p>
                    <p className="text-slate-600 dark:text-slate-400">{personal.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Siga-me Nas Redes
              </h3>
              <div className="flex gap-4">
                {social.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"
                    title={link.name}
                  >
                    <SocialIcon name={link.icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="p-6 rounded-lg bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <span className="font-semibold">⚡ Resposta Rápida:</span> Respondo a todos os enquiries em menos de 24 horas.
              </p>
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
