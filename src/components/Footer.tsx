import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React &amp;
        Vite.
      </p>
      <a className="footer__top" href="#top">
        Back to top ↑
      </a>
    </footer>
  )
}
