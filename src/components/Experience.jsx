const TIMELINE = [
  {
    year: '2024 – Now',
    org: 'CACI',
    role: 'Data Engineer, Contract (Full-Time)',
    type: 'work',
    color: 'cyan',
    bullets: [
      'Support in leading a team of engineers and analysts to develop scalable data pipelines through API development, ingesting and transforming environmental datasets for defense wargaming simulations across several warfare centers in different domains.',
      'Architect end-to-end data solutions, designing and producing system architecture diagrams briefed to technical and non-technical stakeholders.',
      'Serve as primary interface between engineering teams and stakeholders, presenting technical roadmaps, system designs, and demonstrations of tool capabilities to program leadership, including briefings delivered at the Pentagon to admirals.',
      'Lead data engineer on a classified defense initiative leveraging AI/ML and data pipeline development to accelerate operational response times in support of naval fleet readiness.',
      'Drive technical direction for ML-powered analytics workflows supporting forecasting, simulation, and operational decision-making across cross-functional teams.',
      'Mentor junior engineers, conduct code reviews, and coordinate sprint planning to deliver data infrastructure on schedule.',
    ],
    tags: ['Apache NiFi', 'FastAPI', 'Python', 'Machine Learning', 'LLMs', 'RAG', 'Model Fine-Tuning', 'Forecasting', 'Elasticsearch', 'PostgreSQL', 'SQL', 'Team Lead', 'Solution Architecture', 'Stakeholder Management', 'Technical Project Management'],
  },
  {
    year: '2024 – Now',
    org: 'Georgia Institute of Technology',
    role: 'M.S. Computational Data Analytics',
    type: 'edu',
    color: 'violet',
    bullets: [],
    tags: ['Machine Learning for Trading', 'Analytics Modeling', 'Simulation', 'Military Simulation & Gaming'],
  },
  {
    year: '2020 – 2023',
    org: 'CACI',
    role: 'Supply Chain Intelligence Analyst, Contract (Part-Time)',
    type: 'work',
    color: 'cyan',
    bullets: [
      'Analyzed naval ship parts reliability data to identify component failure trends and support supply-chain planning and risk mitigation.',
      'Automated data cleaning and preprocessing with Python to enable reliable maintenance and supply-chain analytics.',
    ],
    tags: ['Python', 'Data Science', 'Automation', 'Data Pipelining', 'Supply Chain'],
  },
  {
    year: '2019 – 2023',
    org: 'UC Berkeley',
    role: 'B.S. Electrical Engineering & Computer Science',
    type: 'edu',
    color: 'violet',
    bullets: [],
    tags: ['Software Engineering', 'Artificial Intelligence', 'Machine Learning', 'Computer Security', 'Databases', 'UX/UI Design'],
  },
]

const colorConfig = {
  cyan: {
    dot: 'bg-cyan-400 shadow-[0_0_8px_rgba(0,212,255,0.8)]',
    border: 'border-cyan-500/20',
    tag: 'border-cyan-500/25 text-cyan-400/80 bg-cyan-500/5',
    badge: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    year: 'text-cyan-400',
  },
  violet: {
    dot: 'bg-violet-400 shadow-[0_0_8px_rgba(139,92,246,0.8)]',
    border: 'border-violet-500/20',
    tag: 'border-violet-500/25 text-violet-400/80 bg-violet-500/5',
    badge: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    year: 'text-violet-400',
  },
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <p className="section-heading">// Mission Log</p>
        <h2 className="section-title">Experience & Education</h2>
        <p className="font-body text-white/40 text-sm mb-14 max-w-md">
          A record of my professional experience and education!
        </p>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-10">
            {TIMELINE.map((item, i) => {
              const c = colorConfig[item.color]
              return (
                <div key={i} className="relative pl-12">
                  <div className={`absolute left-[11px] top-5 w-2.5 h-2.5 rounded-full ${c.dot} -translate-x-1/2`} />

                  <div className={`card-glass border ${c.border} p-5 rounded-xl transition-all duration-300 hover:bg-white/[0.045]`}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <span className={`font-mono text-[10px] tracking-widest uppercase ${c.year} block mb-1`}>
                          {item.year}
                        </span>
                        <h3 className="font-space font-semibold text-white text-base leading-snug">
                          {item.role}
                        </h3>
                        <p className="font-body text-white/45 text-sm mt-0.5">
                          {item.org}
                        </p>
                      </div>
                      <span className={`font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 rounded border ${c.badge}`}>
                        {item.type === 'work' ? 'Work' : 'Education'}
                      </span>
                    </div>

                    {item.bullets.length > 0 && (
                      <ul className="space-y-1.5 mb-4">
                        {item.bullets.map((b, j) => (
                          <li key={j} className="flex gap-2 text-sm text-white/55 font-body leading-relaxed">
                            <span className="text-white/20 shrink-0 mt-0.5">·</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className={`flex flex-wrap gap-1.5 ${item.bullets.length === 0 ? '' : ''}`}>
                      {item.tags.map(tag => (
                        <span key={tag} className={`tag-pill text-[9px] ${c.tag}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
