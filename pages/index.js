import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'

export default function Home() {
  return (
    <>
      <Head>
        <title>Anam Shahid — SEO & Meta Ads Expert | Digital Marketing Strategist</title>
        <meta name="description" content="Anam Shahid is a digital marketing strategist specializing in SEO, Meta Ads, and LinkedIn growth. Helping businesses grow with data-driven strategies that deliver measurable results." />
        <meta name="keywords" content="SEO expert, Meta Ads, digital marketing, LinkedIn growth, lead generation, on-page SEO, off-page SEO, Facebook ads, Instagram ads" />
        <meta name="author" content="Anam Shahid" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Anam Shahid — SEO & Meta Ads Expert" />
        <meta property="og:description" content="Digital marketing strategist specializing in SEO, Meta Ads, and LinkedIn growth. Results-driven. Data-backed." />
        <meta property="og:image" content="/anam-banner.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anam.itovio.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anam Shahid — SEO & Meta Ads Expert" />
        <meta name="twitter:description" content="Digital marketing strategist specializing in SEO, Meta Ads, and LinkedIn growth." />
        <meta name="twitter:image" content="/anam-banner.jpeg" />

        {/* Canonical */}
        <link rel="canonical" href="https://anam.itovio.com" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Anam Shahid',
              jobTitle: 'Digital Marketing Strategist',
              description: 'SEO & Meta Ads Expert, LinkedIn Growth Specialist, Lead Generation',
              email: 'anamshahid2409@gmail.com',
              url: 'https://anam.itovio.com',
              knowsAbout: ['SEO', 'Meta Ads', 'LinkedIn Marketing', 'Lead Generation', 'Digital Marketing'],
            }),
          }}
        />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
