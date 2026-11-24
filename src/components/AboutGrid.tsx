import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin, GraduationCap } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who I am on the left, the portrait on the
 * right. Sized to the panel, so nothing here scrolls. The left column is a
 * ladder: one statement, one line of context, then the four areas I work in,
 * each carrying the marks of the tools used for it.
 */

type Mark = { src: string; name: string }

const GRAMMARLY: Mark = { src: '/icons/grammarly.svg', name: 'Grammarly' }
const CANVA: Mark = { src: '/icons/mono-canva.svg', name: 'Canva' }
const PS: Mark = { src: '/icons/mono-ps.svg', name: 'Photoshop' }
const CAPCUT: Mark = { src: '/icons/mono-capcut.svg', name: 'CapCut' }
const GWS: Mark = { src: '/icons/googleworkspace.svg', name: 'Google Workspace' }
const OFFICE: Mark = { src: '/icons/mono-office.svg', name: 'Microsoft Office' }
const OPENAI: Mark = { src: '/icons/openai.svg', name: 'ChatGPT' }
const N8N: Mark = { src: '/icons/n8n.svg', name: 'n8n' }
const ZAPIER: Mark = { src: '/icons/zapier.svg', name: 'Zapier' }

type Capability = { index: string; title: string; marks: Mark[] }

const CAPABILITIES: Capability[] = [
  { index: '01', title: 'Content quality review', marks: [GRAMMARLY] },
  { index: '02', title: 'Social media & design', marks: [CANVA, PS, CAPCUT] },
  { index: '03', title: 'Business operations', marks: [GWS, OFFICE] },
  { index: '04', title: 'AI & workflow tools', marks: [OPENAI, N8N, ZAPIER] },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          Content reviewer, social media manager and operations all-rounder.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            Careful with content, steady with operations.
            <span> Comfortable supporting remote and cross-functional teams.</span>
          </p>

          <p className="agrid__note">
            I started in social media and design, then moved into content quality editing for a
            US-based Q&amp;A site. Since then I have managed a store, and I now co-own{' '}
            <strong>Fresca Farm</strong>, where I run operations and grew the page to 16,000+
            followers. I also use ChatGPT and n8n to streamline workflows.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <GraduationCap size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">BS Information Technology</span>
                <span className="agrid__cell-meta">Cavite State University · 2011</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">Flexible across US, UK and AU time zones</span>
              </span>
            </span>

            <a
              className="agrid__cell agrid__cell--wide"
              href={profile.socials[0].href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <img src="/icons/linkedin.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">LinkedIn</span>
                <span className="agrid__cell-meta">nbuenaventura01</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src={profile.avatarSrc}
            alt="Nico Buenaventura monogram"
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
