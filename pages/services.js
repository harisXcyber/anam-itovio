import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const SERVICES = [
  {
    number: '01',
    title: 'On-Page SEO',
    desc: 'Optimising every element within your website — content, structure, meta tags, internal linking, and page speed — so search engines can understand, index, and rank your pages effectively.',
    deliverables: ['Content Optimisation', 'Meta Title & Description Optimisation', 'Internal Linking Structure', 'Content Audit & Recommendations', 'Page Speed & Core Web Vitals'],
  },
  {
    number: '02',
    title: 'Off-Page SEO & Backlink Building',
    desc: 'Building your site\'s authority through high-quality backlink acquisition — guest posting outreach, link insertion, and domain authority improvement that signals trust to Google, not shortcuts that create risk.',
    deliverables: ['Guest Posting Outreach', 'Link Insertion', 'Competitor Backlink Analysis', 'Domain Authority Growth', 'Anchor Text Strategy'],
  },
  {
    number: '03',
    title: 'Shopify Store Management',
    desc: 'Complete Shopify store management — product listings, store design, pricing strategy, and day-to-day operations — so your store looks professional, converts visitors, and runs smoothly.',
    deliverables: ['Product Listings', 'Store Design', 'Pricing Strategy', 'Order Processing', 'Conversion Optimisation'],
  },
  {
    number: '04',
    title: 'Meta Ads (Facebook & Instagram)',
    desc: 'End-to-end management of Facebook and Instagram advertising campaigns — from audience research and creative direction to ongoing optimisation and reporting.',
    deliverables: ['Audience Research & Targeting', 'Campaign Architecture', 'Ad Creative Strategy', 'A/B Testing', 'Budget Management', 'Performance Reporting'],
  },
  {
    number: '05',
    title: 'Content Writing & Blog Articles',
    desc: 'SEO-friendly blog articles and website content written to rank, engage, and convert — building topical authority while supporting your wider marketing strategy.',
    deliverables: ['Blog Articles', 'Website Copy', 'SEO Content Briefs', 'Content Calendars'],
  },
  {
    number: '06',
    title: 'Product Descriptions',
    desc: 'Persuasive, search-optimised product descriptions for Shopify and e-commerce stores — copy that highlights benefits, answers objections, and turns browsers into buyers.',
    deliverables: ['E-Commerce Copywriting', 'Benefit-Led Descriptions', 'SEO Optimisation', 'Brand Voice Consistency'],
  },
  {
    number: '07',
    title: 'Keyword Research',
    desc: 'In-depth keyword research that uncovers what your audience is actually searching for — mapping high-intent terms to pages so every piece of content has a clear ranking target.',
    deliverables: ['Search Intent Analysis', 'Competitor Gap Analysis', 'Keyword Mapping', 'Long-Tail Opportunities'],
  },
  {
    number: '08',
    title: 'Social Media Marketing',
    desc: 'Organic social media strategy and management that keeps your brand visible, consistent, and engaging across the platforms where your audience spends its time.',
    deliverables: ['Content Planning', 'Platform Strategy', 'Engagement Growth', 'Brand Consistency'],
  },
  {
    number: '09',
    title: 'Lead Generation',
    desc: 'Multi-channel systems that consistently fill your pipeline with qualified prospects. Combining organic and paid strategies, built around your specific sales process and ideal customer.',
    deliverables: ['Funnel Architecture', 'Landing Page Strategy', 'Multi-Channel Campaigns', 'Lead Qualification Criteria', 'Follow-Up Sequence Design'],
  },
  {
    number: '10',
    title: 'LinkedIn Management',
    desc: 'Complete LinkedIn presence management — profile positioning, content that builds authority, and outreach systems designed to attract the right opportunities to your profile.',
    deliverables: ['Profile Optimisation', 'Content Calendar & Strategy', 'Engagement Tactics', 'Connection Growth', 'Inbound Lead Strategy'],
  },
]

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'Understanding your business, current position, competitive landscape, and what success looks like for you.' },
  { step: '02', title: 'Strategy', desc: 'Building a tailored plan — specific channels, tactics, and timelines based on your goals and budget.' },
  { step: '03', title: 'Execution', desc: 'Implementing the strategy with precision, tracking performance at every step and adjusting as needed.' },
  { step: '04', title: 'Reporting', desc: 'Clear, honest reporting on what\'s working and what\'s next. No vanity metrics — only numbers that matter to your business.' },
]

