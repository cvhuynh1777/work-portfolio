const SKILLS = [
  { label: 'Python' },
  { label: 'Machine Learning' },
  { label: 'Apache NiFi' },
  { label: 'FastAPI' },
  { label: 'Docker' },
  { label: 'MLflow' },
  { label: 'SQL' },
  { label: 'PostgreSQL' },
  { label: 'Elasticsearch' },
  { label: 'Red Hat OpenShift' },
  { label: 'Data Pipelines' },
  { label: 'R' },
  { label: 'Simulation' },
  { label: 'Reinforcement Learning' },
  { label: 'Apache Airflow' },
  { label: 'DuckDB' },
  { label: 'ChromaDB' },
  { label: 'Delta Lake' },
  { label: 'Parquet' },
  { label: 'MinIO' },
  { label: 'sentence-transformers' },
  { label: 'Podman' },
  { label: 'Pixel Art' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">

        <p className="section-heading">// About</p>
        <h2 className="section-title">About Me</h2>

        <div className="mb-14 space-y-6 font-mono font-bold text-base leading-loose" style={{ color: 'rgba(253,240,247,0.88)' }}>
          <p>
            I&apos;m Christina, a lead data engineer and master&apos;s student at Georgia Tech
            pursuing Computational Data Analytics, with a B.S. in EECS from UC Berkeley.
          </p>
          <p>
            I work with end-to-end data pipelines for several stakeholders. I am passionate
            about what I do and am always eager to learn.
          </p>
          <p>
            Outside of work I love pixel art, video games, and anything at the edge of
            technology and creativity. Whenever I get a chance, I like to design little
            pixel characters or assets for my work!
          </p>
        </div>

        {/* Skills */}
        <p className="font-mono text-[10px] tracking-widest uppercase text-white/30 mb-4">
          Technical Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map(skill => (
            <span
              key={skill.label}
              className="tag-pill transition-all duration-200 hover:scale-105 cursor-default"
            >
              {skill.label}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
