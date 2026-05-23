export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '68px',
      }}
    >
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 70% at 70% 50%, rgba(200,75,17,0.10) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
        opacity: 0.4,
      }} />

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
        padding: '80px 24px',
      }}>
        {/* Left: Text */}
        <div>
          <span style={{
            display: 'inline-block',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '24px',
            padding: '6px 14px',
            border: '1px solid var(--border-light)',
            borderRadius: '2px',
          }}>
            Digital Marketing Strategist
          </span>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: '24px',
          }}>
            Turning Brands Into{' '}
            <span style={{ color: 'var(--accent)', display: 'block' }}>
              Market Leaders
            </span>
          </h1>

          <p style={{
            fontSize: '1.0625rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
            marginBottom: '40px',
            maxWidth: '480px',
          }}>
            I help businesses grow through strategic SEO, precision Meta advertising,
            and LinkedIn brand development. Results-driven. Data-backed. Built for
            sustainable growth.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => scrollTo('contact')}>
              Start a Project
            </button>
            <button className="btn-outline" onClick={() => scrollTo('portfolio')}>
              View Work
            </button>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex',
            gap: '40px',
            marginTop: '60px',
            paddingTop: '40px',
            borderTop: '1px solid var(--border)',
            flexWrap: 'wrap',
          }}>
            {[
              { value: '50+', label: 'Clients Served' },
              { value: '3+', label: 'Years Experience' },
              { value: '200%', label: 'Avg. Growth Rate' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  lineHeight: 1,
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)',
                  marginTop: '6px',
                  letterSpacing: '0.04em',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Photo */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            position: 'relative',
            width: 'min(420px, 100%)',
          }}>
            {/* Decorative ring */}
            <div style={{
              position: 'absolute',
              inset: '-18px',
              borderRadius: '50%',
              border: '1px solid var(--border-light)',
            }} />
            <div style={{
              position: 'absolute',
              inset: '-36px',
              borderRadius: '50%',
              border: '1px solid rgba(200,75,17,0.07)',
            }} />

            {/* Orange glow behind image */}
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(200,75,17,0.25) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }} />

            <img
              src="/anam-dp.jpeg"
              alt="Anam Shahid"
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

            {/* Floating badge */}
            <div style={{
              position: 'absolute',
              bottom: '24px',
              right: '-16px',
              background: 'var(--accent)',
              color: '#fff',
              padding: '10px 18px',
              borderRadius: '4px',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              zIndex: 2,
              boxShadow: '0 8px 24px rgba(200,75,17,0.35)',
            }}>
              SEO &amp; Meta Ads Expert
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #home > .container {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding: 60px 16px !important;
          }
          #home > .container > div:last-child {
            order: -1;
          }
          #home > .container > div:last-child > div {
            width: min(300px, 80vw) !important;
            margin: 0 auto;
          }
        }
        @media (max-width: 480px) {
          #home .btn-primary, #home .btn-outline {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
