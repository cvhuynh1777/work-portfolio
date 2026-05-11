import { useState, useEffect } from 'react'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'Profile' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'studies', label: 'Studies' },
  { id: 'pixel-art', label: 'Pixel Art' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = links.map(l => document.getElementById(l.id)).filter(Boolean)
      const current = sections.reduce((closest, el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120) return el
        return closest
      }, sections[0])
      if (current) setActive(current.id)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050A14]/90 backdrop-blur-md border-b border-cyan-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="font-mono text-xs tracking-[0.25em] text-cyan-400 hover:text-cyan-300 transition-colors uppercase"
        >
          CH<span className="text-white/40 mx-1">/</span>Portfolio
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.slice(1).map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`relative px-3 py-1.5 font-mono text-[11px] tracking-widest uppercase transition-all duration-200 ${
                active === link.id
                  ? 'text-cyan-400'
                  : 'text-white/40 hover:text-white/80'
              }`}
            >
              {active === link.id && (
                <span className="absolute inset-0 bg-cyan-500/8 rounded" />
              )}
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/60 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#050A14]/95 backdrop-blur-md border-b border-cyan-500/10 px-6 pb-4">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full text-left py-2.5 font-mono text-[11px] tracking-widest uppercase text-white/50 hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
