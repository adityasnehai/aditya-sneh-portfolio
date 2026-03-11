import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

type Project = {
  title: string;
  description: string;
  image: string;
  video?: string;
  link: string;
  tags: readonly string[];
};

type Publication = {
  title: string;
  authors: string;
  venue: string;
  link: string;
  abstract: string;
  snippetImage?: string;
};

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/adityasnehai",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/aditya-sneh/",
  },
] as const;

export const SKILL_GROUPS = [
  {
    title: "Programming",
    items: ["Python", "SQL"],
  },
  {
    title: "Machine Learning & Deep Learning",
    items: [
      "PyTorch",
      "Transformer Architectures",
      "scikit-learn",
      "NLP",
      "Computer Vision",
      "Multimodal Learning"
    ],
  },
  {
    title: "LLM & Generative AI",
    items: [
      "LLMs",
      "Fine-Tuning",
      "LoRA / PEFT",
      "RAG",
      "OpenAI API",
      "LangChain",
      "LlamaIndex",
      "FAISS",
      "Pinecone",
      "Chroma",
      "Prompt Engineering",
      "Agentic Systems"
    ],
  },
  {
    title: "Version Control",
    items: ["Git", "GitHub"],
  },
  {
    title: "Backend & Data",
    items: ["FastAPI", "REST APIs", "Pandas", "NumPy", "MySQL"],
  },
  {
    title: "Cloud & MLOps",
    items: ["AWS", "GCP", "Docker", "CI/CD", "MLflow"],
  },
] as const;

export const EXPERIENCES = [
  {
    role: "Project Junior Research Fellow",
    company: "Systems and Informatics Research Laboratory",
    companyLink: "https://sirl-lab.github.io/team/",
    location: "Bhopal, MP",
    period: "Aug 2024 - Aug 2025",
    highlights: [
      "Built and deployed LogMe, a production-scale 24x7 Android sensing platform collecting 250+ GB data from 70+ participants over 14 days.",
      "Engineered Apache-backed Python REST APIs and MySQL data ingestion pipelines for reliable real-world telemetry.",
      "Developed DySTAN (Dynamic Cross-Stitch + Cross-Task Attention + BiLSTM), reaching 0.852/0.876 macro-F1 with +21.8% over baseline.",
      "Implemented contextual Thompson Sampling bandit optimization and exceeded the 0.5 intervention reward baseline."
    ],
  },
  {
    role: "Gen AI Subject Matter Expert (SME)",
    company: "Grades Buddy",
    companyLink:
      "https://drive.google.com/file/d/1cJ3Eh36BxnWZ0lVBoNVzgpiDVCJT_19T/view?usp=sharing",
    location: "Remote",
    period: "May 2024 - Jul 2024",
    highlights: [
      "Delivered 40+ production-grade GenAI solutions across support automation, document intelligence, and healthcare workflows.",
      "Built and fine-tuned LLaMA 2/3, Mistral 7B, and BERT pipelines for sentiment analysis, contextual generation, and RAG with 85% task accuracy.",
      "Applied LoRA-based PEFT for domain adaptation and improved reliability in LLM systems, including medical chatbot deployments."
    ],
  },
] as const;

export const EDUCATION = [
  {
    degree: "BS-MS in Data Science & Engineering",
    institution:
      "Indian Institute of Science Education and Research (IISER), Bhopal",
    period: "2019 - 2024",
    score: "CPI: 8.06/10",
  },
] as const;

