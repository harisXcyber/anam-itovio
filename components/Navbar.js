import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 24px',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.3s ease, border-color 0.3s ease',
        background: scrolled ? 'rgba(10,8,7,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}>
        <a
          href="#home"
          onClick={e => handleNav(e, '#home')}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.25rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '0.01em',
          }}
        >
          Anam <span style={{ color: 'var(--accent)' }}>Shahid</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="nav-desktop">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => handleNav(e, link.href)}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                letterSpacing: '0.02em',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.target.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.target.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={e => handleNav(e, '#contact')}
            style={{
              background: 'var(--accent)',
              color: '#fff',
              padding: '9px 22px',
              fontSize: '0.875rem',
              fontWeight: 500,
              borderRadius: '3px',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={e => (e.target.style.background = 'var(--accent-hover)')}
            onMouseLeave={e => (e.target.style.background = 'var(--accent)')}
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: 'var(--text-primary)',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(5px, 5px)' : i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '68px',
          left: 0,
          right: 0,
          zIndex: 999,
          background: 'rgba(10,8,7,0.97)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => handleNav(e, link.href)}
              style={{
                fontSize: '1.0625rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                padding: '8px 0',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={e => handleNav(e, '#contact')}
            style={{
              background: 'var(--accent)',
              color: '#fff',
              padding: '13px 24px',
              fontSize: '0.9375rem',
              fontWeight: 500,
              borderRadius: '3px',
              textAlign: 'center',
              marginTop: '8px',
            }}
          >
            Let's Talk
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
