import type { CSSProperties } from 'react'
import { MagnifyingGlass, Stack, GlobeHemisphereWest, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'
import { SKILLS, WORKING_STYLE } from '@/data/skills'

/**
 * SkillsGrid - the Skills view on one glass sheet.
 *
 * Top band: three working habits on the dark plate. Below it: five skill
 * areas as cards that carry the marks of the tools used for each one.
 * Reuses the Services layout classes (sgrid) so the shell reads as one system.
 */

const STAGE_ICONS: Icon[] = [MagnifyingGlass, Stack, GlobeHemisphereWest]

function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

export default function SkillsGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="skills-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Skills</span>
        <h1 className="pgrid__title" id="skills-title">
          Content, creative and operations skills.
        </h1>
        <p className="pgrid__lede">
          What I can take on, and the tools I use to do it.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        <div className="sgrid__method" aria-labelledby="style-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">How I work</span>
            <h2 className="sgrid__method-title" id="style-title">
              Careful. Organized.
              <br />
              <span>Easy to work with remotely.</span>
            </h2>
            <p className="sgrid__method-sub">
              Editing, social media, design and store operations have taught me to keep work accurate and moving.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {WORKING_STYLE.map((s, i) => {
              const StageIcon = STAGE_ICONS[i]
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">Skill areas.</h2>
            <p className="sgrid__offers-sub">Drawn from my work history.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SKILLS.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.marks} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 05</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.blurb}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