export const PUBLICATIONS: readonly Publication[] = [
  {
    title: "On the Robustness of Iris Presentation Attack Detectors",
    authors: "Aditya Sneh, A. Agarwal",
    venue: "BMVC 2025",
    link: "https://bmva-archive.org.uk/bmvc/2025/assets/workshops/PFATCV/Paper_2/paper.pdf",
    snippetImage: "/publications/iris-paper.png",
    abstract:
      "Evaluation of visual spoofing attacks across varied capture conditions, with a focus on robustness, calibration, and practical attack detection thresholds for real-world biometric systems.",
  },
  {
    title: "HCFSLN: A Hyperbolic Few-Shot Learning Framework for Anxiety Detection",
    authors: "Aditya Sneh, N. Sahu, A. Adyasha, A. Shelke, H. Lone",
    venue: "arXiv 2025 (Under Review)",
    link: "https://arxiv.org/abs/2511.06988",
    snippetImage: "/publications/hcfsln-paper.png",
    abstract:
      "A few-shot anxiety recognition framework that uses hyperbolic embeddings to improve separation in low-resource physiological and audio-visual settings.",
  },
  {
    title: "DySTAN: Joint Modeling of Sedentary Activity and Social Context from Smartphone Sensors",
    authors: "Aditya Sneh, N. Sahu, H. Lone",
    venue: "arXiv 2025 (Under Review)",
    link: "https://arxiv.org/abs/2512.02025",
    snippetImage: "/publications/dystan-paper.png",
    abstract:
      "A smartphone-sensor sequence model linking activity and social context for adaptive health interventions, with joint temporal-spatial feature learning.",
  },
  {
    title:
      "Fairness-Aware Few-Shot Learning for Audio-Visual Stress Detection",
    authors: "A. Shelke, Aditya Sneh, A. Adyasha, H. Lone",
    venue: "arXiv 2025 (Under Review)",
    link: "https://arxiv.org/abs/2511.09039",
    snippetImage: "/publications/fairness-paper.png",
    abstract:
      "A fairness-aware formulation for few-shot stress recognition that balances detection quality across demographic and context shifts in multimodal cues.",
  },
  {
    title:
      "Real-World Receptivity to Adaptive Mental Health Interventions: Findings from an In-the-Wild Study",
    authors: "N. Sahu, Aditya Sneh, H. Lone",
    venue: "arXiv 2025 (Under Review)",
    link: "https://arxiv.org/abs/2508.02817",
    snippetImage: "/publications/realworld-paper.png",
    abstract:
      "An in-the-wild study of intervention acceptance patterns, focusing on adaptive messaging strategies and contextual responsiveness in real user routines.",
  },
] as const;

export const PROJECTS: readonly Project[] = [
  {
    title: "InterviewInsight-AI",
    description:
      "Multimodal mock interview platform that scores video, audio, and transcripts, then turns each session into actionable coaching dashboards and reports.",
    image: "/projects/interviewinsight.png",
    video: "/projects/interviewinsight-preview.mp4",
    link: "https://github.com/adityasnehai/InterviewInsight-AI",
    tags: ["Multimodal AI", "Interview Analytics", "FastAPI", "React"],
  },
  {
    title:
      "EDMS RAG: Enterprise Decision Memory System (Multimodal RAG)",
    description:
      "Enterprise decision memory system that retrieves ADRs, RFCs, incidents, and diagrams to answer questions with grounded evidence and multimodal context.",
    image: "/projects/edms-rag.png",
    video: "/projects/edms-rag-preview.mp4",
    link: "https://github.com/adityasnehai/edms-rag",
    tags: ["Multimodal RAG", "Hybrid Retrieval", "Enterprise Search", "FastAPI"],
  },
  {
    title: "SensorFusion Agent",
    description:
      "AI-first sensor harmonization platform that aligns multi-dataset IMU streams, explains fusion quality, and surfaces drift, confidence, and diagnostics.",
    image: "/projects/sensorfusionagent.png",
    video: "/projects/sensorfusionagent-preview.mp4",
    link: "https://github.com/adityasnehai/SensorFusionAgent",
    tags: ["Sensor Fusion", "Time-Series ML", "FastAPI", "Next.js"],
  },
  {
    title: "NotifSense",
    description:
      "Mobile context intelligence pipeline that learns phone-sensed routines and powers on-device notification decisions with optimized, deployable models.",
    image: "/projects/notifsense.png",
    video: "/projects/notifsense-preview.mp4",
    link: "https://github.com/adityasnehai/notifsense-ml-pipeline",
    tags: ["On-Device ML", "Mobile Sensing", "PyTorch", "Android"],
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Profiles",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/adityasnehai",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/aditya-sneh/",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "adityasneh09@gmail.com",
        icon: null,
        link: "mailto:adityasneh09@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Publications",
    link: "#publications",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;
