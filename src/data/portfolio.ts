import { asset } from "../utils/asset";

export const personal = {
  name: "Nikhil Yeminedi",
  roles: [
    "AI/ML Research Engineer",
    "Machine Learning Engineer",
    "Deep Learning Researcher",
  ],
  summary:
    "AI/ML Research Engineer with 3.5+ years of production experience building and evaluating machine learning systems — fine-tuning transformers, mechanistic interpretability, and large-scale data pipelines across fintech, legal-tech, and academic research.",
  tagline:
    "From fault-tolerant financial pipelines at Visa to published research that opens the black box of AI — transformer fine-tuning, mechanistic interpretability, and ML systems at scale.",
  location: "Atlanta, GA",
  email: "nikhilgoudyeminedi@gmail.com",
  phone: "(404) 203-8442",
  address: "Atlanta, GA 30324",
  linkedin: "https://www.linkedin.com/in/nikhil-yeminedi-184576217/",
  github: "https://github.com/nikhilgoud003",
  scholar: "https://scholar.google.com/citations?user=nikhil-yeminedi",
  profileImage: asset("assets/profile.jpg"),
};

export type Education = {
  degree: string;
  school: string;
  period: string;
  location: string;
  detail: string;
  image: string;
  campusImage?: string;
  highlights?: string[];
};

export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  image: string;
  summary: string;
  context: string;
  tags: string[];
  bullets: string[];
};

export type Publication = {
  status: string;
  title: string;
  description: string;
  citation: string;
  image: string;
  venue?: string;
};

export const stats = [
  { value: 3.5, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "M+", label: "PACER Records Processed" },
  { value: 2, suffix: "", label: "Research Publications" },
  { value: 99, suffix: "%", label: "BERT Classifier Accuracy" },
];

export const about = `I'm an AI/ML Research Engineer at SCALES (Georgia State University) and a Graduate Research Assistant, building and evaluating machine learning systems on large-scale real-world data — from transformer fine-tuning and mechanistic interpretability to production pipelines that process millions of records. I care about work that's honestly evaluated: I'd rather show a model's failure mode and how I fixed it than hide it.

Along the way I've applied NLP, knowledge graphs, and RAG where they fit — entity resolution on federal court records, attention analysis inside BERT, and local GraphRAG over Neo4j — but the through-line is AI/ML engineering and research at scale.

Before this, I spent 2.5+ years as a Data Engineer at Visa (via TCS), building ETL pipelines and credit-risk analytics on millions of daily transactions.`;

