import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section__head">
        <span className="section__index">03</span>
        <h2 className="section__title">Skills &amp; tools</h2>
      </div>
      <div className="skills">
        {skills.map((group) => (
          <div className="skills__group" key={group.category}>
            <h3 className="skills__category">{group.category}</h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
