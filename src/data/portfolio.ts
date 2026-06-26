export const personal = {
  name: "Nikhil Yeminedi",
  roles: [
    "Applied NLP & ML Research Engineer",
    "Knowledge Graph Architect",
    "LLM Fine-Tuning Specialist",
  ],
  summary:
    "Applied NLP and ML Research Engineer with 3.5+ years of production experience building LLM fine-tuning pipelines, transformer-based NLP systems, and knowledge graph architectures across fintech, legal-tech, and academic research.",
  tagline:
    "From fault-tolerant financial pipelines at Visa to published research that opens the black box of AI — BERT/RoBERTa fine-tuning, mechanistic interpretability, entity resolution, and RAG at scale.",
  location: "Atlanta, GA",
  email: "nikhilgoudyeminedi@gmail.com",
  phone: "(404) 203-8442",
  address: "Atlanta, GA 30324",
  linkedin: "https://www.linkedin.com/in/nikhil-yeminedi-184576217/",
  github: "https://github.com/nikhilgoud003",
  scholar: "https://scholar.google.com/citations?user=nikhil-yeminedi",
  resume: "/NikhilYeminedi_Resume.pdf",
  profileImage: "/assets/profile.png",
};

export const stats = [
  { value: 3.5, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "M+", label: "PACER Records Processed" },
  { value: 2, suffix: "", label: "Research Publications" },
  { value: 99, suffix: "%", label: "BERT Classifier Accuracy" },
];

export const about = `I'm an Applied NLP and ML Research Engineer at SCALES (Georgia State University), building transformer fine-tuning pipelines, knowledge graph architectures, and production RAG systems on millions of U.S. Federal Court records.

My work spans RoBERTa-based entity resolution (100% F1 on legal entity matching), spaCy NER microservices over 15M+ PACER records, mechanistic interpretability research published at NLPIR 2026, and local GraphRAG systems for natural-language querying over Neo4j — always documenting what failed and how I fixed it.

Before research, I spent 2.5+ years as a Data & ML Engineer at Visa (via TCS), engineering 30+ production ETL pipelines, credit-risk analytics on millions of daily transactions, and contributing to $10M+ in cost savings on the TUSKER (GFDM) project.`;

export const education = [
  {
    degree: "M.S. Computer Science",
    school: "Georgia State University",
    period: "Jan 2025 – Aug 2026",
    location: "Atlanta, GA",
    detail: "GPA: 4.0/4.0",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
  },
];

export const skillCategories = [
  {
    id: "llm",
    title: "LLM & NLP",
    icon: "🧠",
    skills: [
      "BERT",
      "RoBERTa",
      "Hugging Face Transformers",
      "Fine-Tuning",
      "Transfer Learning",
      "Mechanistic Interpretability",
      "Attention Analysis",
      "NER",
      "Entity Resolution",
      "spaCy",
      "PyTorch",
      "TensorFlow",
      "MLflow",
      "scikit-learn",
    ],
  },
  {
    id: "research",
    title: "NLP Research Methods",
    icon: "🔬",
    skills: [
      "Co-occurrence metrics (LLR, PMI, DSC)",
      "t-SNE latent clustering",
      "Welch T-test",
      "Causal ablation",
      "Induction head mapping",
      "Knowledge graph generation",
      "Neuro-symbolic frameworks",
    ],
  },
  {
    id: "genai",
    title: "GenAI & Retrieval",
    icon: "✨",
    skills: [
      "RAG Architecture",
      "Prompt Engineering",
      "Embedding retrieval",
      "Context management",
      "Claude / BERT integration",
      "Vector search",
      "Ollama (local LLM)",
      "GraphRAG",
    ],
  },
  {
    id: "ml",
    title: "ML Frameworks & Research",
    icon: "📊",
    skills: [
      "CNNs",
      "RNNs",
      "LSTMs",
      "GBDT",
      "Federated Learning",
      "Graph Neural Networks",
      "Deep Learning",
      "Distributed Training",
      "Model Evaluation",
    ],
  },
  {
    id: "data",
    title: "Data & Engineering",
    icon: "⚙️",
    skills: [
      "Python",
      "SQL",
      "PySpark",
      "Apache Spark",
      "Airflow DAGs",
      "ETL/ELT",
      "PostgreSQL",
      "MongoDB",
      "Snowflake",
      "Databricks",
      "Flask",
      "Django",
      "REST APIs",
      "Docker",
      "Neo4j",
      "Cypher",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      "AWS (EC2, S3, Lambda, SageMaker)",
      "Microsoft Azure",
      "GitHub Actions",
      "Jenkins",
      "CI/CD",
      "Linux/Unix",
      "Power BI",
      "Matplotlib",
    ],
  },
];

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "Moving Data into Hadoop – IBM",
  "Python & Flask – Udemy",
];

