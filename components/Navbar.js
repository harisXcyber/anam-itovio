import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from '../contexts/ThemeContext'

const NAV_LINKS = [
  { label: 'About',     href: '/about'     },
  { label: 'Services',  href: '/services'  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact',   href: '/contact'   },
]

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      title="Toggle theme"
      style={{
        width: '40px',
        height: '22px',
        borderRadius: '11px',
        background: isDark ? 'var(--border)' : '#E5DDD8',
        border: '1px solid var(--border)',
        position: 'relative',
        transition: 'background 0.3s ease',
        flexShrink: 0,
      }}
    >
      <span style={{
        position: 'absolute',
        top: '2px',
        left: isDark ? '20px' : '2px',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        background: isDark ? 'var(--accent)' : '#C84B11',
        transition: 'left 0.25s ease, background 0.25s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <svg
          width="9" height="9" viewBox="0 0 24 24" fill="currentColor"
          style={{ color: '#fff', opacity: 0.9 }}
        >
          {isDark
            ? <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            : <circle cx="12" cy="12" r="5" />
          }
        </svg>
      </span>
    </button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [router.pathname])

  const isActive = (href) => router.pathname === href

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.25rem',
          fontWeight: 700,
          letterSpacing: '0.01em',
          color: 'var(--text-primary)',
          transition: 'opacity 0.2s',
        }}>
          Anam <span style={{ color: 'var(--accent)' }}>Shahid</span>
        </Link>

        {/* Desktop nav */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
                color: isActive(link.href) ? 'var(--accent)' : 'var(--text-secondary)',
                position: 'relative',
                paddingBottom: '2px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => { if (!isActive(link.href)) e.currentTarget.style.color = 'var(--text-primary)' }}
              onMouseLeave={e => { if (!isActive(link.href)) e.currentTarget.style.color = 'var(--text-secondary)' }}
            >
              {link.label}
              {isActive(link.href) && (
                <span style={{
                  position: 'absolute',
                  bottom: '-2px',
                  left: 0, right: 0,
                  height: '2px',
                  background: 'var(--accent)',
                  borderRadius: '2px',
                }} />
              )}
            </Link>
          ))}

          <ThemeToggle />

          <Link
            href="/contact"
            style={{
              background: 'var(--accent)',
              color: '#fff',
              padding: '9px 22px',
              fontSize: '0.875rem',
              fontWeight: 500,
              borderRadius: '4px',
              transition: 'background 0.2s ease, transform 0.2s ease',
              display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-hover)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile */}
        <div className="nav-mobile-group" style={{ display: 'none', alignItems: 'center', gap: '12px' }}>
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: 'var(--text-primary)',
                borderRadius: '2px',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: menuOpen
                  ? (i === 0 ? 'rotate(45deg) translate(5px, 5px)' : i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'none')
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed',
        top: '68px', left: 0, right: 0,
        zIndex: 999,
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
        padding: menuOpen ? '24px' : '0 24px',
        maxHeight: menuOpen ? '320px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.35s ease, padding 0.35s ease',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
      }}>
        {NAV_LINKS.map(link => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              display: 'block',
              fontSize: '1.0625rem',
              fontWeight: 500,
              color: isActive(link.href) ? 'var(--accent)' : 'var(--text-primary)',
              padding: '10px 0',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          style={{
            background: 'var(--accent)',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '4px',
            textAlign: 'center',
            fontWeight: 500,
            marginTop: '10px',
          }}
        >
          Let's Talk
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop      { display: none !important; }
          .nav-mobile-group { display: flex !important; }
        }
      `}</style>
    </>
  )
}
