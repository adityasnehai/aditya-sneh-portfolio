import type { IconType } from "react-icons";
import {
  FiCloud,
  FiCode,
  FiCpu,
  FiGitBranch,
  FiLayers,
  FiServer,
} from "react-icons/fi";

import { SKILL_GROUPS } from "@/constants";

const GROUP_ICONS: Record<string, IconType> = {
  Languages: FiCode,
  "Machine Learning & Deep Learning": FiCpu,
  "LLM & Generative AI": FiLayers,
  "Data & Databases": FiServer,
  "Application Development": FiCode,
  "Cloud & MLOps": FiCloud,
};

export const Skills = () => {
  return (
    <section id="skills" className="stack-section neo-grid">
      <div className="stack-inner">
        <header className="stack-heading">
          <span className="stack-eyebrow">THE TOOLS BEHIND THE WORK</span>
          <h2>Tech Stack</h2>
          <p>Tools I use to research, build, and ship.</p>
        </header>
        <div className="stack-layout">
        {SKILL_GROUPS.map((group) => {
          const Icon = GROUP_ICONS[group.title] ?? FiLayers;

          return (
            <article
              key={group.title}
              className="stack-card"
            >
              <div className="stack-card-heading"><span className="stack-card-icon"><Icon /></span><h3>{group.title}</h3></div>
              <div className="stack-chips">
                {[...group.items].sort((a, b) => a.localeCompare(b)).map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          );
        })}
        </div>
        <div className="stack-footer"><span>RESEARCH</span><b>→</b><span>BUILD</span><b>→</b><span>DEPLOY</span><b>→</b><span>IMPACT</span></div>
      </div>
    </section>
  );
};
