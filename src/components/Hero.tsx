import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <div className="hero__text" id="about">
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__bio">{profile.intro1}</p>
          <p className="hero__bio">{profile.intro2}</p>
          <div className="hero__actions">
            <a className="btn btn--dark" href="#projects">
              My Projects
            </a>
            <a
              className="btn btn--dark"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              My Resume
            </a>
          </div>
        </div>
        <div className="hero__photo">
          <img src="/img/profile.png" alt={`Portrait of ${profile.name}`} />
        </div>
      </div>
    </section>
  )
}
