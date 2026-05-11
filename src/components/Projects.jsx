const PROJECTS = [
  {
    title: 'Space Mission Simulator',
    type: 'Personal',
    tags: ['Python', 'Astrophysics', 'Orbital Mechanics', 'Simulation', 'Pixel Art'],
    href: 'https://mission-simulator-project.vercel.app',
    color: 'cyan',
    icon: '✦',
    desc: 'Applying core astrophysics concepts including gravitational dynamics, Kepler\'s laws, and orbital mechanics to build an interactive space mission simulation from the ground up.',
    inProgress: true,
  },
  {
    title: 'Reinforcement Learning Trading Agent',
    type: 'Personal',
    tags: ['Python', 'Reinforcement Learning', 'MLflow', 'Docker'],
    href: 'https://github.com/cvhuynh1777/nvda_rl_agent',
    color: 'cyan',
    icon: '◈',
    desc: 'Built an RL agent to trade NVDA stock with an emphasis on drawdown reduction and downside risk control. Logged experiments with MLflow and packaged the final model as a reproducible Docker artifact.',
  },
  {
    title: 'Manual Strategy vs Strategy Learner',
    type: 'Academic',
    tags: ['Python', 'Q-Learning', 'Algorithmic Trading', 'Financial Simulation'],
    href: 'https://github.com/cvhuynh1777/ml4t-strategyevaluation-project',
    color: 'violet',
    icon: '◇',
    desc: 'CS 7646 capstone comparing a human-designed rule-based strategy against an AI-driven strategy learner under identical market conditions.',
  },
  {
    title: 'SplitMate: AI Receipt Splitting',
    type: 'Personal',
    tags: ['Python', 'FastAPI', 'OCR', 'LLMs', 'Streamlit'],
    href: 'https://github.com/cvhuynh1777/splitmateapp',
    color: 'cyan',
    icon: '◈',
    desc: 'AI-powered receipt splitting app that extracts line items via OCR and applies natural language instructions to compute fair per-person bill splits.',
  },
  {
    title: 'Pulse: YouTube Sentiment Analysis',
    type: 'Personal',
    tags: ['Next.js', 'Tailwind', 'NLP', 'VADER', 'YouTube API'],
    href: 'https://github.com/cvhuynh1777/PulseApp',
    color: 'blue',
    icon: '◉',
    desc: 'Sentiment analysis web app restoring visibility into audience reactions after YouTube removed public dislike counts, analyzing comment sentiment on trending videos.',
  },
  {
    title: 'How to Build an NBA Champion',
    type: 'Academic',
    tags: ['ML', 'Sports Analytics', 'Regression', 'Clustering'],
    href: 'https://github.com/cvhuynh1777/IEOR142',
    color: 'amber',
    icon: '◇',
    desc: 'IEOR 142 final project analyzing the drivers of NBA championship success using historical player, team, and chemistry datasets spanning multiple eras.',
  },
]

const colorMap = {
  cyan: {
    tag: 'border-cyan-500/25 text-cyan-400/80 bg-cyan-500/5',
    badge: 'text-cyan-400/60 bg-cyan-500/8 border-cyan-500/15',
    icon: 'text-cyan-500/40',
    hover: 'hover:border-cyan-500/30',
    glow: 'group-hover:shadow-[0_0_30px_rgba(0,212,255,0.08)]',
    link: 'text-cyan-400 hover:text-cyan-300',
  },
  violet: {
    tag: 'border-violet-500/25 text-violet-400/80 bg-violet-500/5',
    badge: 'text-violet-400/60 bg-violet-500/8 border-violet-500/15',
    icon: 'text-violet-500/40',
    hover: 'hover:border-violet-500/30',
    glow: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.08)]',
    link: 'text-violet-400 hover:text-violet-300',
  },
  blue: {
    tag: 'border-blue-500/25 text-blue-400/80 bg-blue-500/5',
    badge: 'text-blue-400/60 bg-blue-500/8 border-blue-500/15',
    icon: 'text-blue-500/40',
    hover: 'hover:border-blue-500/30',
    glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]',
    link: 'text-blue-400 hover:text-blue-300',
  },
  amber: {
    tag: 'border-amber-500/25 text-amber-400/80 bg-amber-500/5',
    badge: 'text-amber-400/60 bg-amber-500/8 border-amber-500/15',
    icon: 'text-amber-500/40',
    hover: 'hover:border-amber-500/30',
    glow: 'group-hover:shadow-[0_0_30px_rgba(245,166,35,0.08)]',
    link: 'text-amber-400 hover:text-amber-300',
  },
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <p className="section-heading">// System Archives</p>
        <h2 className="section-title">Development Projects</h2>
        <p className="font-body text-white/40 text-sm mb-14 max-w-md">
          A selection of personal and academic builds: ML systems, data apps, and analytical tools.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((proj) => {
            const c = colorMap[proj.color]
            return (
              <a
                key={proj.title}
                href={proj.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group card-glass border border-white/[0.06] ${c.hover} ${c.glow} p-6 rounded-xl transition-all duration-300 hover:bg-white/[0.045] hover:-translate-y-0.5 block`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-2xl ${c.icon} font-mono`}>{proj.icon}</span>
                  <div className="flex items-center gap-2">
                    {proj.inProgress && (
                      <span className="font-mono text-[8px] tracking-widest uppercase text-amber-400/70 border border-amber-500/20 bg-amber-500/5 px-2 py-0.5 rounded flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-amber-400 animate-pulse inline-block" />
                        In Progress
                      </span>
                    )}
                    <span className={`tag-pill text-[9px] border ${c.badge}`}>
                      {proj.type}
                    </span>
                  </div>
                </div>

                <h3 className="font-space font-semibold text-white text-base mb-2 leading-snug group-hover:text-white transition-colors">
                  {proj.title}
                </h3>
                <p className="font-body text-white/50 text-sm leading-relaxed mb-4">
                  {proj.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tags.map(tag => (
                    <span key={tag} className={`tag-pill text-[9px] border ${c.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={`font-mono text-[10px] tracking-widest uppercase ${c.link} transition-colors flex items-center gap-1`}>
                  {proj.href.includes('github.com') ? 'View on GitHub' : 'View Live'}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