export default function Services() {
  return (
    <>
      <Head>
        <title>Services — Anam Shahid | SEO, Meta Ads & Digital Marketing</title>
        <meta name="description" content="Digital marketing services from Anam Shahid — on-page & off-page SEO, Shopify store management, Meta Ads, content writing, keyword research, social media marketing, lead generation, and LinkedIn management." />
        <link rel="canonical" href="https://anam.itovio.com/services" />
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
          top: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          opacity: 0.4,
        }} />
        <div style={{
          position: 'absolute',
          top: '20%', right: '-8%',
          width: '480px', height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,75,17,0.09) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container">
          <motion.div {...fadeUp(0.05)} style={{ maxWidth: '640px' }}>
            <span className="section-label">What I Offer</span>
            <div className="divider" />
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: '20px',
            }}>
              Services built around your growth
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.78,
            }}>
              Every service is designed to produce tangible, measurable results.
              No packages. No one-size-fits-all. Your strategy is built around your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ paddingBottom: '108px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
          }}>
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                whileHover={{ y: -4, boxShadow: '0 20px 48px var(--shadow)' }}
                style={{
                  padding: '40px 36px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  transition: 'border-color 0.25s ease',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onHoverStart={e => { e.target && (e.target.style) && (e.target.style.borderColor = 'var(--border-light)') }}
                onHoverEnd={e => { e.target && (e.target.style) && (e.target.style.borderColor = 'var(--border)') }}
              >
                {/* Number */}
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '3.5rem',
                  fontWeight: 800,
                  color: 'var(--accent-dim)',
                  lineHeight: 1,
                  marginBottom: '20px',
                  position: 'absolute',
                  top: '24px', right: '28px',
                  userSelect: 'none',
                }}>
                  {s.number}
                </div>

                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.3125rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '14px',
                  paddingRight: '60px',
                }}>
                  {s.title}
                </h3>

                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                  marginBottom: '24px',
                }}>
                  {s.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {s.deliverables.map(d => (
                    <span key={d} className="tag">{d}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 840px) {
            section:nth-of-type(2) .container > div {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* How I Work */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <motion.div {...fadeUp(0.05)} style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">The Process</span>
            <div className="divider" style={{ margin: '0 auto 20px' }} />
            <h2 className="section-title" style={{ margin: '0 auto' }}>How every engagement works</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', position: 'relative' }}>
            {/* Connecting line */}
            <div style={{
              position: 'absolute',
              top: '36px',
              left: '12.5%', right: '12.5%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, var(--border-light), transparent)',
              pointerEvents: 'none',
            }} />

            {PROCESS.map((p, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.1 + i * 0.1)}
                style={{ textAlign: 'center', padding: '8px' }}
              >
                <div style={{
                  width: '64px', height: '64px',
                  borderRadius: '50%',
                  border: '2px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  background: 'var(--accent-dim)',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {p.step}
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section:nth-of-type(3) .container > div:last-child {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 480px) {
            section:nth-of-type(3) .container > div:last-child {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section style={{ padding: '88px 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              textAlign: 'center',
              padding: '60px 40px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at center, rgba(200,75,17,0.06) 0%, transparent 70%)',
            }} />
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '16px',
              position: 'relative',
            }}>
              Not sure which service fits?
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              marginBottom: '32px',
              maxWidth: '440px',
              margin: '0 auto 32px',
              position: 'relative',
            }}>
              Tell me about your goals and I'll recommend what makes the most sense
              for your situation — no pitch, just an honest recommendation.
            </p>
            <Link href="/contact" className="btn-primary" style={{ position: 'relative' }}>
              Get a Recommendation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
