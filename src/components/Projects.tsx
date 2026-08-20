import { Link } from 'react-router-dom'
import { projectCategories, projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">Select Projects</h2>

      {projectCategories.map((category) => {
        const items = projects.filter((p) => p.category === category)
        if (items.length === 0) return null
        return (
          <div className="project-category" key={category}>
            <h3 className="project-category__label">
              {category}
              <span className="project-category__count">{items.length}</span>
            </h3>
            <div className="project-grid">
              {items.map((project) => (
                <article className="project" key={project.slug}>
                  <Link
                    className="project__link"
                    to={`/project/${project.slug}`}
                    aria-label={`View details for ${project.title}`}
                  >
                    <div className="project__thumb">
                      <img src={project.image} alt={project.title} loading="lazy" />
                    </div>
                    <h4 className="project__name">{project.title}</h4>
                    <p className="project__desc">{project.description}</p>
                  </Link>
                  <Link
                    className="btn btn--dark btn--sm"
                    to={`/project/${project.slug}`}
                  >
                    Learn More
                  </Link>
                </article>
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}
