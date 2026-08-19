import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <p className="footer__brand">{profile.brand}</p>
        <div className="footer__contact">
          <h4 className="footer__heading">Contact</h4>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>
            {profile.phone}
          </a>
        </div>
      </div>
    </footer>
  )
}
