import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getStudy } from '../data/studies'

const accentColors = {
  amber: {
    badge:        'text-plum border-plum/30 bg-plum/5',
    heading:      'text-plum',
    tag:          '',
    glow:         'via-plum/10',
    metaVal:      'text-plum',
    scheduleHL:   'border-plum/50 bg-plum/10 text-queen',
    dot:          'bg-plum',
  },
}

const calloutTypeStyles = {
  methodology: { label: 'text-plum', border: 'border-l-plum/70', bg: 'bg-plum/5' },
  finding:     { label: 'text-plum',   border: 'border-l-plum/70',   bg: 'bg-plum/5'   },
  honest:      { label: 'text-plum',  border: 'border-l-plum/70',  bg: 'bg-plum/5'  },
}

const sessionTypeStyle = {
  keynote:   { dot: 'bg-white/60',    pill: 'text-white/50 border-white/15 bg-white/5'        },
  breakout:  { dot: 'bg-plum',    pill: ''   },
  lightning: { dot: 'bg-plum',  pill: '' },
  expo:      { dot: 'bg-white/20',    pill: 'text-white/25 border-white/8 bg-transparent'     },
  social:    { dot: 'bg-plum',   pill: ''  },
  logistics: { dot: 'bg-white/15',    pill: 'text-white/20 border-white/5 bg-transparent'     },
}

