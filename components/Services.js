const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
    title: 'On-Page & Off-Page SEO',
    desc: 'Comprehensive SEO strategies that cover technical foundations, content optimization, and authoritative backlink building to improve your organic rankings and drive sustainable traffic.',
    highlights: ['Keyword Research & Mapping', 'Technical SEO Audits', 'Link Building Campaigns', 'Content Strategy'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Meta Ads Management',
    desc: 'Full-funnel Facebook and Instagram advertising — from audience research and creative strategy to campaign execution, A/B testing, and performance optimization.',
    highlights: ['Audience Research & Targeting', 'Creative Strategy', 'A/B Testing', 'ROAS Optimization'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    title: 'LinkedIn Growth Strategy',
    desc: 'Profile positioning, content strategy, and outreach systems designed to grow your professional authority, expand your network, and generate inbound business opportunities.',
    highlights: ['Profile Optimization', 'Content Calendar', 'Network Growth', 'Lead Generation'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Lead Generation',
    desc: 'Multi-channel lead generation systems combining organic and paid strategies to consistently fill your pipeline with qualified prospects ready to convert.',
    highlights: ['Funnel Architecture', 'Multi-Channel Campaigns', 'Lead Qualification', 'CRM Integration'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Digital Marketing Strategy',
    desc: 'End-to-end digital marketing planning that aligns your channels, messaging, and budget with your business goals — giving you a clear roadmap to follow.',
    highlights: ['Market Analysis', 'Channel Strategy', 'Budget Planning', 'KPI Frameworks'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    title: 'Brand Visibility & Presence',
    desc: 'Holistic brand positioning across digital channels to ensure your target audience finds you, trusts you, and chooses you over the competition.',
    highlights: ['Brand Audit', 'Positioning Strategy', 'Cross-Channel Consistency', 'Reputation Management'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-label">What I Offer</span>
          <div className="divider" style={{ margin: '0 auto 24px' }} />
          <h2 className="section-title" style={{ margin: '0 auto 20px' }}>
            Services Built Around Your Growth
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            From search visibility to paid social, every service is designed to
            produce tangible, measurable results for your business.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}>
          {services.map((service, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                padding: '36px 28px',
                transition: 'border-color 0.25s ease, transform 0.25s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(200,75,17,0.4)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                background: 'var(--accent-dim)',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                marginBottom: '24px',
              }}>
                {service.icon}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1875rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '12px',
                lineHeight: 1.3,
              }}>
                {service.title}
              </h3>

              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}>
                {service.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {service.highlights.map(h => (
                  <span
                    key={h}
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      color: 'var(--accent)',
                      background: 'var(--accent-dim)',
                      padding: '4px 10px',
                      borderRadius: '2px',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #services .container > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          #services .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