export const experience = [
  {
    title: "NLP / ML Engineer",
    company: "SCALES",
    location: "Atlanta, GA",
    period: "May 2025 – Present",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80",
    bullets: [
      "Fine-tuned RoBERTa Entity Resolution (Ditto) on 1,000+ legal documents from 70+ source types — zero-labeled-data training pipeline, 100% F1, 99.9% record-linkage accuracy",
      "Built spaCy NER microservices with caching/concurrency processing 15M+ PACER records — 24% precision improvement, 98% entity-resolution accuracy",
      "Constructed multi-entity knowledge graph (1,600+ mentions → 1,190 unique entities) via Union-Find clustering; multi-key blocking reduced comparisons 95%",
      "Production RAG legal AI assistant (Claude + BERT) with 99.9% uptime on AWS EC2",
      "Power BI dashboards with 100% stakeholder adoption; led civic-tech hackathon eviction-prediction workstream",
    ],
  },
  {
    title: "AI Research Engineer",
    company: "DICE Lab, Georgia State University",
    location: "Atlanta, GA",
    period: "Jan 2025 – Dec 2025",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400&q=80",
    bullets: [
      "Fine-tuned BERT on 163K+ posts for disaster detection — 99% accuracy (43% over baseline); published NLPIR 2026 (Springer)",
      "Mechanistic interpretability: O(1)-memory tensor masking across 12 layers / 144 attention heads — 2nd paper under review (ACL/EMNLP/NAACL 2026)",
      "t-SNE clustering, Welch's T-test (p<0.0001), induction head mapping; causal ablation collapses confidence 99.5% → 2.6%",
      "Full-stack disaster informatics app (Flask + React + PostgreSQL) with NOAA datasets — 70% less manual analysis",
    ],
  },
  {
    title: "Data & ML Engineer",
    company: "Visa Inc. (via TCS)",
    location: "India",
    period: "Jul 2022 – Dec 2024",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80",
    bullets: [
      "ML for anomaly detection, credit risk forecasting on millions of daily transactions — 28% faster, 99.7% reliability, $10M+ savings on TUSKER",
      "30+ production ETL/ELT pipelines (Python, Spark, Hadoop, Databricks) — 42% faster integration, 60% less manual effort",
      "DistCP/Sqoop migrations, Jenkins CI/CD + Docker — 97% deployment success; Power BI + Snowflake executive dashboards",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Steed 26 Solutions Pvt. Ltd.",
    location: "India",
    period: "Mar 2021 – Jun 2022",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
    bullets: [
      "Hospital Records Management System (HRMS) for 1,000+ concurrent users — 55% faster retrieval, 30% faster page loads",
      "95%+ code quality via Agile Scrum, Git, QA automation; RESTful service layers for healthcare data workflows",
    ],
  },
];

export type ProjectCategory =
  | "all"
  | "nlp"
  | "knowledge-graph"
  | "data-engineering"
  | "research";

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  bullets: string[];
  tags: string[];
  categories: ProjectCategory[];
  image: string;
  period?: string;
  highlight?: string;
  metrics?: { label: string; value: string }[];
  featured?: boolean;
  hasDeepDive?: boolean;
};

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "knowledge-graph", label: "Knowledge Graphs" },
  { id: "nlp", label: "NLP & LLM" },
  { id: "research", label: "Research" },
  { id: "data-engineering", label: "Data Engineering" },
];

