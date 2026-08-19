import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/portfolio'

export default function Nav() {
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="nav">
      <a className="nav__brand" href="#home">
        {profile.brand}
      </a>
      <nav className="nav__links" aria-label="Primary">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href ? 'is-active' : ''}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
