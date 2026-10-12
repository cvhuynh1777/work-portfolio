// Study/article content registry
// Each entry maps to a /study/:slug route

export const STUDIES = []

export function getStudy(slug) {
  return STUDIES.find((s) => s.slug === slug) || null
}
