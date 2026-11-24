import type React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Briefcase,
  User,
  Wrench,
  GraduationCap,
  Stack,
  Clock,
  SealCheck,
  PenNib,
  ShareNetwork,
  PaintBrush,
  ClipboardText,
  Robot,
  Buildings,
} from '@/components/slab'
import { JOBS } from '@/data/work'
import { tools } from '@/components/ToolsMarquee'
import { profile } from '@/data/profile'

/**
 * Home's showcase: one card per rail view, each an index of what that view
 * holds, each built from the same records the views render in full (work.ts,
 * skills.ts, the tools list). Every card is a link. Nothing here invents a
 * fact.
 *
 * Motion is transform-only on a clipped inner track, so a card never adds
 * height and Home stays a single viewport.
 */

const OFFERS = [
  { Icon: PenNib, title: 'Content review', note: 'Style, grammar, punctuation' },
  { Icon: ShareNetwork, title: 'Social media', note: 'Accounts and campaigns' },
  { Icon: PaintBrush, title: 'Graphic design', note: 'Logos, flyers, social posts' },
  { Icon: ClipboardText, title: 'Operations & admin', note: 'Inventory, records, support' },
  { Icon: Robot, title: 'AI & workflow tools', note: 'ChatGPT, n8n, Zapier' },
] as const

const AVAILABILITY = [
  { name: 'US · EST / PST', role: 'Flexible hours', work: 'Full-time' },
  { name: 'UK · GMT', role: 'Flexible hours', work: 'Full-time' },
  { name: 'AU · AEST', role: 'Flexible hours', work: 'Full-time' },
]

const TOOL_NAMES = tools.map((t) => t.name)

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof Briefcase
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {
  const half = Math.ceil(TOOL_NAMES.length / 2)
  const toolRows = [TOOL_NAMES.slice(0, half), TOOL_NAMES.slice(half)]

  return (
    <nav className="bento" aria-label="Explore the portfolio">
      {/* Experience: the jobs drift upward on a looped track. */}
      <Link to="/experience" className="bento__card bento__card--projects">
        <CardHead
          Icon={Briefcase}
          title="Experience"
          desc="Content quality, social media, store operations and transcription."
        />
        <div className="bento__media bento__reviews" aria-hidden="true">
          <div className="bento__reviews-track">
            {[...JOBS, ...JOBS].map((j, i) => (
              <span key={i} className="bento__review">
                <span className="bento__review-top">
                  <Buildings size={14} weight="fill" />
                  <b>{j.org.split(' · ')[0]}</b>
                </span>
                <span className="bento__review-role">{j.role}</span>
                <span className="bento__review-work">{j.period}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* About: the monogram on its plate. */}
      <Link to="/about" className="bento__card bento__card--about">
        <CardHead Icon={User} title="About" desc="Careful with content, steady with operations." />
        <div className="bento__media bento__badge" aria-hidden="true">
          <span className="bento__badge-ring">
            <img src={profile.avatarSrc} alt="" width={72} height={72} />
          </span>
          <span className="bento__badge-tag">
            <SealCheck size={14} weight="fill" />
            Remote-ready
          </span>
        </div>
      </Link>

      {/* Toolkit: two chip rows scrolling against each other. */}
      <Link to="/skills" className="bento__card bento__card--ai">
        <CardHead Icon={Wrench} title="Toolkit" desc="Design, AI and workflow tools I use." />
        <div className="bento__media bento__chips" aria-hidden="true">
          {toolRows.map((row, r) => (
            <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
              <div className="bento__chip-track">
                {[...row, ...row].map((name, i) => (
                  <span key={`${name}-${i}`} className="bento__chip">
                    <Wrench size={15} weight="duotone" />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Link>

      {/* Education. */}
      <Link to="/about" className="bento__card bento__card--creds">
        <CardHead Icon={GraduationCap} title="Education" desc="BS Information Technology." />
        <div className="bento__media bento__badge" aria-hidden="true">
          <span className="bento__badge-ring">
            <GraduationCap size={34} weight="duotone" />
          </span>
          <span className="bento__badge-tag">
            <SealCheck size={14} weight="fill" />
            Cavite State University
          </span>
        </div>
      </Link>

      {/* Skills: the five areas as a compact index. */}
      <Link to="/skills" className="bento__card bento__card--services">
        <CardHead Icon={Stack} title="Skills" desc="What I can take on for your team." />
        <ul className="bento__media bento__offers" role="list">
          {OFFERS.map(({ Icon, title, note }, i) => (
            <li key={title} className="bento__offer" style={{ '--i': i } as React.CSSProperties}>
              <span className="bento__offer-tile">
                <Icon size={15} weight="duotone" aria-hidden="true" />
              </span>
              <span className="bento__offer-text">
                <span className="bento__offer-title">{title}</span>
                <span className="bento__offer-note">{note}</span>
              </span>
              <span className="bento__offer-num" aria-hidden="true">
                0{i + 1}
              </span>
            </li>
          ))}
        </ul>
      </Link>

      {/* Availability: time-zone cards drifting up a clipped column. */}
      <Link to="/contact" className="bento__card bento__card--quotes">
        <CardHead
          Icon={Clock}
          title="Availability"
          desc="Full-time, flexible across US, UK and AU time zones."
        />
        <div className="bento__media bento__reviews" aria-hidden="true">
          <div className="bento__reviews-track">
            {[...AVAILABILITY, ...AVAILABILITY].map((c, i) => (
              <span key={i} className="bento__review">
                <span className="bento__review-top">
                  <Clock size={14} weight="fill" />
                  <b>{c.name}</b>
                </span>
                <span className="bento__review-role">{c.role}</span>
                <span className="bento__review-work">{c.work}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>
    </nav>
  )
}
