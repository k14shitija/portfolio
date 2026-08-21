import { Link, useNavigate, useLocation } from 'react-router-dom'
import { navLinks, profile } from '../data/portfolio'

export default function Nav() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToTarget = (target: string) => {
    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const goScroll = (target: string) => {
    if (location.pathname !== '/') {
      navigate('/', {
        state: { scrollTo: target === 'home' ? undefined : target },
      })
      if (target === 'home') requestAnimationFrame(() => window.scrollTo({ top: 0 }))
    } else {
      scrollToTarget(target)
    }
  }

  return (
    <header className="nav">
      <button type="button" className="nav__brand" onClick={() => goScroll('home')}>
        {profile.brand}
      </button>
      <nav className="nav__links" aria-label="Primary">
        {navLinks.map((link) => {
          if (link.kind === 'route') {
            return (
              <Link
                key={link.to}
                to={link.to}
                className={location.pathname === link.to ? 'is-active' : ''}
              >
                {link.label}
              </Link>
            )
          }
          const target = link.kind === 'home' ? 'home' : link.target
          return (
            <button type="button" key={link.label} onClick={() => goScroll(target)}>
              {link.label}
            </button>
          )
        })}
      </nav>
    </header>
  )
}
