import { useState } from 'react'
import { profile } from '../data/portfolio'

type Status = 'idle' | 'sent'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [name, setName] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sent')
  }

  return (
    <section className="section" id="contact">
      <div className="section__head">
        <span className="section__index">04</span>
        <h2 className="section__title">Get in touch</h2>
      </div>
      <div className="contact">
        <div className="contact__intro">
          <p className="contact__lead">
            Have a project in mind or just want to say hello? I’d love to hear
            from you.
          </p>
          <ul className="contact__socials">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a href={social.url}>{social.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {status === 'sent' ? (
          <div className="contact__success" role="status">
            <h3>Thanks{name ? `, ${name}` : ''}! 🎉</h3>
            <p>
              Your message is on its way. I’ll get back to you at the address
              you provided.
            </p>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => {
                setStatus('idle')
                setName('')
              }}
            >
              Send another
            </button>
          </div>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Ada Lovelace"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project…"
              />
            </label>
            <button type="submit" className="btn btn--primary">
              Send message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
