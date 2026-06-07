const PROJECTS = [
  {
    title: 'NEO Data Pipeline with Natural Language Querying',
    type: 'Data Engineering',
    group: 'NASA Data Lakehouse',
    groupDesc: 'A self-contained data lakehouse and AI query service built for scientists operating in air-gapped or resource-constrained environments. Three interconnected projects, one system.',
    tags: ['Python', 'DuckDB', 'Parquet', 'FastAPI', 'Claude API', 'NASA', 'Delta Lake'],
    href: 'https://github.com/cvhuynh1777/nasa-data-lakehouse',
    color: 'green',
    icon: '◈',
    desc: 'Bronze-silver-gold medallion pipeline over 9,959 asteroid close approaches from NASA\'s NeoWs API. Gold layer adds a composite hazard score weighted by proximity, velocity, and size, plus percentile rankings and a critical alert flag. Text-to-SQL interface powered by Claude translates plain English into DuckDB queries over Parquet files.',
  },
  {
    title: 'APOD Data Pipeline + RAG Service',
    type: 'AI/ML Engineering',
    group: 'NASA Data Lakehouse',
    tags: ['Python', 'ChromaDB', 'sentence-transformers', 'Claude API', 'RAG', 'Delta Lake'],
    href: 'https://github.com/cvhuynh1777/nasa-data-lakehouse',
    color: 'green',
    icon: '◈',
    desc: '1,289 Astronomy Picture of the Day entries embedded with sentence-transformers and stored in Chroma for semantic search. At query time, Chroma retrieves the most relevant entries and Claude generates a grounded answer citing specific titles and dates. Delta Lake versioning added to both gold pipelines for ACID transactions and time travel.',
  },
  {
    title: 'NASA Data Lakehouse: Infrastructure & Deployment',
    type: 'Data Engineering',
    group: 'NASA Data Lakehouse',
    tags: ['Podman', 'Apache Airflow', 'MinIO', 'Red Hat OpenShift', 'FastAPI', 'PostgreSQL'],
    href: 'https://github.com/cvhuynh1777/nasa-data-lakehouse',
    liveUrl: 'https://nasa-api-christina-v-huynh1-dev.apps.rm3.7wse.p1.openshiftapps.com',
    color: 'green',
    icon: '◉',
    desc: 'Full stack containerized with Podman and docker-compose. MinIO serves as an S3-compatible local object store synced after every pipeline run. Both pipelines orchestrated as Airflow DAGs on a daily schedule. Data catalog auto-generates schema, lineage, and stats per dataset. Deployed to Red Hat OpenShift Developer Sandbox with secrets management and an edge-terminated HTTPS route.',
  },
  {
    title: 'Reinforcement Learning Trading Agent',
    type: 'AI/ML Engineering',
    tags: ['Python', 'Reinforcement Learning', 'MLflow', 'Docker'],
    href: 'https://github.com/cvhuynh1777/nvda_rl_agent',
    color: 'green',
    icon: '◈',
    desc: 'Built an RL agent to trade NVDA stock with an emphasis on drawdown reduction and downside risk control. Logged experiments with MLflow and packaged the final model as a reproducible Docker artifact.',
  },
  {
    title: 'Manual Strategy vs Strategy Learner',
    type: 'ML Theory',
    tags: ['Python', 'Q-Learning', 'Algorithmic Trading', 'Financial Simulation'],
    href: 'https://github.com/cvhuynh1777/ml4t-strategyevaluation-project',
    color: 'green',
    icon: '◇',
    desc: 'CS 7646 capstone comparing a human-designed rule-based strategy against an AI-driven strategy learner under identical market conditions.',
  },
]

const colorMap = {
  green: {
    tag: '',
    badge: 'tag-pill',
    icon: 'text-plum/40',
    hover: 'hover:border-plum/30',
    glow: 'group-hover:shadow-[0_0_30px_rgba(209,131,169,0.08)]',
    link: 'text-plum hover:text-queen',
  },
}

export default function Projects() {
  const items = []
  let lastGroup = null

  PROJECTS.forEach((proj) => {

    const c = colorMap[proj.color]
    items.push(
      <div
        key={proj.title}
        className={`group card-glass border border-white/[0.06] ${c.hover} ${c.glow} p-6 rounded-xl transition-all duration-300 hover:bg-white/[0.045] hover:-translate-y-0.5 flex flex-col`}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            {proj.inProgress && (
              <span className="font-mono text-[8px] tracking-widest uppercase text-plum/70 border border-plum/20 bg-plum/5 px-2 py-0.5 rounded flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-plum animate-pulse inline-block" />
                In Progress
              </span>
            )}
            <span className={`tag-pill text-[9px] border ${c.badge}`}>
              {proj.type}
            </span>
          </div>
        </div>

        <h3 className="font-space font-semibold text-base mb-2 leading-snug transition-colors" style={{ color: '#fdf0f7' }}>
          {proj.title}
        </h3>
        <p className="font-body text-white/50 text-sm leading-relaxed mb-4">
          {proj.desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {proj.tags.map(tag => (
            <span key={tag} className={`tag-pill text-[9px]`}>
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          <a href={proj.href} target="_blank" rel="noopener noreferrer"
            className={`font-mono text-[10px] tracking-widest uppercase ${c.link} transition-colors flex items-center gap-1`}>
            View on GitHub
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
          {proj.liveUrl && (
            <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer"
              className={`font-mono text-[10px] tracking-widest uppercase ${c.link} transition-colors flex items-center gap-1 opacity-60 hover:opacity-100`}>
              View Live
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          )}
        </div>
      </div>
    )
  })

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
          {items}
        </div>
      </div>
    </section>
  )
}
