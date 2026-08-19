import { useEffect } from 'react'
import { education, experience, profile } from '../data/portfolio'

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <main className="page about">
      <div className="page__inner">
        <p className="page__eyebrow">Get to know me</p>
        <h1 className="page__title">About Me</h1>

        <div className="about__layout">
          <div className="about__text">
            <p>
              I’m a{' '}
              <strong>
                mechanical engineer, product builder, and curious
                problem-solver from India
              </strong>{' '}
              who loves turning ideas into things that actually work.
            </p>
            <p>
              I grew up around engineering — my father is an engineer — so I was
              introduced to the idea of{' '}
              <strong>building, fixing, and figuring out how things work</strong>{' '}
              from an early age. That curiosity eventually led me to mechanical
              engineering, but it never really stayed within one discipline.
            </p>
            <p>
              Since then, I’ve explored{' '}
              <strong>
                automotive systems and ADAS, consumer electronics, software, and
                AI
              </strong>
              . I enjoy getting into the details, asking <em>“what if?”</em>, and
              connecting ideas that don’t always seem connected. One day that
              might mean designing an enclosure around a PCB; another, building
              an AI application or finding a smarter way to solve an engineering
              problem.
            </p>
            <p>
              For me, the best part is the process —{' '}
              <strong>
                learning something new, building from scratch, and watching an
                idea come to life.
              </strong>
            </p>
          </div>

          <div className="about__photo">
            <img src="/img/profile.png" alt={`Portrait of ${profile.name}`} />
          </div>
        </div>

        <section className="timeline-section">
          <h2 className="timeline-section__title">Career path</h2>
          <ol className="timeline">
            {experience.map((item) => (
              <li className="timeline__item" key={`${item.org}-${item.period}`}>
                <div className="timeline__period">{item.period}</div>
                <div className="timeline__body">
                  <h3 className="timeline__role">{item.role}</h3>
                  <p className="timeline__org">
                    {item.org} · <span>{item.meta}</span>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="timeline-section">
          <h2 className="timeline-section__title">Education</h2>
          <ol className="timeline">
            {education.map((item) => (
              <li className="timeline__item" key={`${item.org}-${item.period}`}>
                <div className="timeline__period">{item.period}</div>
                <div className="timeline__body">
                  <h3 className="timeline__role">{item.role}</h3>
                  <p className="timeline__org">
                    {item.org} · <span>{item.meta}</span>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  )
}
