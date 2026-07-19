import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const EXPERIENCE = [
  {
    company: 'Lukadah LLC',
    role: 'Remote E-Commerce Executive',
    period: 'July 2026 — Present',
    desc: 'Managing product listings on e-commerce platforms, processing orders, handling customer inquiries, coordinating with logistics partners, and preparing sales performance reports.',
  },
  {
    company: 'Rhino Clicks',
    role: 'On-Page SEO Intern',
    period: 'June 2025 — August 2025',
    desc: 'Gained hands-on experience in on-page content strategies, keyword optimization, and meta tags, and contributed to team SEO projects.',
  },
  {
    company: 'Laskon Tech',
    role: 'Off-Page SEO Specialist',
    period: '',
    desc: 'High-quality backlink building, guest posting outreach, link insertion, and domain authority improvement for client websites.',
  },
  {
    company: "Elibas — Children's Clothing Store",
    role: 'Shopify Store Manager & Meta Ads Specialist',
    period: '2025',
    desc: 'Managed the complete Shopify store — product listings, store design, and pricing strategy — and ran targeted Meta Ads campaigns on Facebook and Instagram.',
  },
  {
    company: 'SmartSpheres',
    role: 'E-Commerce Entrepreneur — Shopify Store Owner',
    period: '2025',
    desc: 'Built and managed own Shopify dropshipping store from scratch. Handled product research, listing creation, SEO optimization, store design, and digital marketing strategies.',
  },
]

const CERTIFICATIONS = [
  {
    title: 'Digital Marketing Certificate',
    issuer: 'Enablers',
    year: '2024',
  },
  {
    title: 'On-Page SEO Intern Certificate',
    issuer: 'Rhino Clicks',
    year: 'June 2025 — August 2025',
  },
]

const VALUES = [
  {
    title: 'Research Before Everything',
    desc: 'Every strategy starts with a deep dive into your market, competitors, and audience. Tactics without context are just guesses.',
  },
  {
    title: 'Data Over Assumptions',
    desc: 'Campaigns are built on what the numbers show — not what we hope will work. Performance is tracked obsessively, and adjusted accordingly.',
  },
  {
    title: 'Long-Term Thinking',
    desc: 'Quick wins have their place, but I always design for compound growth. Every decision considers where the strategy will be in 6 months.',
  },
  {
    title: 'Transparent Communication',
    desc: "You'll always know what's happening, what's working, and what's being adjusted. No black boxes, no jargon for its own sake.",
  },
]