export const education: Education[] = [
  {
    degree: "M.S. Computer Science",
    school: "Georgia State University",
    period: "Jan 2025 – Aug 2026",
    location: "Atlanta, GA",
    detail: "GPA: 4.0/4.0 — Graduate Research Assistant at SCALES & DICE Lab",
    image: asset("assets/education/gsu.jpg"),
    campusImage: asset("assets/education/gsu-campus.jpg"),
    highlights: [
      "Research focus: NLP, knowledge graphs, mechanistic interpretability",
      "Published at NLPIR 2026 (Springer); 2nd paper under review",
      "Leadership Mentor for first-year through graduate students",
    ],
  },
  {
    degree: "B.Tech Computer Science & Engineering",
    school: "Jawaharlal Nehru Technological University, Kakinada",
    period: "Jul 2018 – Jun 2022",
    location: "Kakinada, India",
    detail: "GPA: 8.3/10 — First Class with Distinction",
    image: asset("assets/education/jntuk.png"),
    campusImage: asset("assets/education/jntuk-campus.jpg"),
    highlights: [
      "National Service Scheme volunteer — 3+ years of community leadership",
      "Foundation in algorithms, distributed systems, and software engineering",
      "Certified Programmer in Java — IIT Kharagpur",
    ],
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

export const experience: ExperienceItem[] = [
  {
    title: "AI/ML Research Engineer",
    company: "SCALES — Georgia State University",
    location: "Atlanta, GA",
    period: "May 2025 – Present",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
    summary: "Graduate Research Assistant — legal data & AI at national scale",
    context:
      "I'm an AI/ML Research Engineer at SCALES (Georgia State University) and a Graduate Research Assistant, building and evaluating ML systems on millions of federal court records — fine-tuning transformers for entity resolution, mechanistic interpretability inside BERT, and production RAG pipelines. NLP, knowledge graphs, and GraphRAG are tools I reach for when the problem calls for them.",
    tags: ["Graduate RA", "AI/ML", "Federal Court Data", "NLP", "Knowledge Graphs"],
    bullets: [
      "Fine-tuned RoBERTa Entity Resolution (Ditto) on 1,000+ legal documents from 70+ source types — 100% F1, 99.9% record-linkage accuracy",
      "Built spaCy NER microservices processing 15M+ PACER records — 24% precision improvement, 98% entity-resolution accuracy",
      "Constructed multi-entity knowledge graph (1,600+ mentions → 1,190 unique entities) via Union-Find clustering; multi-key blocking reduced comparisons 95%",
      "Built production RAG legal AI assistant (Claude + BERT) — 99.9% uptime on AWS EC2",
      "Power BI dashboards with 100% stakeholder adoption; led civic-tech hackathon eviction-prediction workstream",
    ],
  },
  {
    title: "AI Research Engineer",
    company: "DICE Lab — Georgia State University",
    location: "Atlanta, GA",
    period: "Jan 2025 – Dec 2025",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    summary: "Disaster informatics & mechanistic interpretability research",
    context:
      "DICE Lab (Disaster Informatics and Computational Epidemiology) at GSU uses NLP and AI to detect and analyze disaster events from social media and news. I built fine-tuning pipelines, interpretability frameworks, and full-stack apps powering the lab's published and under-review research.",
    tags: ["BERT", "Interpretability", "NLPIR 2026", "Flask", "PyTorch"],
    bullets: [
      "Fine-tuned BERT on 163K+ posts for disaster detection — 99% accuracy (43% over baseline); published NLPIR 2026 (Springer)",
      "Mechanistic interpretability: O(1)-memory tensor masking across 12 layers / 144 attention heads — 2nd paper under review (ACL/EMNLP/NAACL 2026)",
      "t-SNE clustering, Welch's T-test (p<0.0001), induction head mapping; causal ablation collapses confidence 99.5% → 2.6%",
      "Full-stack disaster informatics app (Flask + React + PostgreSQL) with NOAA datasets — 70% less manual analysis",
    ],
  },
  {
    title: "Data & ML Engineer",
    company: "Visa Inc. (via Tata Consultancy Services)",
    location: "Bengaluru, India",
    period: "Jul 2022 – Dec 2024",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    summary: "Enterprise fintech pipelines & credit-risk ML at scale",
    context:
      "Embedded with Visa's Global Federated Data Mart (GFDM) team at TCS — maintaining distributed systems processing millions of daily financial transactions. Work spanned automated ETL/ELT, ML anomaly detection, credit risk forecasting, and the TUSKER project ($10M+ savings).",
    tags: ["Spark", "Hadoop", "Snowflake", "Power BI", "Jenkins"],
    bullets: [
      "ML for anomaly detection and credit risk on millions of daily transactions — 28% faster, 99.7% reliability, $10M+ TUSKER savings",
      "30+ production ETL/ELT pipelines (Python, Spark, Hadoop, Databricks) — 42% faster integration, 60% less manual effort",
      "DistCP/Sqoop migrations; Jenkins CI/CD + Docker — 97% deployment success; Power BI + Snowflake dashboards",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Steed 26 Solutions Pvt. Ltd.",
    location: "Hyderabad, India (Remote)",
    period: "Mar 2021 – Jun 2022",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    summary: "Healthcare HRMS for 1,000+ concurrent users",
    context:
      "Led front-end and API integration for Steed 26's Hospital Records Management System — responsive interfaces, RESTful services, and interactive clinical dashboards for healthcare data workflows.",
    tags: ["Java", "JavaScript", "REST APIs", "D3.js", "Agile"],
    bullets: [
      "HRMS for 1,000+ concurrent users — 55% faster retrieval, 30% faster page loads",
      "95%+ code quality via Agile Scrum, Git, QA automation; D3.js and Chart.js dashboards",
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
    image: asset("assets/projects/disaster-llm.jpg"),
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

export const publications: Publication[] = [
  {
    status: "Published",
    title: "Interpretable Adverse Event Detection Using a Neuro-Symbolic and Graph-Based Approach",
    description:
      "Neuro-symbolic framework combining fine-tuned BERT with graph-based co-occurrence validation for disaster tweet classification — 99% accuracy, 43% over baseline on 163K+ posts.",
    venue: "NLPIR 2026 · Springer",
    citation:
      "Shrestha, A., Yeminedi, N., Kubek, M.M., & Mikler, A.R. (2026). Interpretable Adverse Event Detection Using a Neuro-Symbolic and Graph-Based Approach. Proceedings of NLPIR 2026. Springer.",
    image: asset("assets/publications/nlpir-2026.jpg"),
  },
  {
    status: "Under Review",
    title: "Towards Attention-Based Mechanistic Interpretability in Adverse Event Detection",
    description:
      "Opens the black box of BERT for disaster detection — single-pass O(1)-memory architecture mapping attention across 12 layers × 144 heads, with causal ablation proving lexicon tokens drive 99.5% of model confidence.",
    venue: "Target: ACL / EMNLP / NAACL 2026",
    citation:
      "Yeminedi, N., Shrestha, A., Kubek, M.M., & Mikler, A.R. (2026). Towards Attention-Based Mechanistic Interpretability in Adverse Event Detection. DICE Lab, GSU.",
    image: asset("assets/publications/transformer-architecture.jpg"),
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
