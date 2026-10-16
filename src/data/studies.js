// Study/article content registry
// Each entry maps to a /study/:slug route

export const STUDIES = [
  {
    slug: 'tether',
    type: 'Project Story',
    accent: 'amber',
    status: 'PUBLISHED',
    title: 'Tether',
    subtitle: 'A research assistant that tethers answers to authoritative sources.',
    github: 'https://github.com/cvhuynh1777/tether',
    sections: [],
  },
  {
    slug: 'spacewatch',
    type: 'Project Story',
    accent: 'amber',
    status: 'PUBLISHED',
    title: 'SpaceWatch',
    subtitle: 'Tracking asteroids that pass close to Earth, with a natural language interface.',
    github: 'https://github.com/cvhuynh1777/spacewatch/tree/main',
    sections: [],
  },
]

export function getStudy(slug) {
  return STUDIES.find((s) => s.slug === slug) || null
}
