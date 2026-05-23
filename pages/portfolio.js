import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const EXPERTISE = [
  {
    area: 'Search Engine Optimisation',
    items: [
      'Keyword research and intent mapping',
      'Technical SEO audits and implementation',
      'Content gap analysis and strategy',
      'Authoritative link acquisition campaigns',
      'Google Search Console monitoring and reporting',
    ],
  },
  {
    area: 'Meta Advertising',
    items: [
      'Facebook and Instagram campaign management',
      'Cold, warm, and retargeting funnel structure',
      'Creative brief development and testing',
      'Cost-per-result optimisation',
      'Pixel setup, events, and conversion tracking',
    ],
  },
  {
    area: 'LinkedIn Growth',
    items: [
      'Profile positioning for target audience',
      'Weekly content strategy and scheduling',
      'Connection and outreach campaigns',
      'Thought leadership content frameworks',
      'Engagement and community building',
    ],
  },
  {
    area: 'Lead Generation',
    items: [
      'Multi-channel lead generation systems',
      'Landing page and funnel strategy',
      'Lead magnet creation',
      'Nurture sequence planning',
      'Lead scoring and qualification criteria',
    ],
  },
]

const APPROACH = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: 'Every engagement is unique',
    desc: 'A B2B SaaS company and a local service business need completely different strategies. I never apply the same formula twice.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Strategy is documented',
    desc: 'Everything is written, trackable, and handed over. You own the strategy — not just the deliverables.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Results are tracked honestly',
    desc: 'Reporting is transparent. I\'ll tell you what\'s working and what isn\'t — including the things that didn\'t go to plan.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Long-term relationships',
    desc: 'I work best with clients who see this as a partnership, not a transaction. Sustainable results take time and trust.',
  },
]

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio — Anam Shahid | Work & Case Studies</title>
        <meta name="description" content="How Anam Shahid approaches digital marketing work — SEO, Meta Ads, and LinkedIn growth. Case studies available upon request." />
        <link rel="canonical" href="https://anam.itovio.com/portfolio" />
      </Head>

      {/* Header */}
      <section style={{
        paddingTop: 'calc(68px + 80px)',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '20%', right: '-5%',
          width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,75,17,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          animation: 'pulse-glow 7s ease-in-out infinite',
        }} />
        <div className="container">
          <motion.div {...fadeUp(0.05)} style={{ maxWidth: '640px' }}>
            <span className="section-label">Work</span>
            <div className="divider" />
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: '20px',
            }}>
              Approach, expertise, and results
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.78,
            }}>
              Each client engagement is treated with full confidentiality.
              Detailed case studies with specific results are available upon request
              — reach out to see what's relevant to your industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How I work */}
      <section style={{ paddingBottom: '108px' }}>
        <div className="container">
          <motion.div {...fadeUp(0.05)} style={{ marginBottom: '52px' }}>
            <span className="section-label">My Approach</span>
            <div className="divider" />
            <h2 className="section-title">What working together looks like</h2>
            <p className="section-subtitle">
              Before methodology comes mindset. Here's how I approach every engagement,
              regardless of channel or industry.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {APPROACH.map((a, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.08 + i * 0.08)}
                whileHover={{ y: -3, boxShadow: '0 16px 40px var(--shadow)' }}
                style={{
                  padding: '32px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  transition: 'border-color 0.25s ease',
                }}
              >
                <div style={{
                  width: '48px', height: '48px',
                  background: 'var(--accent-dim)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  flexShrink: 0,
                }}>
                  {a.icon}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.0625rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                  }}>
                    {a.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                  }}>
                    {a.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section:nth-of-type(2) .container > div:last-child {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Expertise breakdown */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div {...fadeUp(0.05)} style={{ marginBottom: '52px' }}>
            <span className="section-label">Expertise</span>
            <div className="divider" />
            <h2 className="section-title">What I bring to each channel</h2>
            <p className="section-subtitle">
              Specific skills and deliverables across the core areas I specialise in.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {EXPERTISE.map((e, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.08 + i * 0.1)}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '36px',
                  transition: 'border-color 0.25s ease',
                }}
                whileHover={{ borderColor: 'var(--border-light)' }}
              >
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.175rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '20px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid var(--border)',
                }}>
                  {e.area}
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {e.items.map(item => (
                    <li key={item} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}>
                      <span style={{
                        width: '5px', height: '5px',
                        borderRadius: '50%',
                        background: 'var(--accent)',
                        flexShrink: 0,
                        marginTop: '8px',
                      }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section:nth-of-type(3) .container > div:last-child {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Case study request */}
      <section style={{ padding: '88px 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '60px',
              alignItems: 'center',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '56px 48px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at 0% 50%, rgba(200,75,17,0.07) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative' }}>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '16px',
                lineHeight: 1.2,
              }}>
                Want to see specific case studies?
              </h2>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
              }}>
                Every project has a story. Reach out and tell me your industry —
                I'll share relevant examples and walk you through the approach and
                results in detail.
              </p>
            </div>
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.0625rem',
                fontStyle: 'italic',
                color: 'var(--text-secondary)',
                marginBottom: '28px',
                lineHeight: 1.7,
              }}>
                "Each engagement is treated with full confidentiality. Work samples
                are shared privately and always with context."
              </div>
              <Link href="/contact" className="btn-primary">Request Case Studies</Link>
            </div>
          </motion.div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section:last-of-type .container > div {
              grid-template-columns: 1fr !important;
              gap: 36px !important;
              padding: 36px 24px !important;
            }
          }
        `}</style>
      </section>
    </>
  )
}
