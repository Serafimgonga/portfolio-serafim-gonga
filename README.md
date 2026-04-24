# 🚀 Portfólio de Serafim Adão Gonga

Portfólio profissional estático desenvolvido com **Next.js 14**, **React 18**, e **Tailwind CSS**.

- 🌐 **Site**: [serafimgonga.dev](https://serafimgonga.dev)
- 📧 **Email**: serafimag2020@gmail.com
- 💼 **LinkedIn**: [linkedin.com/in/serafim-gonga-08075b2a9](https://linkedin.com/in/serafim-gonga-08075b2a9)
- 📱 **WhatsApp**: +244 945 176 834

---

## 📋 Características

✅ **100% Estático** - SSG (Static Site Generation)  
✅ **Super Rápido** - Carregamento < 1s  
✅ **SEO Otimizado** - Meta tags, Open Graph, XML Sitemap  
✅ **Responsivo** - Mobile-first design  
✅ **Dark Mode** - Suporta tema escuro  
✅ **Acessível** - WCAG 2.1 compliant  
✅ **Moderno** - Next.js 14, React 18, Tailwind CSS 3  
✅ **Fácil Deploy** - Vercel, Netlify, GitHub Pages  

---

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14.0.0
- **UI**: React 18.2.0
- **Styling**: Tailwind CSS 3.3.0
- **Deployment**: Vercel (ou Netlify)
- **Hosting**: Domínio custom (serafimgonga.dev)

---

## 📁 Estrutura do Projeto

```
serafim-portfolio/
├── pages/
│   ├── index.jsx           # Página principal
│   ├── _app.jsx            # App wrapper
│   └── _document.jsx       # Documento HTML
├── components/
│   ├── Header.jsx          # Navegação
│   ├── Hero.jsx            # Seção inicial
│   ├── About.jsx           # Sobre mim
│   ├── Skills.jsx          # Competências
│   ├── Experience.jsx      # Experiência e formação
│   ├── Projects.jsx        # Projetos
│   ├── Contact.jsx         # Formulário de contacto
│   └── Footer.jsx          # Rodapé
├── data/
│   └── portfolio.js        # Dados do portfólio
├── styles/
│   └── globals.css         # Estilos globais
├── public/                 # Arquivos estáticos
├── next.config.js          # Configuração Next.js
├── tailwind.config.js      # Configuração Tailwind
├── postcss.config.js       # Configuração PostCSS
├── jsconfig.json           # Alias de imports
└── package.json            # Dependências
```

---

## 🚀 Quick Start

### 1. Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### 2. Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/serafim-portfolio.git
cd serafim-portfolio

# Instale as dependências
npm install
# ou
yarn install
```

### 3. Desenvolvimento Local

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### 4. Build Estático

```bash
npm run build
# ou
yarn build
```

Isto gera arquivos HTML estáticos em `.next/`.

---

## 📝 Editar Conteúdo

Toda o conteúdo do portfólio está centralizado em `/data/portfolio.js`.

### Exemplo: Adicionar um novo projeto

```javascript
// data/portfolio.js
projects: [
  {
    id: 4,
    title: 'Meu Novo Projeto',
    description: 'Descrição do projeto',
    image: '/projects/projeto.jpg',
    role: 'Full-Stack Developer',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    features: ['Feature 1', 'Feature 2'],
    timeline: '2 meses',
    status: 'Concluído',
    link: 'https://github.com/...',
  },
  // ... outros projetos
]
```

### Exemplo: Atualizar skills

```javascript
// data/portfolio.js
skills: [
  {
    category: 'Nova Competência',
    items: ['Skill 1', 'Skill 2'],
    color: 'from-purple-500 to-pink-500',
  },
  // ... outras competências
]
```

---

## 🎨 Personalização

### Cores

Edite `tailwind.config.js`:

```javascript
colors: {
  primary: {
    950: '#0d2137',  // Azul escuro
    500: '#0ea5e9',  // Azul
  },
  secondary: {
    950: '#e67e22',  // Laranja
  },
}
```

### Fontes

Edite `pages/_document.jsx` para adicionar novas fontes do Google Fonts.

### Componentes

Todos os componentes estão em `/components/` e são reutilizáveis.

---

## 📦 Deploy

### Opção 1: Vercel (Recomendado)

```bash
# 1. Push código para GitHub
git push origin main

# 2. Vá para vercel.com, conecte seu repositório
# 3. Vercel fará deploy automático a cada push
```

**Resultado**: Site em `serafimgonga.vercel.app`

### Opção 2: Netlify

```bash
npm run build
npm install -g netlify-cli
netlify deploy --prod --dir=.next/static
```

### Opção 3: GitHub Pages

```bash
npm run export
# Commit o arquivo `/out` para branch `gh-pages`
```

---

## 🔗 Domínio Custom

### Com Vercel

1. Vá para [vercel.com/dashboard](https://vercel.com/dashboard)
2. Selecione seu projeto
3. Domain → Add → digite `serafimgonga.dev`
4. Atualize DNS no seu registrar

### Com Netlify

1. Vá para Netlify Dashboard
2. Site settings → Domain management
3. Add custom domain

---

## 📧 Formulário de Contacto

O formulário no componente `Contact.jsx` atualmente simula o envio. Para funcionalidade real, integre com:

**Opção 1: Formspree**
```javascript
const response = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

**Opção 2: SendGrid**
```javascript
// Use a API SendGrid via backend serverless
```

**Opção 3: Resend (Recomendado)**
```bash
npm install resend
```

---

## 🔍 SEO

Otimizações já incluídas:

✅ Meta tags descritivas  
✅ Open Graph (Twitter, Facebook)  
✅ Sitemap XML automático  
✅ robots.txt  
✅ Schema markup (JSON-LD)  
✅ Canonical URLs  
✅ Mobile-friendly  

---

## 🚀 Performance

Métricas esperadas:

- **Lighthouse**: 95+/100
- **FCP**: < 1.5s
- **LCP**: < 2.5s
- **CLS**: < 0.1

---

## 📱 Responsividade

Breakpoints Tailwind:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 🐛 Troubleshooting

### Erro: "Module not found"

```bash
# Limpe cache
rm -rf .next node_modules
npm install
npm run build
```

### Página em branco

```bash
# Verifique console do navegador (F12)
# Verifique se há erros em /pages/index.jsx
```

### Styles não aplicados

```bash
# Tailwind CSS às vezes precisa de rebuild
npm run build
```

---

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [Vercel Docs](https://vercel.com/docs)

---

## 📄 Licença

Este projeto está disponível sob a licença MIT. Sinta-se livre para usar como base para seu próprio portfólio!

---

## 💬 Feedback & Suporte

- 📧 Email: serafimag2020@gmail.com
- 💼 LinkedIn: [linkedin.com/in/serafim-gonga-08075b2a9](https://linkedin.com/in/serafim-gonga-08075b2a9)
- 🐙 GitHub: [@serafimgonga](https://github.com)

---

**Desenvolvido com 💙 por Serafim Adão Gonga**
