import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-slate-900 shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SA</span>
            </div>
            <span className="text-lg font-bold text-slate-900 dark:text-white hidden sm:inline">
              Serafim Gonga
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 transition">
              Sobre
            </a>
            <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 transition">
              Competências
            </a>
            <a href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 transition">
              Experiência
            </a>
            <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 transition">
              Projetos
            </a>
            <a href="#contact" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Contacto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#about" className="block px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
              Sobre
            </a>
            <a href="#skills" className="block px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
              Competências
            </a>
            <a href="#experience" className="block px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
              Experiência
            </a>
            <a href="#projects" className="block px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
              Projetos
            </a>
            <a href="#contact" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Contacto
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
