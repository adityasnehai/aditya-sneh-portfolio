import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

type Project = {
  title: string;
  description: string;
  problem: string;
  approach: string;
  result: string;
  image: string;
  video?: string;
  link: string;
  tags: readonly string[];
};

type Product = {
  title: string;
  tagline: string;
  image: string;
  link: string;
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
    location: "Bhopal, India",
    period: "Aug 2024 - Jul 2025",
    highlights: [
      "Built **LogMe**, a 24/7 Android data-collection app capturing **23,520+ hours** of IMU and smartphone usage data from 70 users using FastAPI and PostgreSQL.",
      "Engineered a Python pipeline for 13 IMU streams, applying filtering, 50-to-40 Hz downsampling, and overlapping 2.5s segmentation to generate **DySTAN** training windows.",
      "Architected DySTAN, a PyTorch CNN-BiLSTM model for sedentary activity and social-context classification, achieving **0.83 joint accuracy**, **18.7% above** the strongest baseline.",
      "Implemented on-device **Thompson Sampling** across 10 activity contexts and 16 interventions, outperforming the 0.5 random baseline in real-world deployment.",
      "Deployed a clinician-informed JITAI with an AIIMS psychiatrist, logging **10,687 prompts** at a **76.4% response rate** for context-aware mental-health interventions.",
    ],
  },
  {
    role: "AI/ML Subject Matter Expert",
    company: "Grades Buddy, Codepedia Solutions Pvt. Ltd.",
    companyLink:
      "https://drive.google.com/file/d/1cJ3Eh36BxnWZ0lVBoNVzgpiDVCJT_19T/view?usp=sharing",
    location: "Remote",
    period: "Apr 2024 - Jul 2024",
    highlights: [
      "Built scikit-learn pipelines in Python across **12K+ samples**, improving macro-F1 by **14%** over baseline.",
      "Trained PyTorch deepfake detectors, applied INT8 quantization, and deployed optimized inference while retaining a **0.88 F1 score**.",
      "Fine-tuned **Llama 2** and **Mistral 7B** with LoRA/PEFT and built embedding-based RAG pipelines, achieving **85% task accuracy and 0.82 faithfulness**.",
      "Containerized and deployed ML models on AWS with Docker, tracking **50+ experiments** through MLflow and automated CI/CD.",
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
    title: "HCFSLN: Adaptive Hyperbolic Few-Shot Learning for Multimodal Anxiety Detection",
    authors: "Aditya Sneh, N. Sahu, A. Adyasha, A. Shelke, H. Lone",
    venue: "ICMI 2026",
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

export const PRODUCTS: readonly Product[] = [
  {
    title: "BloomPilot",
    tagline: "Agentic AI for your plant care.",
    image: "/products/bloompilot.png",
    link: "https://bloompilot.vercel.app/",
  },
  {
    title: "MemoStack",
    tagline: "Multimodal RAG, searchable memory for every team decision.",
    image: "/products/memostack.png",
    link: "https://edms-rag.vercel.app/",
  },
  {
    title: "MindPulse",
    tagline: "On-device LLM fine-tuning, quantization, and safety guardrails.",
    image: "/products/mindpulse.png",
    link: "https://mindpulse-landing-psi.vercel.app/",
  },
  {
    title: "FinMem",
    tagline: "Episodic memory for market research.",
    image: "/products/finmem.png",
    link: "https://finmem.vercel.app/",
  },
] as const;

export const PROJECTS: readonly Project[] = [
  {
    title: "InterviewInsight-AI",
    description:
      "Multimodal mock interview platform that scores video, audio, and transcripts, then turns each session into actionable coaching dashboards and reports.",
    problem:
      "Candidates rehearsing for interviews get generic feedback, not calibrated critique across delivery, content, and body language.",
    approach:
      "Built a multimodal pipeline that scores video (nonverbal cues), audio (prosody and tone), and transcript (content) in parallel, then fuses the signals into one session report.",
    result:
      "A live mock-interview system that turns each session into a per-question coaching dashboard, served with FastAPI and React.",
    image: "/projects/interviewinsight.png",
    video: "/projects/interviewinsight-preview.mp4",
    link: "https://github.com/adityasnehai/InterviewInsight-AI",
    tags: ["Multimodal AI", "Interview Analytics", "FastAPI", "React"],
  },
  {
    title: "VidMetrics",
    description:
      "YouTube competitor analytics tool that surfaces top-performing videos, view trends, and breakout content for faster media decisions.",
    problem:
      "Creators and media strategists can't quickly tell what's actually working for competitors without manually digging through each channel's uploads.",
    approach:
      "Built a YouTube analytics tool where pasting a channel or video URL surfaces top-performing videos, views-per-day trends, format and length mix, and flags \"breakout\" and \"surging\" uploads against the channel's own median.",
    result:
      "A fast competitor-benchmarking dashboard for content decisions, deployed live.",
    image: "",
    link: "https://vidmetrics-two.vercel.app/",
    tags: ["YouTube API", "Analytics", "Next.js"],
  },
  {
    title: "SensorFusion Agent",
    description:
      "AI-first sensor harmonization platform that aligns multi-dataset IMU streams, explains fusion quality, and surfaces drift, confidence, and diagnostics.",
    problem:
      "Multi-dataset IMU streams rarely align cleanly across sensors and sampling rates, and fusion quality is usually a black box.",
    approach:
      "Built an AI-first harmonization pipeline that aligns multi-dataset IMU streams and explains fusion quality, surfacing drift and confidence as first-class diagnostics.",
    result:
      "A sensor-fusion agent you can debug, not just trust, built with FastAPI and Next.js.",
    image: "/projects/sensorfusionagent.png",
    video: "/projects/sensorfusionagent-preview.mp4",
    link: "https://github.com/adityasnehai/SensorFusionAgent",
    tags: ["Sensor Fusion", "Time-Series ML", "FastAPI", "Next.js"],
  },
  {
    title: "NotifSense",
    description:
      "Mobile context intelligence pipeline that learns phone-sensed routines and powers on-device notification decisions with optimized, deployable models.",
    problem:
      "Mobile notification timing is usually static and rule-based, ignoring a user's actual context and routine.",
    approach:
      "Learned phone-sensed routines from mobile sensor data and trained optimized models sized for on-device deployment.",
    result:
      "A mobile context-intelligence pipeline that powers on-device notification decisions, built with PyTorch and deployed to Android.",
    image: "/projects/notifsense.png",
    video: "/projects/notifsense-preview.mp4",
    link: "https://github.com/adityasnehai/notifsense-ml-pipeline",
    tags: ["On-Device ML", "Mobile Sensing", "PyTorch", "Android"],
  },
  {
    title: "PEFT Style-Transfer Lab",
    description:
      "Modular LoRA/QLoRA fine-tuning pipeline for a style-transfer rewrite task, with full interview-ready metrics.",
    problem:
      "Fine-tuning demos are usually black-box toy examples that skip the metrics interviewers actually ask about.",
    approach:
      "Built a modular LoRA/QLoRA fine-tuning pipeline for a style-transfer rewrite task, tracking loss, perplexity, ROUGE-L, token F1, and peak GPU memory across comparable runs.",
    result:
      "A reproducible, GPU-light PEFT lab with clean before/after samples and directly comparable LoRA vs. QLoRA runs.",
    image: "",
    link: "https://github.com/adityasnehai/peft-llm",
    tags: ["LoRA", "QLoRA", "PEFT", "PyTorch"],
  },
  {
    title: "Mini GPT From Scratch",
    description:
      "Decoder-only Transformer trained from scratch in PyTorch, with configurable normal/underfit/overfit training modes.",
    problem:
      "Using pretrained LLMs through an API hides the transformer internals that actually explain model behavior.",
    approach:
      "Built a decoder-only Transformer from scratch in PyTorch, with configurable normal, underfit, and overfit training modes to demonstrate how scaling and generalization actually work.",
    result:
      "A minimal, inspectable GPT implementation that shows exactly how attention and training dynamics shape a language model.",
    image: "",
    link: "https://github.com/adityasnehai/minigpt-from-scratch",
    tags: ["Transformers", "PyTorch", "From Scratch", "NLP"],
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
    title: "Products",
    link: "#products",
  },
  {
    title: "Publications",
    link: "#publications",
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
    title: "Contact",
    link: "#contact",
  },
] as const;
