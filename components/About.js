export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Banner image */}
        <div style={{
          width: '100%',
          borderRadius: '6px',
          overflow: 'hidden',
          marginBottom: '72px',
          border: '1px solid var(--border)',
          position: 'relative',
        }}>
          <img
            src="/anam-banner.jpeg"
            alt="Anam Shahid — SEO and Meta Ads Expert"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>

        {/* Content grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }}>
          {/* Left */}
          <div>
            <span className="section-label">About Me</span>
            <div className="divider" />
            <h2 className="section-title">
              A Strategist Who Delivers, Not Just Advises
            </h2>
            <p style={{
              fontSize: '1.0625rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '20px',
            }}>
              I'm Anam Shahid — a digital marketing strategist with a sharp focus on
              SEO and paid social advertising. Over the past three years, I've worked
              with brands across industries to build visibility, generate qualified
              leads, and turn online presence into measurable business outcomes.
            </p>
            <p style={{
              fontSize: '1.0625rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '32px',
            }}>
              My work sits at the intersection of strategy and execution. I don't
              offer generic advice — I study your market, build a plan that fits
              your goals, and see it through to results.
            </p>
            <a
              href="#contact"
              className="btn-primary"
              onClick={e => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Work With Me
            </a>
          </div>

          {/* Right: traits */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {[
              {
                title: 'Research-First Approach',
                desc: 'Every strategy begins with deep market research. I study your competitors, your audience, and your current positioning before a single tactic is recommended.',
              },
              {
                title: 'Data-Driven Execution',
                desc: 'Campaigns are built on metrics, not guesswork. I track performance obsessively and optimize based on what the data shows — not assumptions.',
              },
              {
                title: 'Long-Term Thinking',
                desc: 'I build strategies designed to compound over time. Quick wins matter, but sustainable growth is the goal. Every decision considers the long game.',
              },
            ].map(item => (
              <div
                key={item.title}
                style={{
                  padding: '28px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  borderLeft: '3px solid var(--accent)',
                }}
              >
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .container > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
