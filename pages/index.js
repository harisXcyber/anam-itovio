import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
})

const HIGHLIGHTS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    title: 'SEO & Content',
    desc: 'On-page and off-page SEO, keyword research, and content writing that improve visibility and drive qualified organic traffic.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'Meta Ads & Social Media',
    desc: 'Precision-targeted Facebook and Instagram advertising, plus organic social media and LinkedIn management that build lasting presence.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
    title: 'Shopify & E-Commerce',
    desc: 'Complete Shopify store management — product listings, store design, pricing strategy, and product descriptions that convert.',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Anam Shahid — SEO & Meta Ads Expert | Digital Marketing Strategist</title>
        <meta name="description" content="Anam Shahid is a digital marketing strategist specializing in SEO, Meta Ads, and LinkedIn growth. Data-driven strategies that deliver measurable business results." />
        <meta name="keywords" content="SEO expert, Meta Ads, digital marketing, LinkedIn growth, lead generation, Anam Shahid" />
        <meta property="og:title" content="Anam Shahid — SEO & Meta Ads Expert" />
        <meta property="og:description" content="Digital marketing strategist specializing in SEO, Meta Ads, and LinkedIn growth." />
        <meta property="og:image" content="/anam-banner.jpeg" />
        <meta property="og:url" content="https://anam.itovio.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://anam.itovio.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Anam Shahid',
          jobTitle: 'Digital Marketing Strategist',
          email: 'anamshahid2409@gmail.com',
          url: 'https://anam.itovio.com',
          knowsAbout: ['SEO', 'Meta Ads', 'LinkedIn Marketing', 'Lead Generation'],
        }) }} />
      </Head>

      {/* ── Hero ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '68px',
      }}>
        {/* Animated background orbs */}
        <div style={{
          position: 'absolute',
          top: '10%', right: '5%',
          width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,75,17,0.12) 0%, transparent 70%)',
          animation: 'pulse-glow 6s ease-in-out infinite',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '0', left: '-10%',
          width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,75,17,0.06) 0%, transparent 70%)',
          animation: 'pulse-glow 8s ease-in-out infinite 2s',
          pointerEvents: 'none',
        }} />

        {/* Top border glow */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%)',
          opacity: 0.5,
        }} />

        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center',
          padding: '80px 24px',
        }}>
          {/* Text */}
          <div>
            <motion.div {...fadeUp(0.1)}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '10.5px',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                padding: '7px 14px',
                border: '1px solid var(--border-light)',
                borderRadius: '3px',
                marginBottom: '28px',
              }}>
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: 'var(--accent)',
                  animation: 'pulse-glow 2s ease-in-out infinite',
                }} />
                Digital Marketing Strategist
              </span>
            </motion.div>

            <motion.h1 {...fadeUp(0.18)} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.6rem, 5.5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '24px',
              color: 'var(--text-primary)',
            }}>
              Grow Your Brand.{' '}
              <span style={{
                color: 'var(--accent)',
                display: 'block',
                fontStyle: 'italic',
              }}>
                Dominate Search.
              </span>
            </motion.h1>

            <motion.p {...fadeUp(0.26)} style={{
              fontSize: '1.0625rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '40px',
              maxWidth: '480px',
            }}>
              I'm Anam Shahid — an SEO and Meta Ads expert who helps businesses
              build lasting visibility, generate qualified leads, and turn digital
              presence into real business growth.
            </motion.p>

            <motion.div {...fadeUp(0.34)} style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Start a Project</Link>
              <Link href="/services" className="btn-outline">See Services</Link>
            </motion.div>

            {/* Roles */}
            <motion.div {...fadeUp(0.42)} style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginTop: '44px',
              paddingTop: '36px',
              borderTop: '1px solid var(--border)',
            }}>
              {['On-Page SEO', 'Off-Page SEO', 'Meta Ads Expert', 'Lead Generation', 'LinkedIn Growth'].map(r => (
                <span key={r} className="tag">{r}</span>
              ))}
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] } }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', width: 'min(400px, 90%)' }}>
              {/* Rotating ring */}
              <div style={{
                position: 'absolute',
                inset: '-28px',
                borderRadius: '50%',
                border: '1px dashed var(--border-light)',
                animation: 'ring-rotate 20s linear infinite',
                pointerEvents: 'none',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '10%', right: '-4px',
                  width: '8px', height: '8px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                }} />
              </div>

              {/* Static outer ring */}
              <div style={{
                position: 'absolute',
                inset: '-48px',
                borderRadius: '50%',
                border: '1px solid rgba(200,75,17,0.06)',
                pointerEvents: 'none',
              }} />

              {/* Glow */}
              <div style={{
                position: 'absolute',
                inset: '-20px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(200,75,17,0.22) 0%, transparent 70%)',
                filter: 'blur(24px)',
                animation: 'pulse-glow 4s ease-in-out infinite',
                pointerEvents: 'none',
              }} />

              {/* Photo */}
              <motion.img
                src="/anam-dp.jpeg"
                alt="Anam Shahid"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  position: 'relative',
                  zIndex: 1,
                  border: '3px solid var(--border)',
                }}
              />

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.6, duration: 0.5 } }}
                style={{
                  position: 'absolute',
                  bottom: '18px', right: '-20px',
                  background: 'var(--accent)',
                  color: '#fff',
                  padding: '10px 16px',
                  borderRadius: '6px',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  zIndex: 2,
                  boxShadow: '0 8px 24px rgba(200,75,17,0.4)',
                }}
              >
                SEO &amp; Meta Ads Expert
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What I Do ── */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span className="section-label">What I Do</span>
            <div className="divider" style={{ margin: '0 auto 20px' }} />
            <h2 className="section-title" style={{ margin: '0 auto 16px' }}>
              Strategy, Execution, Results
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
              Three core disciplines — each one focused on growing your brand
              through channels that actually drive business outcomes.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}>
            {HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="card"
                style={{ padding: '36px 28px', position: 'relative', overflow: 'hidden' }}
              >
                {/* Glow on hover */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0,
                  width: '100%', height: '2px',
                  background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                }} className="card-glow-top" />

                <div style={{
                  width: '52px', height: '52px',
                  background: 'var(--accent-dim)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  marginBottom: '22px',
                  transition: 'background 0.25s, transform 0.25s',
                }}>
                  {item.icon}
                </div>

                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.175rem',
                  fontWeight: 600,
                  marginBottom: '12px',
                  color: 'var(--text-primary)',
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.72,
                }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ textAlign: 'center', marginTop: '48px' }}
          >
            <Link href="/services" className="btn-outline">
              View All Services
            </Link>
          </motion.div>
        </div>

        <style>{`
          .card:hover .card-glow-top { opacity: 1 !important; }
          @media (max-width: 900px) {
            section:nth-of-type(2) .container > div:nth-of-type(2) {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 900px) {
            #hero-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ padding: '88px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(200,75,17,0.08) 0%, transparent 60%)',
        }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">Ready to Grow?</span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '18px',
              lineHeight: 1.2,
            }}>
              Let's build a strategy around your goals.
            </h2>
            <p style={{
              fontSize: '1.0625rem',
              color: 'var(--text-secondary)',
              marginBottom: '36px',
              maxWidth: '480px',
              margin: '0 auto 36px',
            }}>
              Every engagement starts with a conversation. No obligation —
              just an honest discussion about where you are and where you want to be.
            </p>
            <Link href="/contact" className="btn-primary">
              Start the Conversation
            </Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section:first-of-type .container {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding: 60px 18px !important;
          }
          section:first-of-type .container > div:last-child {
            order: -1;
          }
        }
        @media (max-width: 600px) {
          section:nth-of-type(2) .container > div:nth-of-type(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
