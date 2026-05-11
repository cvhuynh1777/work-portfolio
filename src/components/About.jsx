const SKILLS = [
  { label: 'Python', color: 'cyan' },
  { label: 'Machine Learning', color: 'violet' },
  { label: 'Apache NiFi', color: 'cyan' },
  { label: 'FastAPI', color: 'cyan' },
  { label: 'Docker', color: 'blue' },
  { label: 'MLflow', color: 'violet' },
  { label: 'SQL', color: 'blue' },
  { label: 'PostgreSQL', color: 'blue' },
  { label: 'Elasticsearch', color: 'blue' },
  { label: 'Red Hat OpenShift', color: 'amber' },
  { label: 'Data Pipelines', color: 'violet' },
  { label: 'R', color: 'blue' },
  { label: 'Simulation', color: 'amber' },
  { label: 'Reinforcement Learning', color: 'violet' },
  { label: 'Pixel Art', color: 'amber' },
]

const colorMap = {
  cyan: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/5',
  violet: 'border-violet-500/30 text-violet-400 bg-violet-500/5',
  blue: 'border-blue-500/30 text-blue-400 bg-blue-500/5',
  amber: 'border-amber-500/30 text-amber-400 bg-amber-500/5',
}

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">

        <p className="section-heading">// Operator Profile</p>
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div className="space-y-4 text-white/60 font-body text-base leading-relaxed">
            <p>
              I&apos;m Christina, a data engineer and master&apos;s student at Georgia Tech
              pursuing Computational Data Analytics, with a B.S. in EECS from UC Berkeley.
            </p>
            <p>
              My work sits at the intersection of{' '}
              <span className="text-cyan-400">data engineering</span>,{' '}
              <span className="text-violet-400">machine learning</span>, and{' '}
              <span className="text-white/80">operational systems</span>. At CACI I build
              data pipelines and analytics for defense wargaming simulations.
            </p>
            <p>
              Outside of work I love{' '}
              <span className="text-amber-400">pixel art</span>,{' '}
              <span className="text-cyan-400">video games</span>, and anything at the edge
              of technology and creativity. I designed the character you see in the corner.
            </p>
          </div>

          <div className="card-glass p-6 glow-border relative overflow-hidden hud-corner-tl hud-corner-tr">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-2xl rounded-full" />
            <p className="font-mono text-[10px] tracking-widest uppercase text-white/30 mb-5">
              Quick Stats
            </p>
            <div className="space-y-3">
              {[
                { label: 'Degree', value: 'M.S. Comp. Data Analytics, Georgia Tech' },
                { label: 'Undergrad', value: 'B.S. EECS, UC Berkeley' },
                { label: 'Current Role', value: 'Data Engineer (Team Lead) @ CACI' },
                { label: 'Location', value: 'California, USA' },
              ].map(item => (
                <div key={item.label} className="flex gap-3 text-sm">
                  <span className="font-mono text-cyan-500/60 text-xs w-24 shrink-0 pt-0.5">
                    {item.label}
                  </span>
                  <span className="text-white/70 font-body">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <p className="font-mono text-[10px] tracking-widest uppercase text-white/30 mb-4">
          Technical Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map(skill => (
            <span
              key={skill.label}
              className={`tag-pill ${colorMap[skill.color]} transition-all duration-200 hover:scale-105 cursor-default`}
            >
              {skill.label}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
