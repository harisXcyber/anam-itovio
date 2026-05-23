import Head from 'next/head'
import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const FAQ = [
  {
    q: 'How do you price your services?',
    a: 'Every engagement is scoped individually based on your goals, the channels involved, and the level of effort required. Get in touch and I\'ll give you an honest estimate.',
  },
  {
    q: 'Do you work with clients outside Pakistan?',
    a: 'Yes. Most of my communication is remote and I work with clients across different time zones. We\'ll find a schedule that works.',
  },
  {
    q: 'How long before I see results?',
    a: 'It depends on the channel. Paid ads can show early signals within weeks. SEO typically takes 3–6 months for meaningful organic growth. I\'ll set realistic expectations at the start of every engagement.',
  },
  {
    q: 'Do you offer one-off consultations?',
    a: 'Yes. If you just need a strategy session, audit, or second opinion, that\'s available. Reach out and describe what you need.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden',
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--text-primary)',
          textAlign: 'left',
          gap: '16px',
        }}
      >
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.0rem',
          fontWeight: 600,
          lineHeight: 1.4,
        }}>
          {q}
        </span>
        <span style={{
          color: 'var(--accent)',
          flexShrink: 0,
          transition: 'transform 0.25s ease',
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          fontSize: '1.5rem',
          lineHeight: 1,
          fontWeight: 300,
        }}>
          +
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: 'hidden' }}
      >
        <p style={{
          fontSize: '0.9375rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.75,
          paddingBottom: '20px',
        }}>
          {a}
        </p>
      </motion.div>
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')
    const subject = encodeURIComponent(`Project Inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService Interest: ${form.service || 'Not specified'}\n\nMessage:\n${form.message}`
    )
    window.open(`mailto:anamshahid2409@gmail.com?subject=${subject}&body=${body}`, '_blank')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', service: '', message: '' })
    }, 300)
  }

  const inputBase = {
    width: '100%',
    background: 'var(--bg-primary)',
    border: '1px solid var(--border)',
    borderRadius: '5px',
    padding: '13px 16px',
    fontSize: '0.9375rem',
    color: 'var(--text-primary)',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    fontFamily: 'inherit',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    marginBottom: '8px',
  }

  const focusHandlers = {
    onFocus: e => {
      e.target.style.borderColor = 'var(--accent)'
      e.target.style.boxShadow = '0 0 0 3px var(--accent-dim)'
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--border)'
      e.target.style.boxShadow = 'none'
    },
  }

  return (
    <>
      <Head>
        <title>Contact — Anam Shahid | Get In Touch</title>
        <meta name="description" content="Contact Anam Shahid to discuss your digital marketing project — SEO, Meta Ads, or LinkedIn growth strategy." />
        <link rel="canonical" href="https://anam.itovio.com/contact" />
      </Head>

      <section style={{
        paddingTop: 'calc(68px + 80px)',
        paddingBottom: '108px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '10%', left: '-10%',
          width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,75,17,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
          animation: 'pulse-glow 8s ease-in-out infinite',
        }} />

        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}>
            {/* Left */}
            <div>
              <motion.div {...fadeUp(0.05)}>
                <span className="section-label">Get In Touch</span>
                <div className="divider" />
                <h1 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(2.2rem, 4.5vw, 3rem)',
                  fontWeight: 800,
                  lineHeight: 1.12,
                  color: 'var(--text-primary)',
                  marginBottom: '20px',
                }}>
                  Let's build something that works
                </h1>
                <p style={{
                  fontSize: '1.0625rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.78,
                  marginBottom: '48px',
                }}>
                  Whether you have a clear brief or you're still figuring out what you
                  need — reach out. I'll help you find the right direction and tell you
                  honestly if I'm the right fit.
                </p>
              </motion.div>

              {/* Email */}
              <motion.div {...fadeUp(0.12)} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '40px',
              }}>
                <div style={{
                  width: '48px', height: '48px',
                  background: 'var(--accent-dim)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  flexShrink: 0,
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '2px' }}>Email</div>
                  <a
                    href="mailto:anamshahid2409@gmail.com"
                    style={{ fontSize: '1rem', color: 'var(--text-primary)', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                  >
                    anamshahid2409@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* FAQ */}
              <motion.div {...fadeUp(0.18)}>
                <div style={{
                  fontSize: '10.5px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '8px',
                }}>
                  Common Questions
                </div>
                {FAQ.map((item, i) => <FAQItem key={i} {...item} />)}
              </motion.div>
            </div>

            {/* Form */}
            <motion.form
              {...fadeUp(0.1)}
              onSubmit={handleSubmit}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '44px 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '22px',
                position: 'sticky',
                top: '88px',
              }}
            >
              <div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.375rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '6px',
                }}>
                  Send a message
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  I'll respond within 24 hours.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={labelStyle}>Name</label>
                  <input
                    name="name" value={form.name} onChange={handleChange}
                    required placeholder="Your name"
                    style={inputBase} {...focusHandlers}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    name="email" type="email" value={form.email} onChange={handleChange}
                    required placeholder="your@email.com"
                    style={inputBase} {...focusHandlers}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Service Interest</label>
                <select
                  name="service" value={form.service} onChange={handleChange}
                  style={{ ...inputBase, cursor: 'pointer', appearance: 'none' }}
                  {...focusHandlers}
                >
                  <option value="">Select a service (optional)</option>
                  <option value="SEO">On-Page & Off-Page SEO</option>
                  <option value="Meta Ads">Meta Ads Management</option>
                  <option value="LinkedIn">LinkedIn Growth Strategy</option>
                  <option value="Lead Generation">Lead Generation</option>
                  <option value="Digital Strategy">Digital Marketing Strategy</option>
                  <option value="Other">Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  required
                  placeholder="Tell me about your project, your goals, and where you need help..."
                  rows={5}
                  style={{ ...inputBase, resize: 'vertical', minHeight: '128px' }}
                  {...focusHandlers}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01, boxShadow: '0 8px 24px var(--accent-glow)' }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  opacity: status === 'sending' ? 0.7 : 1,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                }}
              >
                {status === 'sent' ? 'Message sent' : status === 'sending' ? 'Opening email...' : 'Send Message'}
              </motion.button>

              {status === 'sent' && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    color: 'var(--accent)',
                  }}
                >
                  Your email client opened. I'll reply within 24 hours.
                </motion.p>
              )}
            </motion.form>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            section .container > div {
              grid-template-columns: 1fr !important;
              gap: 52px !important;
            }
            form {
              position: static !important;
            }
            form > div:nth-child(3) {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 480px) {
            form { padding: 28px 20px !important; }
          }
        `}</style>
      </section>
    </>
  )
}
