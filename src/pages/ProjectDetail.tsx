import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProject, projects } from '../data/portfolio'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [slug])

  if (!project) {
    return (
      <main className="detail">
        <div className="detail__inner">
          <Link className="detail__back" to="/">
            ← Back to home
          </Link>
          <h1 className="detail__title">Project not found</h1>
          <p className="detail__overview">
            The project you’re looking for doesn’t exist. Head back to see all
            projects.
          </p>
        </div>
      </main>
    )
  }

  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <main className="detail">
      <div className="detail__inner">
        <Link
          className="detail__back"
          to="/"
          state={{ scrollTo: 'projects' }}
        >
          ← Back to projects
        </Link>

        <p className="detail__context">{project.context}</p>
        <h1 className="detail__title">{project.title}</h1>
        <p className="detail__overview">{project.overview}</p>

        <div className="detail__media">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="detail__grid">
          <section className="detail__section">
            <h2 className="detail__heading">Highlights</h2>
            <ul className="detail__list">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <aside className="detail__aside">
            <h2 className="detail__heading">Tools &amp; skills</h2>
            <ul className="detail__chips">
              {project.tools.map((tool) => (
                <li key={tool} className="chip">
                  {tool}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="detail__nav">
          <Link className="btn btn--olive" to="/" state={{ scrollTo: 'projects' }}>
            All projects
          </Link>
          <Link className="btn btn--dark" to={`/project/${next.slug}`}>
            Next project →
          </Link>
        </div>
      </div>
    </main>
  )
}