export const projects: Project[] = [
  {
    id: "pacer-kg",
    title: "PACER Legal Knowledge Graph",
    subtitle: "Entity Resolution + GraphRAG on Federal Court Records",
    description:
      "End-to-end knowledge graph pipeline for 1.28M+ U.S. Federal Court cases — rule-based extraction, Neo4j load, 4-layer Ditto entity resolution, and local Ollama GraphRAG. Documents real failure modes, fixes, and what actually shipped.",
    bullets: [
      "4-stage pipeline: extraction → Neo4j load → 4-layer ER (Ditto) → local GraphRAG",
      "Caught & fixed Ditto false merges via threshold 0.85→0.95 + first-name veto rule",
      "GraphRAG v2 with Ollama text2cypher — caught hallucination, zero API cost",
      "Pilot: 1,122 cases across 86 courts; scaling to full 1.28M dataset in progress",
    ],
    tags: ["Neo4j", "Ditto", "RoBERTa", "GraphRAG", "Ollama", "Cypher", "PACER"],
    categories: ["knowledge-graph", "nlp"],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    period: "May 2025 – Present",
    highlight: "Flagship Project",
    featured: true,
    hasDeepDive: true,
    metrics: [
      { label: "F1 Score", value: "100%" },
      { label: "Records", value: "15M+" },
      { label: "Entities", value: "1,190" },
    ],
  },
  {
    id: "gnn-er",
    title: "Heterogeneous GNN for Entity Resolution",
    subtitle: "Graph-Neighborhood Similarity + RoBERTa",
    description:
      "End-to-end entity resolution using fine-tuned RoBERTa and graph-neighborhood similarity scoring across heterogeneous legal documents.",
    bullets: [
      "100% F1 on entity matching across 1,000+ documents from 70+ sources",
      "Multi-entity KG: 1,600+ mentions → 1,190 unique entities (4 node types, 4 rel types)",
      "Multi-key blocking reduced pairwise space by 95% while maintaining full recall",
      "Deployed via Docker and REST APIs",
    ],
    tags: ["RoBERTa", "NetworkX", "spaCy", "Docker", "GNN"],
    categories: ["knowledge-graph", "nlp"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    period: "May 2025 – Present",
    metrics: [
      { label: "F1", value: "100%" },
      { label: "Docs", value: "1,000+" },
      { label: "Sources", value: "70+" },
    ],
  },
  {
    id: "disaster-llm",
    title: "LLM Fine-Tuning for Disaster Classification",
    subtitle: "BERT · RoBERTa · MLflow · Apache Spark",
    description:
      "Production-grade LLM fine-tuning pipeline on 163K+ labeled disaster tweets with MLflow experiment tracking — core of published NLPIR 2026 research.",
    bullets: [
      "99% classification accuracy — 43% improvement over baseline",
      "MLflow for experiment tracking and model versioning",
      "Co-occurrence metrics (LLR, PMI, DSC) for bias evaluation",
      "Distributed Spark compute for hyperparameter optimization",
    ],
    tags: ["BERT", "RoBERTa", "PyTorch", "MLflow", "Spark"],
    categories: ["nlp", "research"],
    image:
      "https://images.unsplash.com/photo-1527482797694-1417c5b548e5?w=800&q=80",
    period: "Jan 2025 – Aug 2025",
    highlight: "Published NLPIR 2026",
    metrics: [
      { label: "Accuracy", value: "99%" },
      { label: "Posts", value: "163K+" },
      { label: "Over Baseline", value: "+43%" },
    ],
  },
  {
    id: "interpretability",
    title: "Mechanistic Interpretability Framework",
    subtitle: "BERT Attention Analysis · Tensor Masking",
    description:
      "Single-pass O(1)-memory architecture extracting [CLS] attention across all 12 Transformer layers and 144 attention heads — under review at ACL/EMNLP 2026.",
    bullets: [
      "Real-time BERT forward-pass interception with tensor masking",
      "t-SNE clustering, Welch T-test (p<0.0001), induction head mapping",
      "Causal ablation: lexicon masking collapses confidence 99.5% → 2.6%",
      "Second paper under review at ACL/EMNLP/NAACL 2026",
    ],
    tags: ["BERT", "PyTorch", "Interpretability", "Attention"],
    categories: ["research", "nlp"],
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    period: "Jan 2025 – Present",
    highlight: "Under Review",
    metrics: [
      { label: "Layers", value: "12" },
      { label: "Heads", value: "144" },
      { label: "Ablation", value: "99.5→2.6%" },
    ],
  },
  {
    id: "eviction-hub",
    title: "AI-Powered Eviction Data Hub",
    subtitle: "NLP Extraction · Geocoding · Census Enrichment",
    description:
      "End-to-end intelligent pipeline processing 200,000+ eviction court cases with NLP entity extraction, fuzzy matching, ML classification, and Airflow orchestration.",
    bullets: [
      "200,000+ eviction cases with automated geocoding",
      "Census API enrichment for demographic analysis",
      "Airflow DAG orchestration; feeds housing equity research models",
      "PySpark + PostgreSQL + AWS S3 + Power BI stack",
    ],
    tags: ["PySpark", "Airflow", "Census API", "AWS", "Power BI"],
    categories: ["data-engineering", "nlp"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    period: "May 2025 – Aug 2025",
    metrics: [
      { label: "Cases", value: "200K+" },
      { label: "Stack", value: "PySpark" },
      { label: "Orchestration", value: "Airflow" },
    ],
  },
  {
    id: "financial-bi",
    title: "Financial Analytics & BI Platform",
    subtitle: "Python ETL · Firebase · Snowflake · Power BI",
    description:
      "End-to-end financial data platform with Python ETL, Firebase warehousing, predictive analytics, and real-time executive Power BI dashboards.",
    bullets: [
      "Multi-source dataset integration with Python ETL pipelines",
      "Firebase data warehousing + Snowflake analytics layer",
      "Predictive forecasting models for executive decision-making",
      "Real-time API-integrated Power BI dashboards",
    ],
    tags: ["Python", "Firebase", "Snowflake", "Power BI"],
    categories: ["data-engineering"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    period: "Jan 2025 – Apr 2025",
    metrics: [
      { label: "ETL", value: "Python" },
      { label: "Warehouse", value: "Snowflake" },
      { label: "BI", value: "Power BI" },
    ],
  },
  {
    id: "skim",
    title: "SKIM — Field Knowledge Platform",
    subtitle: "Cox Play with Purpose Hackathon 2026",
    description:
      "RAG-based field-knowledge platform for Southern Company Gas with anti-hallucination design. Energy track winner at Cox Enterprises hackathon.",
    bullets: [
      "RAG architecture with grounding and citation requirements",
      "Built for Southern Company Gas field operations",
      "Energy track winner — Cox Play with Purpose Hackathon 2026",
      "Team: Aryan Shrestha, Mustafa Zaidi, Selam Abiye, Divya Gopu",
    ],
    tags: ["RAG", "GenAI", "Hackathon", "Energy"],
    categories: ["nlp"],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    period: "2026",
    highlight: "🏆 Energy Track Winner",
    metrics: [
      { label: "Track", value: "Energy" },
      { label: "Arch", value: "RAG" },
      { label: "Client", value: "SoCo Gas" },
    ],
  },
  {
    id: "rag-legal",
    title: "Production RAG Legal AI Assistant",
    subtitle: "Claude + BERT · AWS EC2",
    description:
      "Production RAG system integrating Claude and BERT with structured legal datasets for real-time intelligent legal query resolution.",
    bullets: [
      "Prompt engineering, embedding retrieval, and context management",
      "99.9% uptime on AWS EC2 production deployment",
      "Structured legal dataset integration for grounded responses",
      "Real-time query resolution for SCALES stakeholders",
    ],
    tags: ["RAG", "Claude", "BERT", "AWS EC2"],
    categories: ["nlp", "knowledge-graph"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    period: "May 2025 – Present",
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Cloud", value: "AWS" },
      { label: "Models", value: "Claude+BERT" },
    ],
  },
];

export const approaches = [
  {
    name: "Live SPARQL via MCP",
    description:
      "Queried SCALES KG directly per-pair. Caught Judge Michael J. McShane under 2 court codes — same judge, sitting by designation. Memory crashes at scale.",
    outcome: "Abandoned as production path; kept as offline ground-truth source.",
  },
  {
    name: "RAG + Claude Fallback",
    description: "FAISS + Claude API for hardest ~5% of ambiguous entity pairs.",
    outcome: "Too slow/costly at 1.28M-case scale. Documented, not in production.",
  },
  {
    name: "Rule-based + Ditto ML + GraphRAG",
    description:
      "Deterministic extraction → Neo4j → 4-layer ER → local Ollama query layer.",
    outcome: "Shipped — this is the production system.",
    shipped: true,
  },
];

export const dittoResults = [
  { pair: "David P. Matthews → David P Matthews", confidence: 0.9996, correct: true },
  { pair: "Curtis Busby → Curtis James Busby", confidence: 0.9972, correct: true },
  { pair: "JOSEPH R. RICE → Joseph F. Rice", confidence: 0.9978, correct: true },
  { pair: "VERNON R. JOHNSON → Ronald G. Johnson", confidence: 0.9638, correct: false },
  { pair: "JAMES E. CULHANE → Daniel James Culhane", confidence: 0.9579, correct: false },
  { pair: "LAWRENCE WEINSTEIN → Jill S Weinstein", confidence: 0.8956, correct: false },
];

export const pipelineStages = [
  {
    step: 1,
    title: "Extraction",
    file: "build_kg_extract.py",
    detail:
      "Rule-based extraction with SHA-256 stable entity IDs, honorific stripping, canonical cross-court nodes, blocklist for non-person attorneys.",
  },
  {
    step: 2,
    title: "Load",
    file: "load_neo4j.py",
    detail: "Idempotent MERGE-based load into Neo4j, Docker on Apple Silicon.",
  },
  {
    step: 3,
    title: "Entity Resolution",
    file: "4-layer ER pipeline",
    detail: "Rule cleanup → blocking by last name → Ditto inference → merge application.",
  },
  {
    step: 4,
    title: "GraphRAG",
    file: "graphrag_ollama.py",
    detail: "Natural-language query layer with local Ollama — zero API cost.",
  },
];

export const graphRagDemo = [
  {
    question: "How many judges are in the Alaska district court?",
    cypher: `MATCH (j:Judge)-[:PRESIDES_OVER]->(c:Court {code: 'akd'})
RETURN count(DISTINCT j) AS total_judges_in_akd`,
    answer: "There are 41 judges in the Alaska district court.",
    note: "Fixed hallucination where model invented '21 judges named Paed'.",
  },
  {
    question: "Which courts did Judge Michael J. McShane preside over?",
    cypher: `MATCH (j:Judge {name: 'Michael J. McShane'})-[:PRESIDES_OVER]->(c:Court)
RETURN c.code, c.name`,
    answer:
      "Judge McShane appears under 2 court codes — same judge sitting by designation.",
    note: "Bug caught by live SPARQL ground-truth validation.",
  },
];

export const caseStudyStatus = [
  { done: true, text: "Full 4-stage pipeline on 1,122-case, 86-court pilot" },
  { done: true, text: "ER errors caught and corrected (3 wrong merges → 0 errors)" },
  { done: true, text: "Local GraphRAG tested and cross-checked against Neo4j" },
  { done: false, text: "Full 1.28M-case scale-up and precision/recall validation" },
];

export const publications = [
  {
    status: "Published",
    citation:
      "Shrestha, A., Yeminedi, N., Kubek, M.M., & Mikler, A.R. (2026). Interpretable Adverse Event Detection Using a Neuro-Symbolic and Graph-Based Approach. NLPIR 2026, Springer.",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80",
  },
  {
    status: "Under Review",
    citation:
      "Yeminedi, N., Shrestha, A., Kubek, M.M., & Mikler, A.R. (2026). Towards Attention-Based Mechanistic Interpretability in Adverse Event Detection. Target: ACL/EMNLP/NAACL 2026.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
];

export const achievements = [
  {
    title: "SKIM — Cox Hackathon Winner",
    org: "Cox Enterprises · Energy Track",
    period: "2026",
    description: "RAG field-knowledge platform for Southern Company Gas.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80",
  },
  {
    title: "NLPIR 2026 Publication",
    org: "Springer · DICE Lab, GSU",
    period: "2026",
    description: "Neuro-symbolic adverse event detection — 99% accuracy, 43% over baseline.",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",
  },
  {
    title: "Leadership Mentor",
    org: "Georgia State University",
    period: "Jan 2025 – Present",
    description: "Peer mentoring for first-year through graduate students.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80",
  },
  {
    title: "AWS Cloud Practitioner",
    org: "Amazon Web Services",
    period: "Sep 2023 – Sep 2026",
    description: "Cloud fundamentals certification.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
  },
  {
    title: "Visa TUSKER Impact",
    org: "Visa Inc. via TCS",
    period: "2022 – 2024",
    description: "$10M+ cost savings, 99.7% pipeline reliability on GFDM project.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80",
  },
  {
    title: "National Service Scheme",
    org: "Volunteer · India",
    period: "Aug 2018 – May 2022",
    description: "Blood drives, rural education, COVID-19 awareness campaigns.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
];
