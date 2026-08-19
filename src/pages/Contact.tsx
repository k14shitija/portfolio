import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const composedSubject = subject || `Portfolio message from ${name}`
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`

    // Open a prefilled Gmail compose window addressed to the destination inbox.
    const gmailUrl =
      'https://mail.google.com/mail/?view=cm&fs=1' +
      `&to=${encodeURIComponent(profile.email)}` +
      `&su=${encodeURIComponent(composedSubject)}` +
      `&body=${encodeURIComponent(body)}`

    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <main className="page contact-page">
      <div className="page__inner">
        <p className="page__eyebrow">Say hello</p>
        <h1 className="page__title">Get in touch</h1>
        <p className="contact-page__lede">
          Have a project, role, or idea in mind? Fill out the form and it’ll open
          a pre-filled email to my inbox — or reach me directly using the details
          on the right.
        </p>

        <div className="contact-page__grid">
          {sent ? (
            <div className="contact-form contact-form--sent" role="status">
              <h2>Thanks{name ? `, ${name.split(' ')[0]}` : ''}! 🎉</h2>
              <p>
                A pre-filled email should have opened in a new tab addressed to{' '}
                <strong>{profile.email}</strong>. If it didn’t, you can email me
                directly at{' '}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>.
              </p>
              <button
                type="button"
                className="btn btn--dark"
                onClick={() => {
                  setSent(false)
                  setName('')
                  setEmail('')
                  setSubject('')
                  setMessage('')
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </label>
              <label>
                Your email
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </label>
              <label>
                Subject
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="What’s this about?"
                />
              </label>
              <label>
                Message
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me a bit about it…"
                />
              </label>
              <button type="submit" className="btn btn--dark">
                Send message
              </button>
            </form>
          )}

          <aside className="contact-page__direct">
            <h2 className="contact-page__direct-title">Reach me directly</h2>
            <ul className="contact-page__list">
              <li>
                <span>Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <span>Phone</span>
                <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>
                  {profile.phone}
                </a>
              </li>
              <li>
                <span>LinkedIn</span>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  {profile.linkedinLabel}
                </a>
              </li>
              <li>
                <span>Location</span>
                {profile.location}
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </main>
  )
}
