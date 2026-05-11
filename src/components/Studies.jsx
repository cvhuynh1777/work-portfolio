import { useNavigate } from 'react-router-dom'
import { STUDIES } from '../data/studies'

const accentMap = {
  cyan: {
    border: 'border-cyan-500/20 hover:border-cyan-500/40',
    tag: 'border-cyan-500/20 text-cyan-400',
    pill: 'border-cyan-500/20 text-cyan-400/70 bg-cyan-500/5',
    dot: 'bg-cyan-400',
    arrow: 'text-cyan-400/60 group-hover:text-cyan-400',
    glow: 'group-hover:shadow-[0_0_30px_rgba(0,212,255,0.06)]',
  },
  violet: {
    border: 'border-violet-500/20 hover:border-violet-500/40',
    tag: 'border-violet-500/20 text-violet-400',
    pill: 'border-violet-500/20 text-violet-400/70 bg-violet-500/5',
    dot: 'bg-violet-400',
    arrow: 'text-violet-400/60 group-hover:text-violet-400',
    glow: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.06)]',
  },
  amber: {
    border: 'border-amber-500/20 hover:border-amber-500/40',
    tag: 'border-amber-500/20 text-amber-400',
    pill: 'border-amber-500/20 text-amber-400/70 bg-amber-500/5',
    dot: 'bg-amber-400',
    arrow: 'text-amber-400/60 group-hover:text-amber-400',
    glow: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.06)]',
  },
}

export default function Studies() {
  const navigate = useNavigate()

  return (
    <section id="studies" className="relative py-28 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <p className="section-heading">// Field Notes</p>
        <h2 className="section-title">Studies & Blog</h2>
        <p className="font-body text-white/40 text-sm mb-14 max-w-md">
          Case studies from real work and writing on ML, data systems, and space. Click to read.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {STUDIES.map((post) => {
            const c = accentMap[post.accent]
            const isPublished = post.status === 'PUBLISHED'

            return (
              <div
                key={post.slug}
                onClick={() => isPublished && navigate(`/study/${post.slug}`)}
                className={`group card-glass border ${c.border} p-6 rounded-xl transition-all duration-300 hover:bg-white/[0.045] hover:-translate-y-0.5 relative overflow-hidden ${c.glow} ${isPublished ? 'cursor-pointer' : 'cursor-default'}`}
              >
                {/* Status indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5">
                  {isPublished ? (
                    <>
                      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} animate-pulse`} />
                      <span className={`font-mono text-[8px] tracking-widest uppercase ${c.tag.split(' ')[1]}`}>
                        Read →
                      </span>
                    </>
                  ) : (
                    <>
                      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} opacity-30`} />
                      <span className="font-mono text-[8px] tracking-widest uppercase text-white/20">
                        Coming Soon
                      </span>
                    </>
                  )}
                </div>

                {/* Type badge */}
                <span className={`font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 rounded border ${c.tag} bg-white/[0.02] inline-block mb-4`}>
                  {post.type}
                </span>

                <h3 className={`font-space font-semibold text-base leading-snug mb-2 transition-colors duration-200 ${isPublished ? 'text-white/80 group-hover:text-white' : 'text-white/50'}`}>
                  {post.title}
                </h3>
                <p className="font-body text-white/40 text-sm leading-relaxed mb-4">
                  {post.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map(tag => (
                    <span key={tag} className={`tag-pill text-[9px] border ${c.pill}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom arrow for published */}
                {isPublished && (
                  <div className={`absolute bottom-4 right-4 transition-all duration-200 ${c.arrow} opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-0.5`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
