export type QA = { q: string; a: string }

/**
 * The questions people ask before they email, shown as the FAQ accordion on
 * the Contact view. Five questions, two or three sentences each: the
 * accordion sits in a fixed panel and more than that pushes the email row
 * off the plate.
 */
export const FAQS: QA[] = [
  {
    q: 'What kind of work do you do?',
    a: 'Content quality review and proofreading, social media management, graphic design, customer support and general business operations or admin support.',
  },
  {
    q: 'Are you available full-time?',
    a: 'Yes. I am available full-time and can adjust my schedule to overlap with US (EST/PST), UK (GMT) and Australian (AEST) working hours.',
  },
  {
    q: 'Can you work remotely?',
    a: 'Yes. I work from a dedicated home office with a 300 Mbps fiber connection, a 5G backup, a UPS for power outages, dual monitors and a headset.',
  },
  {
    q: 'Where are you based?',
    a: 'Amadeo, Cavite, Philippines (UTC+8). I am comfortable with calls on Slack, Zoom or Google Meet, and async updates on Loom.',
  },
  {
    q: 'What tools do you use?',
    a: 'Google Workspace and Microsoft Office, Canva, Photoshop and Illustrator, CapCut and Filmora, plus ChatGPT, Grammarly, n8n, Zapier and Make for AI and automation.',
  },
]
