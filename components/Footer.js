export default function Footer() {
  const year = new Date().getFullYear()

  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--bg-secondary)',
      padding: '48px 0 32px',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '40px',
          flexWrap: 'wrap',
          gap: '32px',
        }}>
          {/* Brand */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.375rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '12px',
            }}>
              Anam <span style={{ color: 'var(--accent)' }}>Shahid</span>
            </div>
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
            }}>
              Digital Marketing Strategist — specializing in SEO, Meta Ads,
              and LinkedIn growth. Based in Pakistan, working globally.
            </p>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            <div>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '16px',
              }}>
                Navigation
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['about', 'services', 'portfolio', 'contact'].map(id => (
                  <button
                    key={id}
                    onClick={() => handleNav(id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      textAlign: 'left',
                      padding: 0,
                      textTransform: 'capitalize',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.target.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '16px',
              }}>
                Services
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['SEO Strategy', 'Meta Ads', 'LinkedIn Growth', 'Lead Generation'].map(s => (
                  <button
                    key={s}
                    onClick={() => handleNav('services')}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      textAlign: 'left',
                      padding: 0,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.target.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            {year} Anam Shahid. All rights reserved.
          </p>
          <a
            href="mailto:anamshahid2409@gmail.com"
            style={{
              fontSize: '0.8125rem',
              color: 'var(--text-muted)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.target.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.target.style.color = 'var(--text-muted)')}
          >
            anamshahid2409@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
