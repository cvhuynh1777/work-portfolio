import curGif from '../assets/Cur.gif'
import marsGif from '../assets/mars.gif'
import earthGif from '../assets/earth.gif'
import rocketGif from '../assets/rocket.gif'
import sunGif from '../assets/sun.gif'

const PIECES = [
  {
    src: curGif,
    title: 'Cursor Character',
    desc: 'Pixel cursor character I created as my original sprite.',
    accent: 'cyan',
    label: 'Original Sprite',
  },
  {
    src: rocketGif,
    title: 'Rocket',
    desc: 'Pixel rocket I created for the Space Mission Simulator.',
    accent: 'cyan',
    label: 'Orbital Sim',
  },
  {
    src: sunGif,
    title: 'Sun',
    desc: 'Pixel sun I created for the Space Mission Simulator.',
    accent: 'amber',
    label: 'Orbital Sim',
  },
  {
    src: marsGif,
    title: 'Mars',
    desc: 'Pixel Mars I created for the Space Mission Simulator.',
    accent: 'amber',
    label: 'Orbital Sim',
  },
  {
    src: earthGif,
    title: 'Earth',
    desc: 'Pixel Earth I created for the Space Mission Simulator.',
    accent: 'violet',
    label: 'Orbital Sim',
  },
]

const borderMap = {
  cyan: 'border-cyan-500/20 hover:border-cyan-500/40',
  violet: 'border-violet-500/20 hover:border-violet-500/40',
  amber: 'border-amber-500/20 hover:border-amber-500/40',
}

const glowMap = {
  cyan: 'group-hover:shadow-[0_0_25px_rgba(0,212,255,0.12)]',
  violet: 'group-hover:shadow-[0_0_25px_rgba(139,92,246,0.12)]',
  amber: 'group-hover:shadow-[0_0_25px_rgba(245,166,35,0.12)]',
}

const labelMap = {
  cyan: 'text-cyan-400/60',
  violet: 'text-violet-400/60',
  amber: 'text-amber-400/60',
}

export default function PixelArt() {
  return (
    <section id="pixel-art" className="relative py-28 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <p className="section-heading">// Creative Assets</p>
        <h2 className="section-title">Pixel Art</h2>
        <p className="font-body text-white/40 text-sm mb-14 max-w-md">
          I love blending creativity and tech as my past time. Here are some samples below!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {PIECES.map((piece) => (
            <div
              key={piece.title}
              className={`group card-glass border ${borderMap[piece.accent]} ${glowMap[piece.accent]} rounded-2xl p-5 transition-all duration-300 hover:bg-white/[0.045] hover:-translate-y-0.5`}
            >
              {/* Canvas */}
              <div className="bg-[#050A14] rounded-xl border border-white/[0.04] p-4 mb-4 flex items-center justify-center min-h-[160px]">
                <img
                  src={piece.src}
                  alt={piece.title}
                  className="pixel-render max-h-32 w-auto"
                />
              </div>

              <p className={`font-mono text-[9px] tracking-widest uppercase mb-1.5 ${labelMap[piece.accent]}`}>
                {piece.label}
              </p>
              <h3 className="font-space font-semibold text-white/80 text-sm mb-1">
                {piece.title}
              </h3>
              <p className="font-body text-white/35 text-xs leading-relaxed">
                {piece.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="font-mono text-[10px] text-white/20 tracking-wide text-center mt-10">
          All sprites designed in Pixel Studio. More work coming soon.
        </p>
      </div>
    </section>
  )
}
