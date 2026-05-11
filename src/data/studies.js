// Study/article content registry
// Each entry maps to a /study/:slug route

export const STUDIES = [
  // ─── LAUNCH SCRUB PREDICTION ────────────────────────────────────────────────
  {
    slug: "launch-scrub-prediction",
    type: "Case Study",
    accent: "cyan",
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
    subtitle: "Live notes from Atlanta: AI/ML pipelines, edge computing, NASA OpenShift, and the future of open infrastructure.",
    desc: "A first-person account of Red Hat Summit 2026: selected session highlights, technical takeaways, and reflections on the intersection of open source and mission-critical systems.",
    tags: ["Red Hat", "OpenShift", "AI/ML", "Edge Computing", "Conference", "NASA"],
    date: "May 2026",
    readTime: "Live notes",
    github: null,
    notebook: false,

    schedule: [
      {
        day: "Mon · May 11",
        date: "2026-05-11",
        sessions: [
          { time: "2:00 PM", end: "5:00 PM",  title: "Expo Hall",                                      type: "expo",      highlight: false },
          { time: "2:15 PM", end: "2:35 PM",  title: "MLflow: Code, environment, data",                type: "lightning", highlight: true  },
          { time: "2:40 PM", end: "3:00 PM",  title: "RamaLama: RAG, MCP, multimodal",                type: "lightning", highlight: true  },
          { time: "3:15 PM", end: "3:35 PM",  title: "Responsible AI agents: LangGraph & MCP",         type: "lightning", highlight: true  },
          { time: "4:10 PM", end: "4:30 PM",  title: "OpenShift on bare metal, air-gapped",            type: "lightning", highlight: true  },
        ],
      },
      {
        day: "Tue · May 12",
        date: "2026-05-12",
        sessions: [
          { time: "8:30 AM", end: "10:00 AM", title: "Keynote: The next platform is choice",            type: "keynote",   highlight: false },
          { time: "10:00 AM",end: "5:00 PM",  title: "Expo Hall",                                       type: "expo",      highlight: false },
          { time: "11:45 AM",end: "12:25 PM", title: "NASA OpenShift Virtualization Migration",         type: "breakout",  highlight: true  },
          { time: "1:00 PM", end: "1:40 PM",  title: "Mission Readiness at the Edge",                  type: "breakout",  highlight: true  },
        ],
      },
      {
        day: "Wed · May 13",
        date: "2026-05-13",
        sessions: [
          { time: "9:00 AM", end: "10:00 AM", title: "Keynote: The AI-ready enterprise is here",        type: "keynote",   highlight: false },
          { time: "10:00 AM",end: "5:00 PM",  title: "Expo Hall",                                       type: "expo",      highlight: false },
          { time: "11:05 AM",end: "11:25 AM", title: "Vibe Coding Duel: May the best AI agent win",    type: "lightning", highlight: true  },
          { time: "12:50 PM",end: "1:10 PM",  title: "Running Spark on Kubernetes",                    type: "lightning", highlight: true  },
        ],
      },
      {
        day: "Thu · May 14",
        date: "2026-05-14",
        sessions: [
          { time: "8:30 AM", end: "9:10 AM",  title: "The Arctic Edge: Exercise HEIMDALL",             type: "breakout",  highlight: true  },
          { time: "9:45 AM", end: "10:25 AM", title: "Production ML at Scale: PyTorch, Kubeflow, Spark",type: "breakout",  highlight: true  },
        ],
      },
    ],

    sections: [
      {
        id: "intro",
        heading: "01 / Introduction",
        placeholder: true,
        body: [
          "[Notes to be added here]",
        ],
      },
      {
        id: "mlflow",
        heading: "02 / MLflow: The Holy Trinity of Reproducible ML",
        placeholder: true,
        sessionMeta: {
          title: "Code, environment, data: The holy trinity of reproducible ML models with MLflow",
          type: "Lightning Talk",
          day: "Monday, May 11",
          time: "2:15 PM – 2:35 PM",
          room: "B404 – Level 4",
          speakers: ["CTO & Co-Founder, lakeFS", "VP Customer Success, lakeFS"],
          abstract: "Reveals the hidden pitfalls of unversioned data in MLflow and demonstrates how to build a robust dataset versioning workflow within existing MLflow or Kubeflow environments, ensuring full reproducibility and avoiding data discrepancies.",
        },
        body: [
          "[Notes to be added here]",
        ],
      },
      {
        id: "ramalama",
        heading: "03 / RamaLama: Prototyping with RAG, MCP & Multimodal",
        placeholder: true,
        sessionMeta: {
          title: "MCP, RAG, multimodal, and more: Using RamaLama to prototype your next AI application",
          type: "Lightning Talk",
          day: "Monday, May 11",
          time: "2:40 PM – 3:00 PM",
          room: "B401-B402 – Level 4",
          speakers: ["Senior Product Manager, Red Hat"],
          abstract: "Introduces RamaLama, a Red Hat community project that simplifies prototyping with RAG, Model Context Protocol (MCP), and multimodal models, lowering the barrier to modern AI application development.",
        },
        body: [
          "[Notes to be added here]",
        ],
      },
      {
        id: "langgraph",
        heading: "04 / Responsible AI Agents: LangGraph & MCP",
        placeholder: true,
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
          "[Notes to be added here]",
        ],
      },
      {
        id: "airgapped",
        heading: "05 / OpenShift on Bare Metal in Air-Gapped Environments",
        placeholder: true,
        sessionMeta: {
          title: "Red Hat OpenShift on bare metal in air-gapped environments: A guide to disconnected installation",
          type: "Lightning Talk",
          day: "Monday, May 11",
          time: "4:10 PM – 4:30 PM",
          room: "Expo Hall – Discovery Theater 3",
          speakers: ["Sr. Consulting Systems Architect, World Wide Technology"],
          abstract: "Introduces the Red Hat OpenShift Disconnected Install Lab, a hands-on environment guiding engineers through deploying OpenShift on bare metal in DoD and sovereign cloud air-gapped environments. Covers mirror, transfer, configure, and deploy phases.",
        },
        body: [
          "[Notes to be added here]",
        ],
      },
      {
        id: "nasa-openshift",
        heading: "06 / NASA OpenShift Virtualization: Migration & Expansion",
        placeholder: true,
        sessionMeta: {
          title: "Where are they now? NASA's Red Hat OpenShift Virtualization migration completion and expansion",
          type: "Breakout Session",
          day: "Tuesday, May 12",
          time: "11:45 AM – 12:25 PM",
          room: "B403 – Level 4",
          speakers: ["HOSC Systems Architect, NASA", "OpenShift Specialist, Red Hat", "Principal Product Marketing Manager, Red Hat", "Chief Architect, Science and Space, Red Hat"],
          abstract: "NASA Marshall Space Flight Center completed its multi-year migration from traditional hypervisors to OpenShift Virtualization and has expanded into new mission support environments. This session covers operational outcomes, migration lessons, and the next phase of NASA's hybrid cloud strategy across centers.",
        },
        body: [
          "[Notes to be added here]",
        ],
      },
      {
        id: "edge-readiness",
        heading: "07 / Mission Readiness at the Edge",
        placeholder: true,
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
          "[Notes to be added here]",
        ],
      },
      {
        id: "vibe-coding",
        heading: "08 / Vibe Coding Duel: AI Agents Head-to-Head",
        placeholder: true,
        sessionMeta: {
          title: "Vibe coding duel: May the best AI agent win",
          type: "Lightning Talk",
          day: "Wednesday, May 13",
          time: "11:05 AM – 11:25 AM",
          room: "DevZone Theater",
          speakers: ["Technical Director, Evangelism, Red Hat", "Sr. Director, Developer Experience, Red Hat"],
          abstract: "Two developers race to build applications using different AI coding tools across multiple rounds, from standard CRUD services to MCP servers and AI agents. Contrasts vibe coding with traditional spec-driven development.",
        },
        body: [
          "[Notes to be added here]",
        ],
      },
      {
        id: "spark-k8s",
        heading: "09 / Running Spark on Kubernetes",
        placeholder: true,
        sessionMeta: {
          title: "Running Spark on Kubernetes",
          type: "Lightning Talk",
          day: "Wednesday, May 13",
          time: "12:50 PM – 1:10 PM",
          room: "Community Central Theater",
          speakers: ["Senior Software Engineer, Red Hat"],
          abstract: "Overview of the Kubeflow Spark Operator, the most mature and popular way to deploy Spark on Kubernetes, covering its architecture, roadmap, and new features.",
        },
        body: [
          "[Notes to be added here]",
        ],
      },
      {
        id: "heimdall",
        heading: "10 / The Arctic Edge: Exercise HEIMDALL",
        placeholder: true,
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
          "[Notes to be added here]",
        ],
      },
      {
        id: "prod-ml",
        heading: "11 / Production ML at Scale: PyTorch, Kubeflow, Spark & Feast",
        placeholder: true,
        sessionMeta: {
          title: "Production ML at scale: Distributed training with PyTorch, Kubeflow, Spark, and Feast on Red Hat AI",
          type: "Breakout Session",
          day: "Thursday, May 14",
          time: "9:45 AM – 10:25 AM",
          room: "B408 – Level 4",
          speakers: ["Engineering Manager, Red Hat", "Principal Software Engineer, Red Hat"],
          abstract: "Demonstrates production-ready ML pipelines on Red Hat OpenShift AI, covering distributed training with PyTorch Distributed and Kubeflow Trainer, large-scale data preprocessing with Spark, feature store management with Feast, and Slurm integration for GPU cluster scheduling.",
        },
        body: [
          "[Notes to be added here]",
        ],
      },
      {
        id: "conclusion",
        heading: "12 / Conclusion",
        placeholder: true,
        body: [
          "[Notes to be added here]",
        ],
      },
    ],
  },

]

export function getStudy(slug) {
  return STUDIES.find((s) => s.slug === slug) || null
}
