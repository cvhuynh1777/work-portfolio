// Study/article content registry
// Each entry maps to a /study/:slug route

export const STUDIES = [
  // ─── LAUNCH SCRUB PREDICTION ────────────────────────────────────────────────
  {
    slug: "launch-scrub-prediction",
    type: "Case Study",
    accent: "amber",
    status: "PUBLISHED",
    title: "Predicting Rocket Launch Scrubs from Weather",
    subtitle: "A probabilistic ML complement to NASA's Lightning Launch Commit Criteria",
    desc: "Building a weather-based scrub prediction model using ERA5 reanalysis data and historical NASA/SpaceX launch records, and being honest about what the data can and cannot tell us.",
    tags: ["Machine Learning", "Weather Analytics", "Python", "ERA5", "NASA LLCC"],
    date: "",
    readTime: "8 min read",
    github: "https://github.com/cvhuynh1777/ScrubPrediction",
    notebook: true,
    preview: {
      stack: ["Python", "scikit-learn", "pandas", "ERA5", "Jupyter"],
      metrics: [
        { label: "Dataset",      value: "116 launches" },
        { label: "Best CV AUC", value: "0.657" },
        { label: "Best CV F1",  value: "0.252" },
        { label: "Sites",       value: "4 U.S. pads" },
      ],
    },
    sections: [
      {
        id: "background",
        heading: "01 / Problem Statement",
        body: [
          "NASA's Lightning Launch Commit Criteria (LLCC) govern launch go/no-go decisions through binary thresholds on electric fields, wind, lightning, and cloud proximity. They are safety-critical, but binary. This project builds a probabilistic complement: given atmospheric conditions at launch time, what is the likelihood of a scrub? A continuous risk score gives mission control early signal before any single LLCC rule trips.",
        ],
      },
      {
        id: "data",
        heading: "02 / Data & Methodology",
        body: [
          "NASA and SpaceX launch records were merged with ERA5 hourly reanalysis weather data across four U.S. launch sites (Cape Canaveral, KSC, Vandenberg, Boca Chica) via nearest-timestamp join within a ±3-hour window. The result: 116 launches with co-located weather observations and a binary scrub label (88% success / 12% scrub).",
          "Engineered features proxy LLCC rules directly: temperature-dew-point spread (moisture/instability), vertical wind shear (100m vs. 10m), and a rain flag. Year was excluded to prevent temporal confounding.",
        ],
        callout: {
          type: "methodology",
          label: "Leakage Fix",
          text: "An earlier version applied SMOTE before splitting, duplicating minority samples across train and test folds and inflating metrics to near-perfect. The corrected pipeline: stratified split first, then class_weight='balanced' inside each model, equivalent reweighting, zero leakage.",
        },
      },
      {
        id: "eda",
        heading: "03 / Key Findings",
        body: [
          "Scrubbed launches averaged 24.6°C vs. 21.4°C for successes, with lower mean sea-level pressure (1016.4 vs. 1018.2 hPa) and smaller temperature-dew-point spread, all meteorologically consistent with convective instability. Individual feature correlations with the scrub label were weak (< 0.25), but the directional patterns align with LLCC physics and are the most reliable signal this dataset produces.",
        ],
        callout: {
          type: "finding",
          label: "Bottom Line",
          text: "Warmer, lower-pressure, more moisture-saturated conditions precede scrubs. The EDA validates the feature engineering approach even where the model struggles.",
        },
      },
      {
        id: "results",
        heading: "04 / Model Results",
        body: ["5-fold stratified CV on n=92 training records. With only ~13 total scrub events, variance is high; treat these as directional, not definitive."],
        table: {
          headers: ["Model", "CV F1", "CV ROC-AUC", "Notes"],
          rows: [
            ["Logistic Regression", "0.251 ±0.134", "0.632 ±0.199", "Best F1; highest recall"],
            ["Random Forest",       "0.133 ±0.267", "0.610 ±0.120", "Selected, interpretable"],
            ["Gradient Boosting",   "0.000 ±0.000", "0.657 ±0.084", "Highest AUC; predicts all-negative"],
            ["SVM (RBF)",           "0.252 ±0.159", "0.561 ±0.071", "Comparable to LR"],
          ],
        },
        bodyAfterTable: [
          "Random Forest was selected: feature importances map directly to LLCC variables, making predictions explainable to operators. Gradient Boosting maximizes AUC by predicting all-negative; statistically valid, operationally useless.",
        ],
        callout: {
          type: "honest",
          label: "Honest Assessment",
          text: "AUC 0.56–0.66 is above random chance but not deployment-ready. The dataset size (116 records, ~13 scrubs) is the binding constraint. A dedicated scrub database (CCAFS logs, FAA records) would change the picture.",
        },
      },
      {
        id: "llcc",
        heading: "05 / LLCC Integration Concept",
        body: [
          "The model is not a replacement for LLCC; it is a pre-threshold signal. LLCC fires when a rule is violated. This model catches degrading conditions before any threshold is crossed, giving operators lead time to stage contingency resources or request additional atmospheric sounding. Each feature is a physical proxy for an LLCC rule: temp_dew_diff for cloud base instability, wind_shear for multi-level turbulence, msl_hPa for approaching systems.",
        ],
      },
      {
        id: "future",
        heading: "06 / Next Steps",
        body: [
          "Expand with CCAFS/FAA scrub logs. Add electric field and lightning density as direct LLCC proxies. Incorporate 6-hour rolling weather trends to catch deteriorating conditions in time. Calibrate output probabilities (Platt scaling) so P(scrub) = 0.6 means 60% historically, not just a relative score.",
        ],
      },
    ],
  },

  // ─── RED HAT SUMMIT 2026 ────────────────────────────────────────────────────
  {
    slug: "red-hat-summit-2026",
    type: "Blog",
    accent: "amber",
    status: "PUBLISHED",
    title: "Red Hat Summit 2026: Notes & Reflections",
    subtitle: "Notes from the 2026 Red Hat Conference.",
    desc: "I am so grateful for the opportunity to attend the Red Hat Summit 2026 in Atlanta. I learned a lot about AI agents, edge computing, and open infrastructure for defense and got to connect with some great minds! Below are some notes I am keeping for some of the sessions I attended.",
    tags: ["Red Hat", "OpenShift", "AI/ML", "Edge Computing", "Conference", "NASA"],
    date: "May 2026",
    readTime: null,
    github: null,
    notebook: false,

    schedule: [
      {
        day: "Mon · May 11",
        date: "2026-05-11",
        sessions: [
          { time: "2:00 PM", end: "5:00 PM",  title: "Expo Hall",                                      type: "expo",      highlight: false },
          { time: "2:15 PM", end: "2:35 PM",  title: "MLflow: Code, environment, data",                type: "lightning", highlight: false },
          { time: "2:40 PM", end: "3:00 PM",  title: "RamaLama: RAG, MCP, multimodal",                type: "lightning", highlight: false },
          { time: "3:15 PM", end: "3:35 PM",  title: "Responsible AI agents: LangGraph & MCP",         type: "lightning", highlight: true  },
          { time: "4:10 PM", end: "4:30 PM",  title: "OpenShift on bare metal, air-gapped",            type: "lightning", highlight: false },
        ],
      },
      {
        day: "Tue · May 12",
        date: "2026-05-12",
        sessions: [
          { time: "8:30 AM", end: "10:00 AM", title: "Keynote: The next platform is choice",            type: "keynote",   highlight: false },
          { time: "10:00 AM",end: "5:00 PM",  title: "Expo Hall",                                       type: "expo",      highlight: false },
          { time: "11:45 AM",end: "12:25 PM", title: "NASA OpenShift Virtualization Migration",         type: "breakout",  highlight: false },
          { time: "1:00 PM", end: "1:40 PM",  title: "Mission Readiness at the Edge",                  type: "breakout",  highlight: true  },
        ],
      },
      {
        day: "Wed · May 13",
        date: "2026-05-13",
        sessions: [
          { time: "9:00 AM", end: "10:00 AM", title: "Keynote: The AI-ready enterprise is here",        type: "keynote",   highlight: false },
          { time: "10:00 AM",end: "5:00 PM",  title: "Expo Hall",                                       type: "expo",      highlight: false },
          { time: "11:05 AM",end: "11:25 AM", title: "Vibe Coding Duel: May the best AI agent win",    type: "lightning", highlight: false },
          { time: "12:50 PM",end: "1:10 PM",  title: "Running Spark on Kubernetes",                    type: "lightning", highlight: false },
        ],
      },
      {
        day: "Thu · May 14",
        date: "2026-05-14",
        sessions: [
          { time: "8:30 AM", end: "9:10 AM",  title: "The Arctic Edge: Exercise HEIMDALL",             type: "breakout",  highlight: true  },
          { time: "9:45 AM", end: "10:25 AM", title: "Production ML at Scale: PyTorch, Kubeflow, Spark",type: "breakout",  highlight: false },
        ],
      },
    ],

    sections: [
      {
        id: "langgraph",
        heading: "04 / Responsible AI Agents: LangGraph & MCP",
        sessionMeta: {
          title: "Beyond prompts: Building responsible AI agents with LangGraph and MCP",
          type: "Lightning Talk",
          day: "Monday, May 11",
          time: "3:15 PM – 3:35 PM",
          room: "B401-B402 – Level 4",
          speakers: ["Senior Application Engineer, Discover"],
          abstract: "Explores how LangGraph's graph-based architecture enables reproducible reasoning paths and how MCP enables context sharing across tools, shifting from ad hoc prompting to governed, interoperable AI workflows.",
        },
        body: [
          "2026 is the year agent experiments hit enterprise reality. The risk is no longer hallucination. It is unauthorized action, data leakage, and untraceable decisions. Governance has to live in the architecture.",
          "LangGraph defines what an agent may do and when it must stop: Plan > Act > Verify > Commit or stop. MCP scopes context and keeps tool permissions separate from reasoning. Five patterns: explicit state, graph-based routing, open interfaces, runtime guardrails, and safe failure design.",
        ],
      },
      {
        id: "edge-readiness",
        heading: "07 / Mission Readiness at the Edge",
        sessionMeta: {
          title: "Mission readiness at the edge",
          type: "Breakout Session",
          day: "Tuesday, May 12",
          time: "1:00 PM – 1:40 PM",
          room: "B401-B402 – Level 4",
          speakers: ["Sr. Director Product Management, Red Hat", "Chief Architect, Defense, Red Hat", "UAS Program Manager, Lockheed Martin"],
          abstract: "Lockheed Martin and Red Hat's collaboration on software delivery to the defense edge, focusing on CI/CD enhancements, edge AI, and autonomy solutions for UAS programs.",
        },
        body: [
          "Lockheed Martin's Indigo UAV program: small attritable drones for counter-UAS and swarm autonomy. The problem was rapid hardware turnover and containers that worked in dev but not in the field. The solution was bootc containers with Red Hat Device Edge, producing consistent images across all hardware.",
          "The standout concept: 'vanilla aircraft.' Hardware ships agnostic and gets a mission persona (recon, search and rescue, EW) via container at the edge through Red Hat Edge Manager. CI/CD pushes only changed containers, not full rebuilds. In a live demo, a mid-flight swarm change was handled by redeploying a single container through the pipeline in real time.",
        ],
      },
      {
        id: "heimdall",
        heading: "10 / The Arctic Edge: Exercise HEIMDALL",
        sessionMeta: {
          title: "The Arctic edge: Lessons from Exercise HEIMDALL",
          type: "Breakout Session",
          day: "Thursday, May 14",
          time: "8:30 AM – 9:10 AM",
          room: "B407 – Level 4",
          speakers: ["Chief Architect, Defense, Red Hat"],
          abstract: "Results from Exercise HEIMDALL, a NATO COE Cold Weather Operations initiative on edge computing for decision advantage in austere environments, covering cloud-to-core-to-edge architectures, UxV autonomy, and Red Hat Device Edge for fleet management.",
        },
        body: [
          "NATO Arctic Circle exercise, February 2026. 13 military departments, 26 industry partners, 15 drone vendors across aerial, maritime, and subsea. Three takeaways: edge is physical DevOps, open standards are the only path as vendor count scales, and whole-of-government defense is coming.",
          "Three-tier architecture in the field: cloud ran an IBM Granite OSINT chatbot on OpenShift queried live by military leadership. Near edge used an IBM Fusion rack with sensor fusion across all 15 vendor platforms, capable of operating disconnected. Far edge ran Red Hat Device Edge on Jetsons and Toughbooks with fully disconnected object detection.",
        ],
      },
      {
        id: "speculative-decoding",
        heading: "05 / Speculative Decoding: Faster Inference Without Accuracy Loss",
        sessionMeta: {
          title: "Guess and check: Using speculative decoding to accelerate AI inference",
          type: "Talk",
          day: "Red Hat Summit 2026",
          time: "",
          room: "",
          speakers: ["Fynn Schmitt-Ulms, ML Engineer, Red Hat", "Helen Zhao, ML Engineer, Red Hat"],
          abstract: "Speculative decoding uses a small draft model to guess multiple tokens ahead, then a larger verifier model checks them all in one pass, reducing inference time with zero accuracy degradation.",
        },
        body: [
          "LLMs generate tokens sequentially, which is the bottleneck at scale. Speculative decoding uses a small draft model to guess multiple tokens ahead, then the full verifier checks them all in one pass. Correct tokens are accepted, mismatches are rejected. Faster inference, zero accuracy loss. Red Hat ships this in the Red Hat AI Inference Server.",
          "Three drafter algorithms: Eagle-3 uses hidden states from the verifier; P-Eagle parallelizes draft generation; DFlash uses diffusion-style non-causal attention for parallel drafting.",
        ],
      },
      {
        id: "sovereign-cloud",
        heading: "06 / Sovereign Cloud: Disconnected OpenShift at IC Scale",
        sessionMeta: {
          title: "Decades of disconnection: Sovereign cloud lessons from the U.S. Intelligence Community",
          type: "Talk",
          day: "Red Hat Summit 2026",
          time: "",
          room: "",
          speakers: ["Principal Architect, Red Hat"],
          abstract: "How R2DTS modernized a multi-tenant, air-gapped, ATO-concurrent production environment using OpenShift, GitOps, and declarative automation at Intelligence Community scale.",
        },
        body: [
          "R2DTS: actual production, not a reference architecture. Multi-tenant, air-gapped, ATO-concurrent at IC scale. Legacy problems: week-long deployment cycles, inconsistent patching, high overhead, no external connectivity. The fix was declarative automation, containers over VMs, and OpenShift as a single source of truth.",
          "Delivery pipeline: CI through Tekton/Jenkins, ACS image scanning, Quay with signing, oc-mirror for air-gapped transfer, Argo CD for continuous reconciliation on the other side. Result: 80% reduction in maintenance effort. Key lesson: GitOps is required, and disconnected environments must be first-class from the start.",
        ],
      },
      {
        id: "rag-architectures",
        heading: "07 / Scalable RAG Architectures with OpenShift AI",
        sessionMeta: {
          title: "Building scalable RAG architectures with EnterpriseDB, OpenShift, and OpenShift AI",
          type: "Talk",
          day: "Red Hat Summit 2026",
          time: "",
          room: "",
          speakers: ["EnterpriseDB & Red Hat"],
          abstract: "Three approaches to customized AI (agentic, RAG, fine-tuning) and how to build scalable RAG pipelines using EDB Postgres AI as a vector store on OpenShift AI.",
        },
        body: [
          "Three approaches to customized AI: agentic (multi-agent collaboration via MCP), RAG (retrieve and augment), and fine-tuning (InstructLab, LoRA, QLoRA). RAG pipeline: documents to vector DB (EDB Postgres AI), retrieval augments the prompt, LLM responds.",
          "OpenShift AI handles vLLM serving, distributed workloads, and pipelines. Scales horizontally and across GPU via Kubernetes. Hardware support spans NVIDIA, AMD, Intel, and major cloud providers.",
        ],
      },
    ],
  },

]

export function getStudy(slug) {
  return STUDIES.find((s) => s.slug === slug) || null
}
