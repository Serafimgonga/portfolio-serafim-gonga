import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Serafim Adão Gonga - Software Engineer & Functional Analyst</title>
        <meta
          name="description"
          content="Portfólio de Serafim Adão Gonga. Software Engineer com forte atuação em Análise Funcional, levantamento de requisitos e desenvolvimento full-stack."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Serafim Adão Gonga - Software Engineer & Functional Analyst" />
        <meta property="og:description" content="Portfolio profissional com experiência em análise funcional, Node.js, React, ASP.NET e DevOps" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://serafimgonga.dev" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Serafim Adão Gonga - Software Engineer & Functional Analyst" />
        <meta name="twitter:description" content="Portfolio profissional com experiência em análise funcional e desenvolvimento" />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>

      <main>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

// SSG - Static Generation
export async function getStaticProps() {
  return {
    props: {},
    revalidate: false, // Static site, sem revalidação
  };
}
