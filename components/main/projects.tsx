import type { CSSProperties } from "react";
import { FiArrowRight, FiBarChart2, FiCode, FiExternalLink, FiGitBranch, FiGithub, FiMessageSquare, FiRadio, FiSmartphone } from "react-icons/fi";
import { PROJECTS } from "@/constants";

const notes = [
  { category: "MULTIMODAL", color: "#f5b4a8", ink: "#a93432", icon: FiMessageSquare, copy: "Scores interview video, audio, and transcripts to turn practice sessions into actionable feedback." },
  { category: "ANALYTICS", color: "#f6df87", ink: "#916806", icon: FiBarChart2, copy: "Surfaces top-performing videos, view trends, and breakout content for YouTube competitor research." },
  { category: "SENSING", color: "#a7d5bc", ink: "#226849", icon: FiRadio, copy: "Aligns multi-dataset IMU streams and explains fusion quality, drift, and confidence." },
  { category: "ON-DEVICE", color: "#f5b4a8", ink: "#a93432", icon: FiSmartphone, copy: "Learns phone-sensed routines to power context-aware notification decisions on Android." },
  { category: "FINE-TUNING", color: "#acd3ed", ink: "#236b9d", icon: FiCode, copy: "A reproducible LoRA / QLoRA lab for text style transfer, with comparable training runs and evaluations." },
  { category: "TRANSFORMERS", color: "#a7d5bc", ink: "#226849", icon: FiGitBranch, copy: "A decoder-only GPT built in PyTorch to explore attention, training, and generalization from scratch." },
];

function ProjectNote({ index }: { index: number }) {
  const project = PROJECTS[index];
  const note = notes[index];
  const Icon = note.icon;
  const repository = project.link.startsWith("https://github.com/");
  return <article className={`lab-note lab-note-${index}`} style={{ "--note-color": note.color, "--note-ink": note.ink } as CSSProperties}>
    <span className="lab-note-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
    <div className="lab-note-content">
    <div className="lab-note-meta"><span><Icon aria-hidden="true" />{note.category}</span></div>
    <h3>{project.title}</h3>
    <div className="lab-note-body"><p>{note.copy}</p></div>
    <ul className="lab-note-tags" aria-label="Technologies">{project.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
    </div>
    <a className="lab-note-link" href={project.link} target="_blank" rel="noreferrer noopener" aria-label={`${repository ? "View repository" : "Open live project"}: ${project.title} (opens in new tab)`}>
      {repository ? <FiGithub aria-hidden="true" /> : <FiExternalLink aria-hidden="true" />}
      {repository ? "View on GitHub" : "View live project"}<FiArrowRight aria-hidden="true" />
    </a>
  </article>;
}

export const Projects = () => (
  <section id="projects" className="lab-section neo-grid" aria-labelledby="lab-heading">
    <div className="lab-inner">
      <header className="lab-heading">
        <span className="lab-eyebrow">CODE & EXPERIMENTS</span>
        <h2 id="lab-heading">GitHub Projects</h2>
        <p>A closer look at how I build: multimodal models, sensing pipelines, and LLM experiments.</p>
      </header>
      <div className="lab-board">
        {PROJECTS.map((project,index)=><ProjectNote key={project.title} index={index}/>) }
      </div>
    </div>
  </section>
);
