import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="section__head">
        <span className="section__index">02</span>
        <h2 className="section__title">Selected work</h2>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <article
            className="card"
            key={project.title}
            style={{ '--accent': project.accent } as React.CSSProperties}
          >
            <div className="card__glow" aria-hidden="true" />
            <h3 className="card__title">{project.title}</h3>
            <p className="card__desc">{project.description}</p>
            <ul className="card__tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <a className="card__link" href={project.link}>
              Explore project
              <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
