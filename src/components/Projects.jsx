import { useState, useEffect } from 'react'
import { getStudy } from '../data/studies'

const PROJECTS = [
  {
    title: 'Tether',
    tags: ['Python', 'FastAPI', 'Streamlit', 'RAG', 'Azure AI Search', 'Azure OpenAI', 'Microsoft Foundry', 'Azure App Service'],
    href: 'https://github.com/cvhuynh1777/tether',
    liveUrl: 'https://tether-chuynh.azurewebsites.net',
    storySlug: 'tether',
    color: 'green',
    desc: 'A research assistant that answers questions from a vetted collection of official UN space sustainability documents, citing the exact pages it used.',
  },
  {
    title: 'SpaceWatch',
    tags: ['Databricks', 'PySpark', 'Delta Lake', 'Airflow', 'Python', 'SQL', 'RAG', 'claude-sonnet-4-6', 'Vector Search', 'FastAPI', 'Streamlit'],
    href: 'https://github.com/cvhuynh1777/spacewatch/tree/main',
    liveUrl: 'https://spacewatch-neo.streamlit.app/',
    storySlug: 'spacewatch',
    color: 'green',
    desc: 'Tracks asteroids that pass close to Earth. Every morning, fresh data is pulled from NASA, cleaned and organized in Databricks, and surfaced in a Streamlit app where you can explore the week\'s closest passes, look up any asteroid, or ask questions in plain English. Answers come from claude-sonnet-4-6 using only real NASA records, with every answer showing its sources.',
  },
]

const colorMap = {
  green: {
    badge: 'tag-pill',
    hover: 'hover:border-plum/30',
    glow: 'group-hover:shadow-[0_0_30px_rgba(209,131,169,0.08)]',
    link: 'text-plum hover:text-queen',
  },
}

function StoryModal({ slug, onClose }) {
  const study = getStudy(slug)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 30)
    document.body.style.overflow = 'hidden'
    return () => {
      clearTimeout(t)
      document.body.style.overflow = ''
    }
  }, [])

  const handleClose = () => {
    setMounted(false)
    setTimeout(onClose, 250)
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center transition-all duration-250 ${mounted ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#050A14]/85 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className={`relative z-10 w-full sm:max-w-2xl max-h-[85vh] rounded-t-2xl sm:rounded-2xl overflow-hidden flex flex-col transition-all duration-250 ${mounted ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'}`}
        style={{ background: '#0d1120', border: '1px solid rgba(72,21,54,0.5)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'rgba(72,21,54,0.4)' }}>
          <div>
            <p className="font-mono text-[9px] tracking-widest uppercase text-plum/60 mb-0.5">Project Story</p>
            <h2 className="font-space font-bold text-lg" style={{ color: '#fdf0f7' }}>{study?.title}</h2>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-white/30 hover:text-white/70 hover:bg-white/5 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 px-6 py-6 space-y-8">
          {!study || study.sections.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-mono text-[9px] tracking-widest uppercase text-plum/50 mb-3">Incoming Transmission</p>
              <p className="font-body text-white/30 text-sm">This story is being written. Check back soon.</p>
            </div>
          ) : (
            study.sections.map((section) => (
              <div key={section.id}>
                <h3 className="font-mono text-[10px] tracking-widest uppercase text-plum mb-3">{section.heading}</h3>
                {section.body?.map((para, i) => (
                  <p key={i} className="font-body text-white/60 text-sm leading-relaxed mb-3">{para}</p>
                ))}
              </div>
            ))
          )}
        </div>

        {/* Footer links */}
        <div className="flex items-center gap-5 px-6 py-4 border-t" style={{ borderColor: 'rgba(72,21,54,0.3)' }}>
          {study?.github && (
            <a href={study.github} target="_blank" rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-widest uppercase text-plum hover:text-queen transition-colors flex items-center gap-1">
              GitHub
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          )}
          {study?.liveUrl && (
            <a href={study.liveUrl} target="_blank" rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-widest uppercase text-plum/60 hover:text-plum transition-colors flex items-center gap-1">
              Live Demo
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          )}

        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeStory, setActiveStory] = useState(null)

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <p className="section-heading">// The Archives</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="font-body text-white/40 text-sm mb-14 max-w-md">
          Some of my personal projects if you were curious!
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((proj) => {
            const c = colorMap[proj.color]
            return (
              <div
                key={proj.title}
                className={`group card-glass border border-white/[0.06] ${c.hover} ${c.glow} p-6 rounded-xl transition-all duration-300 hover:bg-white/[0.045] hover:-translate-y-0.5 flex flex-col`}
              >
                <div className="flex items-start justify-between mb-4">
                  {proj.inProgress && (
                    <span className="font-mono text-[8px] tracking-widest uppercase text-plum/70 border border-plum/20 bg-plum/5 px-2 py-0.5 rounded flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-plum animate-pulse inline-block" />
                      In Progress
                    </span>
                  )}
                </div>

                <h3 className="font-space font-semibold text-base mb-2 leading-snug" style={{ color: '#fdf0f7' }}>
                  {proj.title}
                </h3>
                <p className="font-body text-white/50 text-sm leading-relaxed mb-4">
                  {proj.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tags.map(tag => (
                    <span key={tag} className="tag-pill text-[9px]">{tag}</span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-auto">
                  {/* Story button — primary */}
                  {proj.storySlug && (
                    <button
                      onClick={() => setActiveStory(proj.storySlug)}
                      className="px-4 py-2 font-space font-semibold text-xs rounded-lg border transition-all duration-100 hover:brightness-110 hover:translate-y-0.5 active:translate-y-1"
                      style={{ background: '#71557A', borderColor: 'rgba(113,85,122,0.5)', boxShadow: '0 3px 0 0 #3d2e45', color: '#F3C8DD' }}
                    >
                      View the Story
                    </button>
                  )}

                  {/* Secondary links */}
                  <a href={proj.href} target="_blank" rel="noopener noreferrer"
                    className={`font-mono text-[10px] tracking-widest uppercase ${c.link} transition-colors flex items-center gap-1`}>
                    GitHub
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer"
                      className={`font-mono text-[10px] tracking-widest uppercase ${c.link} transition-colors flex items-center gap-1 opacity-60 hover:opacity-100`}>
                      Live Demo
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {activeStory && <StoryModal slug={activeStory} onClose={() => setActiveStory(null)} />}
    </section>
  )
}
