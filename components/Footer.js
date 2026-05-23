import Link from 'next/link'

const NAV = ['About', 'Services', 'Portfolio', 'Contact']
const SERVICES = ['On-Page SEO', 'Off-Page SEO', 'Meta Ads', 'LinkedIn Growth', 'Lead Generation']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--bg-secondary)',
      padding: '56px 0 32px',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr',
          gap: '48px',
          marginBottom: '48px',
          flexWrap: 'wrap',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.375rem',
              fontWeight: 700,
              marginBottom: '14px',
              color: 'var(--text-primary)',
            }}>
              Anam <span style={{ color: 'var(--accent)' }}>Shahid</span>
            </div>
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              lineHeight: 1.75,
              maxWidth: '280px',
            }}>
              Digital marketing strategist specializing in SEO, Meta Ads, and
              LinkedIn growth. Working with brands that want real results.
            </p>
            <a
              href="mailto:anamshahid2409@gmail.com"
              style={{
                display: 'inline-block',
                marginTop: '18px',
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              anamshahid2409@gmail.com
            </a>
          </div>

          {/* Nav */}
          <div>
            <div style={{
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '18px',
            }}>
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NAV.map(n => (
                <Link
                  key={n}
                  href={`/${n.toLowerCase()}`}
                  style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {n}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '18px',
            }}>
              Services
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {SERVICES.map(s => (
                <Link
                  key={s}
                  href="/services"
                  style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>
        </div>

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
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            SEO &amp; Meta Ads Expert
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  )
}
