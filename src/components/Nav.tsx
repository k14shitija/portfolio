import { useNavigate, useLocation } from 'react-router-dom'
import { navLinks, profile } from '../data/portfolio'

export default function Nav() {
  const navigate = useNavigate()
  const location = useLocation()

  const goTo = (target: string) => {
    const scroll = () => {
      if (target === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: target === 'home' ? undefined : target } })
      if (target === 'home') requestAnimationFrame(() => window.scrollTo({ top: 0 }))
    } else {
      scroll()
    }
  }

  return (
    <header className="nav">
      <button
        type="button"
        className="nav__brand"
        onClick={() => goTo('home')}
      >
        {profile.brand}
      </button>
      <nav className="nav__links" aria-label="Primary">
        {navLinks.map((link) => (
          <button
            type="button"
            key={link.target}
            onClick={() => goTo(link.target)}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  )
}
