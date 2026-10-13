import curGif from '../assets/Cur.gif'
import marsGif from '../assets/mars.gif'
import earthGif from '../assets/earth.gif'
import sunGif from '../assets/sun.gif'
import lilbotGif from '../assets/lilbot.gif'

const PIECES = [
  {
    src: curGif,
    title: 'Christina',
    desc: 'This is little Christina created by big Christina.',
    bg: '#2a2a3a',
  },
  {
    src: lilbotGif,
    title: 'Felix (...or Helix?)',
    desc: 'Felix is a robot unknowingly doomed to the occasional game of Pong against his alter ego, Helix. Whoever wins gains control, though it\'s hard to tell from the outside who does.',
    scale: true,
    bg: '#2a2a3a',
  },
  {
    src: sunGif,
    title: 'Sun',
    desc: 'It is hot!',
  },
  {
    src: marsGif,
    title: 'Mars',
    desc: 'Martians live here allegedly.',
  },
  {
    src: earthGif,
    title: 'Earth',
    desc: 'Humans live here for now.',
  },
]

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
              className="group card-glass border border-plum/20 hover:border-plum/40 group-hover:shadow-[0_0_25px_rgba(209,131,169,0.12)] rounded-2xl p-5 transition-all duration-300 hover:bg-white/[0.045] hover:-translate-y-0.5"
            >
              {/* Canvas */}
              <div
                className="rounded-xl border border-white/[0.04] p-4 mb-4 flex items-center justify-center min-h-[160px]"
                style={{ backgroundColor: piece.bg || '#050A14' }}
              >
                <img
                  src={piece.src}
                  alt={piece.title}
                  className={`pixel-render w-auto ${piece.scale ? 'h-28' : 'max-h-32'}`}
                  style={piece.scale ? { imageRendering: 'pixelated', minHeight: '7rem' } : {}}
                />
              </div>

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
          All sprites designed in Pixel Studio, Aseprite, and Pixelover. More work coming soon.
        </p>
      </div>
    </section>
  )
}