// ── Schedule visual ────────────────────────────────────────────────────────────
function ScheduleVisual({ schedule, accentHL }) {
  const [activeDay, setActiveDay] = useState(0)
  const day = schedule[activeDay]

  return (
    <div className="my-10">
      {/* Day tabs */}
      <div className="flex gap-1 mb-4 overflow-x-auto pb-1 scrollbar-none">
        {schedule.map((d, i) => (
          <button
            key={d.date}
            onClick={() => setActiveDay(i)}
            className={`flex-shrink-0 font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 rounded border transition-all duration-200 ${
              activeDay === i
                ? `${accentHL} border-opacity-100`
                : 'text-white/30 border-white/8 bg-transparent hover:text-white/60 hover:border-white/15'
            }`}
          >
            {d.day}
          </button>
        ))}
      </div>

      {/* Session list for active day */}
      <div className="space-y-2">
        {day.sessions.map((s, i) => {
          const st = sessionTypeStyle[s.type] || sessionTypeStyle.logistics
          const isHL = s.highlight
          return (
            <div
              key={i}
              className={`flex items-start gap-3 px-4 py-3 rounded-lg border transition-all duration-200 ${
                isHL
                  ? `${accentHL} shadow-sm`
                  : s.type === 'expo' || s.type === 'logistics'
                    ? 'border-white/5 bg-transparent opacity-40'
                    : 'border-white/8 bg-white/[0.02]'
              }`}
            >
              {/* Time */}
              <span className="font-mono text-[10px] text-white/35 w-16 flex-shrink-0 pt-0.5">
                {s.time}
              </span>

              {/* Dot + title */}
              <div className="flex items-start gap-2 min-w-0 flex-1">
                <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${isHL ? accentHL.includes('amber') ? 'bg-plum' : accentHL.includes('green') ? 'bg-plum' : 'bg-plum' : st.dot}`} />
                <span className={`font-body text-sm leading-snug ${isHL ? 'text-white/90 font-medium' : 'text-white/45'}`}>
                  {s.title}
                </span>
              </div>

              {/* Type pill */}
              <span className={`font-mono text-[8px] tracking-widest uppercase px-1.5 py-0.5 rounded border flex-shrink-0 hidden sm:block ${isHL ? 'text-inherit border-current opacity-70' : st.pill}`}>
                {s.type === 'lightning' ? 'LT' : s.type === 'breakout' ? 'BO' : s.type === 'keynote' ? 'KN' : s.type === 'social' ? 'RE' : s.type === 'expo' ? 'EX' : '??'}
              </span>
            </div>
          )
        })}
      </div>

    </div>
  )
}

// ── Session meta card ──────────────────────────────────────────────────────────
function SessionCard({ meta }) {
  return (
    <div className="rounded-xl p-4 mb-6 bg-white/[0.02]" style={{ border: '1px solid rgba(72,21,54,0.5)' }}>
      {(meta.day || meta.time) && (
        <p className="font-mono text-[9px] text-white/25 mb-2">{meta.day}{meta.time ? ` · ${meta.time}` : ''}</p>
      )}
      <p className="font-space font-semibold text-white/80 text-sm leading-snug mb-2">{meta.title}</p>
      {meta.room && <p className="font-mono text-[9px] tracking-wide text-white/20 mb-2">{meta.room}</p>}
      <p className="font-body text-white/40 text-xs leading-relaxed mb-3 italic">{meta.abstract}</p>
      {meta.speakers?.length > 0 && (
        <div className="flex flex-wrap gap-x-4 gap-y-1 pt-3 border-t border-white/5">
          {meta.speakers.map((s, i) => (
            <span key={i} className="font-mono text-[9px] text-white/30">{s}</span>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function StudyPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const study = getStudy(slug)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [slug])

  if (!study) {
    return (
      <div className="min-h-screen bg-[#050A14] flex items-center justify-center text-white/40 font-mono">
        <div className="text-center">
          <p className="text-[10px] tracking-widest uppercase mb-4 text-white/20">404 / NOT FOUND</p>
          <p className="mb-6">Study not found.</p>
          <button onClick={() => navigate('/')} className="text-plum hover:text-queen transition-colors text-sm">
            ← Return to Portfolio
          </button>
        </div>
      </div>
    )
  }

  const c = accentColors[study.accent] || accentColors.amber

  return (
    <div className="relative min-h-screen bg-[#050A14] text-queen">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${c.glow} to-transparent`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(72,21,54,0.08),transparent)]" />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050A14]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-white/40 hover:text-plum transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </button>
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/20">CH / Field Notes</span>
        </div>
      </nav>

      <main className={`relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-24 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

        {/* Header */}
        <div className="mb-10">
          <h1 className="font-space font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-3 max-w-3xl" style={{ color: '#fdf0f7' }}>
            {study.title}
          </h1>
          <p className="font-body text-white/45 text-base leading-relaxed max-w-2xl mb-5">
            {study.subtitle}
          </p>

          {study.github && (
            <a
              href={study.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase text-plum/60 hover:text-plum transition-colors mb-8"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View on GitHub
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}

          <div className={`h-px bg-gradient-to-r from-transparent ${c.glow} to-transparent`} />
        </div>

        {/* Intro */}
        {study.desc && (
          <div className="mb-12">
            <p className="font-body text-white/50 text-base leading-relaxed max-w-2xl">
              {study.desc}
            </p>
            <div className={`h-px bg-gradient-to-r from-transparent ${c.glow} to-transparent mt-8`} />
          </div>
        )}

        {/* Two-col: article + sidebar */}
        <div className={study.preview ? "grid lg:grid-cols-[1fr_260px] gap-12 items-start" : ""}>

          <article className="min-w-0">
            {study.sections.length === 0 ? (
              <div className="card-glass border border-white/8 rounded-xl p-10 text-center">
                <span className={`font-mono text-[9px] tracking-widest uppercase ${c.metaVal} block mb-3`}>Incoming Transmission</span>
                <p className="font-body text-white/40 text-sm">This article is currently being drafted. Check back soon.</p>
              </div>
            ) : (
              <div className="space-y-14">
                {study.sections.map((section) => (
                  <section key={section.id} id={section.id}>
                    <h2 className="section-heading mb-5 text-sm">
                      {section.heading}
                    </h2>

                    {/* Session meta card */}
                    {section.sessionMeta && <SessionCard meta={section.sessionMeta} />}

                    {/* Body paragraphs */}
                    {section.body?.map((para, i) => (
                      <p
                        key={i}
                        className={`font-body text-[15px] leading-[1.85] mb-4 ${
                          section.placeholder
                            ? 'text-white/25 italic border-l-2 border-white/8 pl-4'
                            : 'text-white/60'
                        }`}
                      >
                        {para}
                      </p>
                    ))}

                    {/* Callout */}
                    {section.callout && (() => {
                      const cs = calloutTypeStyles[section.callout.type] || calloutTypeStyles.finding
                      return (
                        <div className={`border-l-2 ${cs.border} ${cs.bg} rounded-r-lg px-5 py-4 my-6`}>
                          <p className={`font-mono text-[9px] tracking-widest uppercase ${cs.label} mb-2`}>{section.callout.label}</p>
                          <p className="font-body text-white/55 text-sm leading-relaxed">{section.callout.text}</p>
                        </div>
                      )
                    })()}

                    {/* Table */}
                    {section.table && (
                      <div className="my-6 overflow-x-auto">
                        <table className="w-full text-sm font-mono">
                          <thead>
                            <tr className="border-b border-white/10">
                              {section.table.headers.map(h => (
                                <th key={h} className="text-left text-[9px] tracking-widest uppercase text-white/30 pb-3 pr-6">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, i) => (
                              <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                {row.map((cell, j) => (
                                  <td key={j} className={`py-3 pr-6 text-[12px] ${j === 0 ? 'text-white/70' : j === 1 || j === 2 ? c.metaVal : 'text-white/35'}`}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {section.bodyAfterTable?.map((para, i) => (
                      <p key={i} className="font-body text-white/60 text-[15px] leading-[1.85] mb-4">{para}</p>
                    ))}
                  </section>
                ))}
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 space-y-5">

            {/* Project card */}
            {study.preview && (
              <div className="card-glass border border-white/8 rounded-xl p-5">
                <p className="font-mono text-[8px] tracking-widest uppercase text-white/25 mb-4">Project Files</p>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {study.preview.metrics.map(({ label, value }) => (
                    <div key={label} className="bg-white/[0.03] rounded-lg p-3 border border-white/5">
                      <p className="font-mono text-[7px] tracking-widest uppercase text-white/25 mb-1">{label}</p>
                      <p className={`font-mono text-xs ${c.metaVal}`}>{value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1 mb-5">
                  {study.preview.stack.map(s => (
                    <span key={s} className="tag-pill">{s}</span>
                  ))}
                </div>
                {study.github && (
                  <a href={study.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-3 py-2.5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/8 hover:border-white/15 rounded-lg transition-all duration-200 group">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-white/50 group-hover:text-white/80 transition-colors">GitHub Repo</span>
                    <svg className="w-3 h-3 text-white/25 group-hover:text-white/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            )}

          </aside>
        </div>
      </main>
    </div>
  )
}
