import { profile, stats } from '../data/portfolio'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <p className="hero__eyebrow">
        <span className="hero__status" /> Available for new projects
      </p>
      <h1 className="hero__title">
        Hi, I’m {profile.name}.
        <br />
        <span className="hero__gradient">{profile.tagline}</span>
      </h1>
      <p className="hero__lede">{profile.intro}</p>
      <div className="hero__actions">
        <a className="btn btn--primary" href="#work">
          View my work
        </a>
        <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
          Get in touch
        </a>
      </div>
      <dl className="hero__stats">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <dt className="stat__value">{stat.value}</dt>
            <dd className="stat__label">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
