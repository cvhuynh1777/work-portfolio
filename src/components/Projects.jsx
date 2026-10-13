const PROJECTS = [
  {
    title: 'Tether',
    type: 'AI/ML Engineering',
    tags: ['Python', 'FastAPI', 'Streamlit', 'RAG', 'Azure OpenAI', 'Microsoft Foundry', 'Docker', 'Azure'],
    href: 'https://github.com/cvhuynh1777/tether',
    liveUrl: 'https://tether-chuynh.azurewebsites.net',
    color: 'green',
    icon: '◈',
    desc: 'A research assistant that answers questions from a vetted collection of official UN space sustainability documents, linking each cited source to its authoritative original. I built the FastAPI and Streamlit app, citation provenance layer, and document catalog around Microsoft Foundry\'s managed retrieval, deployed on Azure App Service.',
  },
  {
    title: 'SpaceWatch',
    type: 'Data Engineering',
    tags: ['Databricks', 'PySpark', 'Delta Lake', 'Airflow', 'Python', 'SQL', 'RAG', 'claude-sonnet-4-6', 'Vector Search', 'FastAPI', 'Streamlit'],
    href: 'https://github.com/cvhuynh1777/spacewatch/tree/main',
    liveUrl: 'https://spacewatch-neo.streamlit.app/',
    color: 'green',
    icon: '◈',
    desc: 'Tracks asteroids that pass close to Earth. Every morning, fresh data is pulled from NASA, cleaned and organized in Databricks, and surfaced in a Streamlit app where you can explore the week\'s closest passes, look up any asteroid, or ask questions in plain English. Answers come from claude-sonnet-4-6 using only real NASA records, with every answer showing its sources.',
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
