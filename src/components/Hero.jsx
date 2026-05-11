import { useEffect, useState } from 'react'
import curGif from '../assets/Cur.gif'

const TYPEWRITER_STRINGS = [
  'Data Engineer',
  'Technical Lead',
  "Master's Student",
  'Life-Long Learner',
]

function useTypewriter(strings, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('')
  const [idx, setIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[idx % strings.length]
    let timeout

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setIdx(i => i + 1)
    }

    setDisplay(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, idx, strings, speed, pause])

  return display
}

export default function Hero() {
  const typed = useTypewriter(TYPEWRITER_STRINGS)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-16"
    >
      {/* Horizontal HUD lines */}
      <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent pointer-events-none" />
      <div className="absolute left-0 right-0 bottom-1/4 h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full mx-auto grid md:grid-cols-[1fr_auto] gap-12 items-center">

        {/* LEFT — Text */}
        <div className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-cyan-500/20 rounded-full bg-cyan-500/5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-green-400">
              System Online · Open to Opportunities
            </span>
          </div>

          <h1 className="font-space font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-3">
            Christina
            <br />
            <span
              style={{
                background: 'linear-gradient(-45deg, #00D4FF, #8B5CF6, #00D4FF, #1E6EBF)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'gradient-shift 8s ease infinite',
              }}
            >
              Huynh
            </span>
          </h1>

          {/* Typewriter */}
          <div className="font-mono text-base md:text-lg text-cyan-400/80 h-7 flex items-center">
            <span className="mr-1 text-white/30">{'>'}</span>
            <span>{typed}</span>
            <span className="ml-0.5 w-0.5 h-5 bg-cyan-400 animate-pulse inline-block" />
          </div>

          {/* Clearance badge */}
          <div className="flex items-center gap-2 mb-6 mt-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono text-sm tracking-[0.2em] uppercase text-red-500 font-semibold">
              Clearance: Secret
            </span>
          </div>

          <p className="font-body text-white/55 text-base md:text-lg leading-relaxed max-w-lg mb-10">
            M.S. Computational Data Analytics · Georgia Tech. B.S. Electrical Engineering
            and Computer Science · UC Berkeley. Data engineer building data pipelines and
            systems to support intelligence and operations. Interested in development,
            AI/ML, and strategy. Passionate about the cosmos and the technologies that
            bring us closer to it.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-6 py-3 bg-cyan-500 text-space-900 font-space font-semibold text-sm rounded-lg overflow-hidden transition-all duration-200 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
            >
              View Mission Log
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 border border-cyan-500/30 text-cyan-400 font-space font-medium text-sm rounded-lg transition-all duration-200 hover:border-cyan-400/60 hover:bg-cyan-500/5"
            >
              Establish Contact
            </button>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5 mt-8">
            <a
              href="https://github.com/cvhuynh1777"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-widest uppercase text-white/30 hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <span className="w-4 h-px bg-white/10" />
            <a
              href="https://linkedin.com/in/chrisvh7"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-widest uppercase text-white/30 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <span className="w-4 h-px bg-white/10" />
            <a
              href="mailto:christina.v.huynh1@gmail.com"
              className="font-mono text-[10px] tracking-widest uppercase text-white/30 hover:text-cyan-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        {/* RIGHT — Floating character */}
        <div
          className={`flex-shrink-0 flex items-center justify-center transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="relative animate-[float_6s_ease-in-out_infinite]">
            <div className="absolute inset-0 blur-2xl bg-cyan-500/10 scale-150 pointer-events-none" />
            <img
              src={curGif}
              alt="Pixel Christina"
              className="pixel-render relative z-10 w-40 h-auto md:w-52"
            />
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 animate-bounce">
        <span className="font-mono text-[9px] tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
