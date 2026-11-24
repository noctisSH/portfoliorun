export type Job = {
  id: string
  period: string
  role: string
  org: string
  kind: string
  points: string[]
}

/** Work history, newest first. Wording follows the résumé. */
export const JOBS: Job[] = [
  {
    id: 'fresca',
    period: 'Nov 2019 – Present',
    role: 'Co-Owner / Social Media Manager',
    org: 'Fresca Farm – Samgyup sa Farm',
    kind: 'Business & social',
    points: [
      'Grew the business’s social media presence to more than 16,000 followers through consistent content and promotional campaigns.',
      'Produced marketing materials in Photoshop, Illustrator, Canva, CapCut and Filmora.',
      'Ran day-to-day restaurant operations: logistics, procurement, inventory checks, product presentation and cashiering.',
      'Handled customer inquiries and concerns, and supported customer-traffic recovery through marketing and community engagement.',
    ],
  },
  {
    id: 'remoat',
    period: 'Nov 2025 – May 2026',
    role: 'Audio Transcriptionist (Part-time)',
    org: 'Remoat Teams',
    kind: 'Transcription',
    points: [
      'Transcribed quarterly earnings calls and conference presentations into written documents.',
      'Turned spoken discussions into organized, readable transcripts.',
      'Worked with business and financial discussions that call for careful listening and accuracy.',
    ],
  },
  {
    id: 'plex',
    period: 'Jul 2016 – Sep 2019',
    role: 'Store Manager',
    org: 'Plex Scrap Trading Corp',
    kind: 'Operations',
    points: [
      'Oversaw daily store activity: workflows, inventory, staffing needs and general operations.',
      'Researched products and talked with prospective suppliers to support product selection and availability.',
      'Managed cashier activity and inventory checks to keep records and stock accurate.',
    ],
  },
  {
    id: 'taskus',
    period: 'Sep 2015 – May 2016',
    role: 'Content Quality Editor',
    org: 'TaskUs · US-based Q&A website',
    kind: 'Content quality',
    points: [
      'Quality editor for a US-based Q&A website.',
      'Made sure written content followed style guides, grammar rules and punctuation conventions.',
    ],
  },
  {
    id: 'cole',
    period: 'Nov 2011 – Nov 2014',
    role: 'Social Media Content Manager',
    org: 'Cole Asia Business Center',
    kind: 'Social & design',
    points: [
      'Monitored and updated social media accounts to support promotions with timely, relevant content.',
      'Designed logos, flyers and social media materials to client requirements and brand identity.',
      'Handled clerical work, data entry and record-keeping for administrative operations.',
    ],
  },
]
