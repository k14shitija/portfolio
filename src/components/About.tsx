import { profile } from '../data/portfolio'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section__head">
        <span className="section__index">01</span>
        <h2 className="section__title">About</h2>
      </div>
      <div className="about">
        <p className="about__lead">
          I care about the details that make software feel effortless — fast
          load times, clear interactions, and interfaces that get out of the
          way.
        </p>
        <p className="about__body">
          Over the years I’ve worked across the stack, from designing resilient
          APIs and data pipelines to crafting accessible, animation-rich front
          ends. I like small, focused teams where I can own problems end to end
          and ship iteratively with a bias toward user value.
        </p>
        <ul className="about__meta">
          <li>
            <span>Based in</span>
            {profile.location}
          </li>
          <li>
            <span>Focus</span>
            Product engineering
          </li>
          <li>
            <span>Currently</span>
            Exploring AI-assisted tooling
          </li>
        </ul>
      </div>
    </section>
  )
}
