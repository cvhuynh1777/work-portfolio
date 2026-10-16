// Study/article content registry
// Each entry maps to a /study/:slug route

const PLACEHOLDER = { placeholder: true, body: ['Coming soon.'] }

export const STUDIES = [
  {
    slug: 'tether',
    type: 'Project Story',
    accent: 'amber',
    status: 'PUBLISHED',
    title: 'Tether',
    subtitle: 'A research assistant that tethers answers to authoritative sources.',
    github: 'https://github.com/cvhuynh1777/tether',
    liveUrl: 'https://tether-chuynh.azurewebsites.net',
    sections: [
      { id: 'problem',      heading: 'The Problem',         ...PLACEHOLDER },
      { id: 'solution',     heading: 'The Idea',            ...PLACEHOLDER },
      { id: 'architecture', heading: 'Architecture',        ...PLACEHOLDER },
      { id: 'impact',       heading: 'How It Helps',        ...PLACEHOLDER },
      { id: 'next',         heading: "What's Next",         ...PLACEHOLDER },
    ],
  },
  {
    slug: 'spacewatch',
    type: 'Project Story',
    accent: 'amber',
    status: 'PUBLISHED',
    title: 'SpaceWatch',
    subtitle: 'Tracking asteroids that pass close to Earth, with a natural language interface.',
    github: 'https://github.com/cvhuynh1777/spacewatch/tree/main',
    liveUrl: 'https://spacewatch-neo.streamlit.app/',
    sections: [
      { id: 'problem',      heading: 'The Problem',         ...PLACEHOLDER },
      { id: 'solution',     heading: 'The Idea',            ...PLACEHOLDER },
      { id: 'architecture', heading: 'Architecture',        ...PLACEHOLDER },
      { id: 'impact',       heading: 'How It Helps',        ...PLACEHOLDER },
      { id: 'next',         heading: "What's Next",         ...PLACEHOLDER },
    ],
  },
]

export function getStudy(slug) {
  return STUDIES.find((s) => s.slug === slug) || null
}
