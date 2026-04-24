# 🚀 Guia de Deployment

Instruções passo-a-passo para fazer deploy do seu portfólio.

---

## ✅ Pré-requisitos

- [ ] Repositório Git criado
- [ ] Código fazer push para GitHub
- [ ] Conta Vercel ou Netlify
- [ ] Domínio custom (opcional, mas recomendado)

---

## 🚀 Opção 1: Vercel (RECOMENDADO)

Vercel é criado pelos autores do Next.js e oferece integração perfeita.

### 1. Preparar Código

```bash
# Certifique-se de que tudo está no Git
git add .
git commit -m "Portfólio pronto para deploy"
git push origin main
```

### 2. Conectar ao Vercel

1. Vá para [vercel.com](https://vercel.com)
2. Clique "New Project"
3. Selecione "Import Git Repository"
4. Cole seu URL do GitHub: `https://github.com/seu-usuario/serafim-portfolio`
5. Clique "Import"

### 3. Configurar Projeto

Na página de configuração:

- **Framework Preset**: Next.js ✅
- **Root Directory**: ./ (padrão)
- **Build Command**: `next build` ✅
- **Output Directory**: `.next` ✅
- **Install Command**: `npm install` ✅

Clique **Deploy**!

### 4. Aguarde Deploy

Vercel irá:
1. Clonar seu repositório
2. Instalar dependências
3. Fazer build (`next build`)
4. Fazer deploy dos arquivos estáticos

**Resultado**: Seu site em `serafim-portfolio.vercel.app`

### 5. Adicionar Domínio Custom

1. Vá para [vercel.com/dashboard](https://vercel.com/dashboard)
2. Selecione seu projeto
3. Clique em **Settings** → **Domains**
4. Clique **Add Domain**
5. Digite `serafimgonga.dev`
6. Siga as instruções para atualizar DNS

#### Atualizar DNS

No seu registrador de domínio (Ex: GoDaddy, Namecheap):

```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

ou se prefere apontar para IP:

```
Type: A
Name: @
Value: 76.76.19.132
```

**Pode demorar 5-48 horas para propagar!**

---

## 🚀 Opção 2: Netlify

Alternativa a Vercel com suporte excelente.

### 1. Preparar Código

```bash
git add .
git commit -m "Portfólio pronto para deploy"
git push origin main
```

### 2. Deploy via Netlify

1. Vá para [netlify.com](https://netlify.com)
2. Clique **Add new site** → **Import an existing project**
3. Escolha GitHub e selecione seu repositório
4. Clique **Connect & Deploy**

### 3. Configurar Build

- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18.x

Clique **Deploy site**

### 4. Domínio Custom

1. Vá para **Site settings** → **Domain management**
2. Clique **Add custom domain**
3. Digite `serafimgonga.dev`
4. Configure DNS no seu registrador

---

## 🚀 Opção 3: GitHub Pages (Grátis)

Para deploy simples sem backend.

### 1. Configurar para Export Estático

Edite `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

### 2. Build e Export

```bash
npm run build
npm run export
```

Isto cria pasta `/out` com arquivos HTML puros.

### 3. Deploy para GitHub Pages

```bash
# 1. Instale gh-pages
npm install --save-dev gh-pages

# 2. Adicione scripts em package.json
"predeploy": "npm run build && npm run export",
"deploy": "gh-pages -d out"

# 3. Execute deploy
npm run deploy
```

**Resultado**: Site em `seu-usuario.github.io/serafim-portfolio`

---

## 📋 Checklist Pré-Deploy

Antes de fazer deploy, verifique:

- [ ] `npm run build` roda sem erros
- [ ] Site funciona em `localhost:3000`
- [ ] Todos os links funcionam
- [ ] Meta tags estão corretas
- [ ] Imagens carregam corretamente
- [ ] Formulário de contacto funciona
- [ ] Mobile looks bom (testar em Responsive Design Mode)
- [ ] Lighthouse score > 90
- [ ] Sem console errors (F12)

---

## 🔗 Configurar GitHub Actions (Automático)

Deploy automático a cada push.

### 1. Criar workflow

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

### 2. Adicionar Secrets

No GitHub:
1. Settings → Secrets and variables → Actions
2. Adicione:
   - `VERCEL_TOKEN` (de [vercel.com/account/tokens](https://vercel.com/account/tokens))
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

---

## 🔍 Verificar Deploy

### 1. Testar Site

```bash
# Teste local
npm run build
npm run start
```

### 2. Lighthouse (Chrome)

1. Abra seu site em Chrome
2. F12 → Lighthouse
3. Clique "Analyze page load"
4. Espera para score

**Meta**: > 90 em todas as categorias

### 3. SEO Check

```bash
# Verifique sitemap
curl https://serafimgonga.dev/sitemap.xml

# Verifique robots.txt
curl https://serafimgonga.dev/robots.txt
```

### 4. Mobile Check

- Abra site em smartphone
- Verifique responsividade
- Teste todos os links

---

## 🚨 Troubleshooting Deploy

### Build fails com "Module not found"

```bash
rm -rf node_modules .next
npm install
npm run build
```

### Site branco após deploy

1. Verifique console do navegador (F12)
2. Verifique Vercel/Netlify logs
3. Procure por erros de import

### Domínio não funciona após 48h

1. Verifique DNS propagação: [whatsmydns.net](https://whatsmydns.net)
2. Tente limpar cache: `cmd + shift + r` (Mac) ou `ctrl + shift + r` (Windows)

### Formulário de contacto não funciona

Você precisa implementar backend (ver `components/Contact.jsx`).

Opções:
- Formspree (gratuito, simples)
- SendGrid (profissional)
- API própria em Vercel Functions

---

## 🔄 Updates & Maintenance

### Atualizar conteúdo

1. Edite `/data/portfolio.js`
2. `git add .`
3. `git commit -m "Atualizar portfólio"`
4. `git push origin main`
5. Vercel faz deploy automático!

### Atualizar dependências

```bash
npm update
npm audit fix
git push origin main
```

---

## 📊 Monitoramento

### Configurar Analytics

No `pages/_app.jsx`, adicione Google Analytics:

```javascript
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_ID');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
```

---

## 🎉 Deploy Concluído!

Parabéns! Seu portfólio está online!

**Próximos passos**:
- [ ] Compartilhe no LinkedIn
- [ ] Compartilhe no GitHub
- [ ] Atualize email/CV com link do portfólio
- [ ] Monitore analytics
- [ ] Recolha feedback

---

## 📞 Suporte

Se tiver dúvidas:
- 📧 serafimag2020@gmail.com
- 💼 LinkedIn: linkedin.com/in/serafim-gonga-08075b2a9
- 🐙 GitHub Issues

**Happy deploying! 🚀**
