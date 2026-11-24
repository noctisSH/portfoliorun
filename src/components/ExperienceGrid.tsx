import { CheckCircle } from '@/components/slab'
import { JOBS } from '@/data/work'

/**
 * ExperienceGrid - the Experience view: one glass sheet with the work history,
 * newest first, as bento cards. This view scrolls (it is not a fixed route).
 */
export default function ExperienceGrid() {
  return (
    <section className="pgrid xgrid" aria-labelledby="experience-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Experience</span>
        <h1 className="pgrid__title" id="experience-title">
          Content, customers and day-to-day operations.
        </h1>
        <p className="pgrid__lede">
          From content quality editing and social media to running a store and a restaurant.
        </p>
      </header>

      <div className="home__glass xgrid__glass">
        <ol className="bento xgrid__list" role="list">
          {JOBS.map((j, i) => (
            <li key={j.id} className={`bento__card xgrid__job${i === 0 ? ' xgrid__job--lead' : ''}`}>
              <span className="bento__head">
                <span className="xgrid__meta">
                  <span className="xgrid__period">{j.period}</span>
                  <span className="xgrid__kind">{j.kind}</span>
                </span>
                <h2 className="xgrid__role">{j.role}</h2>
                <span className="bento__desc xgrid__org">{j.org}</span>
              </span>
              <ul className="sgrid__bullets xgrid__points" role="list">
                {j.points.map((p) => (
                  <li key={p} className="sgrid__bullet">
                    <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
