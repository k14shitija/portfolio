import { useRef } from 'react'
import { projects } from '../data/portfolio'

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByCards = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector<HTMLElement>('.project')
    const amount = card ? card.offsetWidth + 24 : track.clientWidth * 0.8
    track.scrollBy({ left: amount * direction, behavior: 'smooth' })
  }

  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">Select Projects</h2>

      <div className="carousel">
        <button
          type="button"
          className="carousel__arrow carousel__arrow--prev"
          aria-label="Previous projects"
          onClick={() => scrollByCards(-1)}
        >
          &#8592;
        </button>

        <div className="carousel__track" ref={trackRef}>
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className="project__thumb">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </div>
              <h3 className="project__name">{project.title}</h3>
              <p className="project__desc">{project.description}</p>
              <a className="btn btn--dark btn--sm" href={project.link}>
                Learn More
              </a>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="carousel__arrow carousel__arrow--next"
          aria-label="Next projects"
          onClick={() => scrollByCards(1)}
        >
          &#8594;
        </button>
      </div>

      <div className="projects__footer">
        <a className="btn btn--olive" href="#projects">
          See All Projects
        </a>
      </div>
    </section>
  )
}
