import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    // Mailto fallback — works without backend
    const subject = encodeURIComponent(`Project Inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\nMessage:\n${form.message}`
    )
    window.open(`mailto:anamshahid2409@gmail.com?subject=${subject}&body=${body}`, '_blank')
    setStatus('sent')
    setForm({ name: '', email: '', service: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  const inputStyle = {
    width: '100%',
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: '3px',
    padding: '13px 16px',
    fontSize: '0.9375rem',
    color: 'var(--text-primary)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    fontFamily: 'var(--font-body)',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '0.8125rem',
    fontWeight: 500,
    color: 'var(--text-muted)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    marginBottom: '8px',
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }}>
          {/* Left */}
          <div>
            <span className="section-label">Get In Touch</span>
            <div className="divider" />
            <h2 className="section-title">Let's Build Something That Works</h2>
            <p style={{
              fontSize: '1.0625rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              marginBottom: '48px',
            }}>
              Whether you have a clear project in mind or you're just exploring
              options, I'm happy to talk. Fill out the form and I'll get back to
              you within 24 hours.
            </p>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  background: 'var(--accent-dim)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '2px' }}>Email</div>
                  <a
                    href="mailto:anamshahid2409@gmail.com"
                    style={{ fontSize: '0.9375rem', color: 'var(--text-primary)' }}
                    onMouseEnter={e => (e.target.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.target.style.color = 'var(--text-primary)')}
                  >
                    anamshahid2409@gmail.com
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                {[
                  {
                    label: 'LinkedIn',
                    href: 'https://linkedin.com',
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Instagram',
                    href: 'https://instagram.com',
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Facebook',
                    href: 'https://facebook.com',
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    ),
                  },
                ].map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    style={{
                      width: '44px',
                      height: '44px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-muted)',
                      transition: 'border-color 0.2s, color 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--accent)'
                      e.currentTarget.style.color = 'var(--accent)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.color = 'var(--text-muted)'
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Service</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                style={{ ...inputStyle, cursor: 'pointer' }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              >
                <option value="">Select a service</option>
                <option value="SEO">On-Page & Off-Page SEO</option>
                <option value="Meta Ads">Meta Ads Management</option>
                <option value="LinkedIn">LinkedIn Growth Strategy</option>
                <option value="Lead Generation">Lead Generation</option>
                <option value="Digital Marketing">Digital Marketing Strategy</option>
                <option value="Other">Other / Not Sure Yet</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project, your goals, and where you're stuck..."
                rows={5}
                style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                opacity: status === 'sending' ? 0.7 : 1,
                fontSize: '0.9375rem',
              }}
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent' : 'Send Message'}
            </button>

            {status === 'sent' && (
              <p style={{
                textAlign: 'center',
                fontSize: '0.875rem',
                color: 'var(--accent)',
              }}>
                Your email client should have opened. I'll reply within 24 hours.
              </p>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact .container > div {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          #contact form > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          #contact form {
            padding: 28px 20px !important;
          }
        }
      `}</style>
    </section>
  )
}
