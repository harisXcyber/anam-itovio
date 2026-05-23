const cases = [
  {
    category: 'SEO',
    title: 'E-commerce Brand — 340% Organic Traffic Growth',
    challenge: 'A local e-commerce store was invisible on Google, with less than 200 monthly visitors and no structured SEO foundation.',
    solution: 'Conducted a full technical audit, built a keyword map targeting high-intent buyer terms, and launched a content-driven link building campaign over 6 months.',
    results: [
      { metric: '340%', label: 'Traffic Increase' },
      { metric: '#1', label: 'Rankings on 18 Keywords' },
      { metric: '4.2x', label: 'Revenue from Organic' },
    ],
  },
  {
    category: 'Meta Ads',
    title: 'Real Estate Agency — 60% Lower Cost Per Lead',
    challenge: 'The client was running Meta ads with a high cost per lead and poor lead quality, draining budget without meaningful pipeline results.',
    solution: 'Rebuilt the campaign structure from scratch — refined audience targeting, rewrote ad creatives, implemented a retargeting funnel, and split-tested landing page variants.',
    results: [
      { metric: '60%', label: 'Reduction in CPL' },
      { metric: '3.8x', label: 'ROAS' },
      { metric: '220+', label: 'Qualified Leads / Month' },
    ],
  },
  {
    category: 'LinkedIn Growth',
    title: 'B2B Consultant — 5,000 Followers in 90 Days',
    challenge: 'A business consultant had an outdated LinkedIn presence with minimal engagement and was struggling to attract inbound clients.',
    solution: 'Repositioned their profile, built a 3x per week content calendar rooted in their expertise, and implemented a systematic connection and outreach strategy.',
    results: [
      { metric: '5,000+', label: 'New Followers' },
      { metric: '900%', label: 'Profile Views Up' },
      { metric: '12', label: 'Inbound Inquiries / Month' },
    ],
  },
  {
    category: 'Lead Generation',
    title: 'SaaS Startup — 400 Qualified Leads in 60 Days',
    challenge: 'A B2B SaaS product had a solid offering but no reliable pipeline. Cold outreach was low-volume and conversion was poor.',
    solution: 'Designed a multi-channel lead generation system combining LinkedIn outreach, Meta lead ads, and a content-to-DM funnel. Built nurture sequences for each stage.',
    results: [
      { metric: '400+', label: 'Leads Generated' },
      { metric: '28%', label: 'Lead-to-Demo Rate' },
      { metric: '60', label: 'Days to Results' },
    ],
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ marginBottom: '64px' }}>
          <span className="section-label">Case Studies</span>
          <div className="divider" />
          <h2 className="section-title">Results That Speak for Themselves</h2>
          <p className="section-subtitle">
            A selection of client engagements and the measurable outcomes delivered.
            Every number here represents a real business, a real challenge, and a real solution.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {cases.map((item, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                padding: '44px 40px',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '48px',
                alignItems: 'start',
              }}
            >
              {/* Left content */}
              <div>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  background: 'var(--accent-dim)',
                  padding: '4px 10px',
                  borderRadius: '2px',
                  display: 'inline-block',
                  marginBottom: '16px',
                }}>
                  {item.category}
                </span>

                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.375rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '20px',
                  lineHeight: 1.3,
                }}>
                  {item.title}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      display: 'block',
                      marginBottom: '6px',
                    }}>
                      The Challenge
                    </span>
                    <p style={{
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                    }}>
                      {item.challenge}
                    </p>
                  </div>
                  <div>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      display: 'block',
                      marginBottom: '6px',
                    }}>
                      The Approach
                    </span>
                    <p style={{
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                    }}>
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: results */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                minWidth: '180px',
              }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}>
                  Results
                </span>
                {item.results.map(r => (
                  <div
                    key={r.label}
                    style={{
                      textAlign: 'center',
                      padding: '20px 24px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      borderRadius: '4px',
                    }}
                  >
                    <div style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: 'var(--accent)',
                      lineHeight: 1,
                      marginBottom: '6px',
                    }}>
                      {r.metric}
                    </div>
                    <div style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.04em',
                      lineHeight: 1.3,
                    }}>
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px',
          padding: '60px 40px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '6px',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.75rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '16px',
          }}>
            Ready to be the next success story?
          </h3>
          <p style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            marginBottom: '32px',
          }}>
            Let's talk about your goals and build a strategy around them.
          </p>
          <a
            href="#contact"
            className="btn-primary"
            onClick={e => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Start a Conversation
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #portfolio .container > div:last-child > div {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          #portfolio .container > div:last-child > div > div:last-child {
            flex-direction: row !important;
            flex-wrap: wrap;
            gap: 12px !important;
            min-width: unset !important;
          }
          #portfolio .container > div:last-child > div > div:last-child > div {
            flex: 1 1 calc(33% - 12px);
            min-width: 100px;
          }
        }
      `}</style>
    </section>
  )
}
