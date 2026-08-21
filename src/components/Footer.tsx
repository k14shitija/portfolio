import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <p className="footer__brand">{profile.siteTitle}</p>
        <div className="footer__contact">
          <h4 className="footer__heading">Contact</h4>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`mailto:${profile.emailUsc}`}>{profile.emailUsc}</a>
          <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>
            {profile.phone}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            {profile.linkedinLabel}
          </a>
          <span className="footer__location">{profile.location}</span>
        </div>
      </div>
      <div className="footer__bottom">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.brand}
        </span>
      </div>
    </footer>
  )
}
