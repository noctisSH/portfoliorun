export type SkillGroup = {
  index: string
  title: string
  blurb: string
  chip: string
  bullets: string[]
  /** Tool marks from public/icons, shown on the card. */
  marks: string[]
}

/** The five skill areas on the Skills page, taken from the résumé. */
export const SKILLS: SkillGroup[] = [
  {
    index: '01',
    title: 'Content review',
    blurb: 'Checking written work against style guides, grammar and punctuation rules.',
    chip: 'Editorial',
    bullets: ['Content quality checking', 'Editorial guidelines', 'Proofreading'],
    marks: ['/icons/grammarly.svg'],
  },
  {
    index: '02',
    title: 'Social media',
    blurb: 'Managing accounts and promotions with consistent, timely content.',
    chip: 'Social',
    bullets: ['Account management', 'Promotional campaigns', 'Community engagement'],
    marks: ['/icons/mono-canva.svg', '/icons/mono-capcut.svg'],
  },
  {
    index: '03',
    title: 'Graphic design',
    blurb: 'Logos, flyers and social materials built to a brand and a brief.',
    chip: 'Creative',
    bullets: ['Photoshop & Illustrator', 'Canva', 'CapCut & Filmora video'],
    marks: ['/icons/mono-ps.svg', '/icons/mono-ai.svg', '/icons/mono-filmora.svg'],
  },
  {
    index: '04',
    title: 'Operations & admin',
    blurb: 'Keeping a store or office running: stock, suppliers, records and customers.',
    chip: 'Operations',
    bullets: ['Inventory & supplier coordination', 'Customer support', 'Data entry & record-keeping'],
    marks: ['/icons/googleworkspace.svg', '/icons/mono-office.svg'],
  },
  {
    index: '05',
    title: 'AI & workflow tools',
    blurb: 'Using AI assistants and automation tools to cut repetitive work.',
    chip: 'Automation',
    bullets: ['ChatGPT', 'n8n, Zapier, Make', 'Google Apps Script'],
    marks: ['/icons/openai.svg', '/icons/n8n.svg', '/icons/zapier.svg'],
  },
]

/** How I like to work, shown as the dark band on the Skills page. */
export const WORKING_STYLE = [
  {
    index: '01',
    label: 'Check carefully.',
    body: 'Read closely, compare against the guidelines, and catch what does not fit.',
    chips: ['Style guides', 'Grammar', 'Accuracy'],
  },
  {
    index: '02',
    label: 'Keep things organized.',
    body: 'Clear records, tidy inventory and handoffs that make sense to the next person.',
    chips: ['Records', 'Inventory', 'Coordination'],
  },
  {
    index: '03',
    label: 'Work remotely.',
    body: 'Comfortable with remote teams, async updates and calls across time zones.',
    chips: ['Slack', 'Zoom', 'Loom'],
  },
]
