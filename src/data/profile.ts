/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline.
 *
 * Page-specific copy lives in src/data/ (work.ts, skills.ts, faqs.ts) and at
 * the top of each view component.
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Nico Francisco M. Buenaventura',
  firstName: 'Nico',
  handle: '@nbuenaventura01',
  role: 'Content Quality · Social Media · Operations',
  avatarSrc: '/avatar.svg',
  verifiedLabel: 'BS Information Technology, Cavite State University',
  email: 'nicobuenaventurash@gmail.com',
  location: 'Amadeo, Cavite, Philippines',
  stats: [
    { value: '16k+', label: 'Social followers built', Icon: Briefcase },
    { value: 'BSIT', label: 'Cavite State University', Icon: SealCheck },
    { value: 'Remote', label: 'US · UK · AU hours', Icon: Clock },
  ],
  // The intro types this line, then flies it into the Home headline.
  displayName: { line1: 'Quality content,', line2: 'smooth operations.' },
  hero: {
    body:
      'Content reviewer, social media manager and operations all-rounder. Remote-ready and comfortable with AI and workflow tools.',
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Nico Buenaventura monogram',
  },
  socials: [
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/nbuenaventura01', iconPath: '/icons/linkedin.svg' },
  ],
}