export default function About() {
  return (
    <>
      <Head>
        <title>About — Anam Shahid | Digital Marketing Strategist</title>
        <meta name="description" content="Learn about Anam Shahid — a digital marketing strategist specializing in SEO, Meta Ads, and LinkedIn growth. Her story, approach, and working style." />
        <link rel="canonical" href="https://anam.itovio.com/about" />
      </Head>

      {/* Page header */}
      <section style={{
        paddingTop: 'calc(68px + 80px)',
        paddingBottom: '0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '30%', right: '-5%',
          width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,75,17,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container">
          <motion.div {...fadeUp(0.05)} style={{ maxWidth: '640px' }}>
            <span className="section-label">About</span>
            <div className="divider" />
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: '20px',
            }}>
              The strategist behind the brand
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
            }}>
              I help businesses build lasting visibility, generate qualified leads,
              and grow with digital marketing strategies that are built to last.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Banner */}
      <section style={{ padding: '56px 0 0' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="container"
        >
          <div style={{
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            position: 'relative',
          }}>
            <img
              src="/anam-banner.jpeg"
              alt="Anam Shahid — SEO and Meta Ads Expert"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </motion.div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}>
            <motion.div {...fadeUp(0.1)}>
              <span className="section-label">My Story</span>
              <div className="divider" />
              <h2 className="section-title">A Strategist Who Delivers, Not Just Advises</h2>
              <p style={{
                fontSize: '1.0625rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.82,
                marginBottom: '20px',
              }}>
                I'm Anam Shahid — a digital marketing strategist with a focused specialization
                in SEO and Meta advertising. I work with brands that are serious about growth,
                building strategies that are grounded in research and executed with precision.
              </p>
              <p style={{
                fontSize: '1.0625rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.82,
                marginBottom: '20px',
              }}>
                My work sits at the intersection of data and human behaviour. I believe that
                great marketing isn't about being louder — it's about being more relevant. The
                brands that win online understand their audience deeply and show up exactly where
                and when it matters.
              </p>
              <p style={{
                fontSize: '1.0625rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.82,
                marginBottom: '36px',
              }}>
                I don't take on projects I can't deliver results on. If your goals are
                realistic and your commitment is genuine, I bring the same level of commitment
                to your growth as I would to my own brand.
              </p>
              <Link href="/contact" className="btn-primary">Work With Me</Link>
            </motion.div>

            {/* Values */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {VALUES.map((v, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.12 + i * 0.1)}
                  style={{
                    padding: '26px 28px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderLeft: '3px solid var(--accent)',
                    borderRadius: '6px',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  }}
                  whileHover={{ y: -3, boxShadow: '0 12px 32px var(--shadow)' }}
                >
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.0625rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                  }}>
                    {v.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                  }}>
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            section:nth-of-type(3) .container > div {
              grid-template-columns: 1fr !important;
              gap: 44px !important;
            }
          }
        `}</style>
      </section>

      {/* Experience */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div {...fadeUp(0.05)} style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">Experience</span>
            <div className="divider" style={{ margin: '0 auto 20px' }} />
            <h2 className="section-title" style={{ margin: '0 auto' }}>Where I've put strategy to work</h2>
          </motion.div>

          <div style={{
            maxWidth: '780px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}>
            {EXPERIENCE.map((job, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.08 + i * 0.08)}
                whileHover={{ y: -3, boxShadow: '0 12px 32px var(--shadow)' }}
                style={{
                  padding: '28px 32px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderLeft: '3px solid var(--accent)',
                  borderRadius: '6px',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: '12px',
                  flexWrap: 'wrap',
                  marginBottom: '6px',
                }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.1875rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}>
                    {job.company}
                  </h3>
                  {job.period && (
                    <span className="tag" style={{ fontSize: '0.75rem', padding: '4px 12px' }}>
                      {job.period}
                    </span>
                  )}
                </div>
                <div style={{
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  marginBottom: '12px',
                }}>
                  {job.role}
                </div>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                }}>
                  {job.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="container">
          <motion.div {...fadeUp(0.05)} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Certifications</span>
            <div className="divider" style={{ margin: '0 auto 20px' }} />
            <h2 className="section-title" style={{ margin: '0 auto' }}>Credentials behind the craft</h2>
          </motion.div>

          <div className="cert-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
            maxWidth: '780px',
            margin: '0 auto',
          }}>
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.1 + i * 0.1)}
                whileHover={{ y: -3, boxShadow: '0 12px 32px var(--shadow)' }}
                style={{
                  padding: '32px 28px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  textAlign: 'center',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                <div style={{
                  width: '52px', height: '52px',
                  margin: '0 auto 18px',
                  background: 'var(--accent-dim)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                }}>
                  {cert.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  {cert.issuer} · {cert.year}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 700px) {
            .cert-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Expertise tags */}
      <section style={{ paddingBottom: '108px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '48px 40px',
              textAlign: 'center',
            }}
          >
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '10px',
            }}>
              Areas of Expertise
            </h3>
            <p style={{
              fontSize: '0.9375rem',
              color: 'var(--text-secondary)',
              marginBottom: '28px',
            }}>
              What I specialize in — and what your brand can benefit from.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center',
            }}>
              {[
                'On-Page SEO', 'Off-Page SEO & Backlink Building', 'Keyword Research',
                'Shopify Store Management', 'Meta Ads', 'Facebook Advertising', 'Instagram Advertising',
                'Content Writing & Blog Articles', 'Product Descriptions', 'Social Media Marketing',
                'Lead Generation', 'LinkedIn Management',
              ].map(tag => (
                <span key={tag} className="tag" style={{ fontSize: '0.8125rem', padding: '6px 14px' }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
