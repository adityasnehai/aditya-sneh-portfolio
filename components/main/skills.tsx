"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiServer,
  FiShield,
  FiTool,
  FiUsers,
} from "react-icons/fi";
import {
  SiDocker,
  SiFastapi,
  SiGithub,
  SiGit,
  SiGooglecloud,
  SiLangchain,
  SiMlflow,
  SiMysql,
  SiNumpy,
  SiOpenai,
  SiPandas,
  SiPython,
  SiPytorch,
  SiScikitlearn,
} from "react-icons/si";

import { SkillText } from "@/components/sub/skill-text";
import { SKILL_GROUPS } from "@/constants";

type SkillVisual = {
  icon: IconType;
  color: string;
  glow: string;
};

type GroupVisual = {
  icon: IconType;
  border: string;
  glow: string;
};

const GROUP_VISUALS: Record<string, GroupVisual> = {
  Programming: {
    icon: FiCode,
    border: "border-cyan-400/40",
    glow: "from-cyan-400/30 to-transparent",
  },
  "Machine Learning & Deep Learning": {
    icon: FiCpu,
    border: "border-emerald-400/40",
    glow: "from-emerald-400/25 to-transparent",
  },
  "LLM & Generative AI": {
    icon: FiLayers,
    border: "border-pink-400/40",
    glow: "from-pink-400/25 to-transparent",
  },
  "Backend & Data": {
    icon: FiServer,
    border: "border-blue-400/40",
    glow: "from-blue-400/25 to-transparent",
  },
  "Cloud & MLOps": {
    icon: FiCloud,
    border: "border-amber-400/40",
    glow: "from-amber-400/25 to-transparent",
  },
  "Version Control": {
    icon: FiGitBranch,
    border: "border-slate-300/40",
    glow: "from-slate-300/20 to-transparent",
  },
};

const SKILL_VISUALS: Record<string, SkillVisual> = {
  python: { icon: SiPython, color: "#5aa7ff", glow: "from-blue-400/40 to-cyan-300/10" },
  sql: { icon: FiDatabase, color: "#8fb2ff", glow: "from-indigo-400/35 to-blue-300/10" },
  pytorch: { icon: SiPytorch, color: "#ff9556", glow: "from-orange-400/40 to-rose-300/10" },
  "transformer architectures": {
    icon: FiLayers,
    color: "#e595ff",
    glow: "from-fuchsia-400/35 to-violet-300/10",
  },
  "scikit-learn": {
    icon: SiScikitlearn,
    color: "#ffa34f",
    glow: "from-orange-400/40 to-amber-300/10",
  },
  nlp: { icon: FiCpu, color: "#ffd168", glow: "from-amber-400/40 to-orange-300/10" },
  "computer vision": { icon: FiCpu, color: "#89e1ff", glow: "from-cyan-400/35 to-blue-300/10" },
  "multimodal learning": {
    icon: FiLayers,
    color: "#cfa5ff",
    glow: "from-violet-400/35 to-pink-300/10",
  },
  llms: { icon: FiCpu, color: "#8ea8ff", glow: "from-indigo-400/35 to-cyan-300/10" },
  "fine-tuning": { icon: FiTool, color: "#7cffb8", glow: "from-emerald-400/35 to-cyan-300/10" },
  "lora / peft": {
    icon: FiShield,
    color: "#f9a9ff",
    glow: "from-fuchsia-400/35 to-purple-300/10",
  },
  rag: { icon: FiShield, color: "#ff92cb", glow: "from-pink-400/35 to-cyan-300/10" },
  "openai api": { icon: SiOpenai, color: "#74f2d7", glow: "from-teal-400/35 to-cyan-300/10" },
  langchain: { icon: SiLangchain, color: "#74ffcf", glow: "from-emerald-400/35 to-lime-300/10" },
  llamaindex: { icon: FiLayers, color: "#95dcff", glow: "from-cyan-400/35 to-blue-300/10" },
  "prompt engineering": {
    icon: FiTool,
    color: "#d9adff",
    glow: "from-violet-400/35 to-pink-300/10",
  },
  "agentic systems": {
    icon: FiUsers,
    color: "#9ef9cb",
    glow: "from-emerald-400/35 to-teal-300/10",
  },
  faiss: { icon: FiDatabase, color: "#95baff", glow: "from-blue-400/35 to-indigo-300/10" },
  pinecone: { icon: FiDatabase, color: "#81f3ff", glow: "from-cyan-400/35 to-sky-300/10" },
  chroma: { icon: FiDatabase, color: "#c8a9ff", glow: "from-violet-400/35 to-indigo-300/10" },
  fastapi: { icon: SiFastapi, color: "#63ffc2", glow: "from-emerald-400/35 to-cyan-300/10" },
  "rest apis": { icon: FiServer, color: "#ffd08a", glow: "from-amber-400/35 to-pink-300/10" },
  pandas: { icon: SiPandas, color: "#cba6ff", glow: "from-indigo-400/35 to-violet-300/10" },
  numpy: { icon: SiNumpy, color: "#8fd6ff", glow: "from-blue-400/35 to-cyan-300/10" },
  mysql: { icon: SiMysql, color: "#95c4ff", glow: "from-sky-400/35 to-blue-300/10" },
  aws: { icon: FiCloud, color: "#ffb57e", glow: "from-orange-400/35 to-amber-300/10" },
  gcp: { icon: SiGooglecloud, color: "#95f3de", glow: "from-emerald-400/35 to-cyan-300/10" },
  docker: { icon: SiDocker, color: "#7bc6ff", glow: "from-blue-400/35 to-indigo-300/10" },
  "ci/cd": { icon: FiGitBranch, color: "#83f7e3", glow: "from-cyan-400/35 to-teal-300/10" },
  mlflow: { icon: SiMlflow, color: "#ffaed9", glow: "from-pink-400/35 to-fuchsia-300/10" },
  git: { icon: SiGit, color: "#ffa173", glow: "from-orange-400/35 to-red-300/10" },
  github: { icon: SiGithub, color: "#d0d5de", glow: "from-slate-300/35 to-slate-200/10" },
};

const normalizeSkill = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9/+ -]+/g, "")
    .replace(/\s+/g, " ")
    .trim();

const resolveSkillVisual = (skill: string): SkillVisual => {
  const normalized = normalizeSkill(skill);
  if (SKILL_VISUALS[normalized]) return SKILL_VISUALS[normalized];

  const fuzzy = Object.entries(SKILL_VISUALS).find(([key]) => normalized.includes(key) || key.includes(normalized));
  if (fuzzy) return fuzzy[1];

  return {
    icon: FiLayers,
    color: "#c7d2fe",
    glow: "from-slate-400/35 to-indigo-300/10",
  };
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex scroll-mt-24 flex-col items-center justify-center gap-2 overflow-hidden px-6 py-16 lg:py-20"
    >
      <SkillText />

      <div className="relative z-10 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-cyan-400/25 bg-[rgba(5,9,36,0.55)] p-4 md:p-5"
        >
          <div className="mb-3">
            <h3 className="text-white text-lg font-semibold">Technical Stack</h3>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {SKILL_GROUPS.map((group) => {
              const visual = GROUP_VISUALS[group.title] || {
                icon: FiLayers,
                border: "border-white/20",
                glow: "from-white/10 to-transparent",
              };
              const Icon = visual.icon;
              const sortedItems = [...group.items].sort((a, b) => a.localeCompare(b));

              return (
                <motion.article
                  key={group.title}
                  whileHover={{ y: -2 }}
                  className={`relative overflow-hidden rounded-xl border ${visual.border} bg-[rgba(7,8,29,0.5)] p-3`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${visual.glow} opacity-25`}
                  />
                  <div className="relative z-10">
                    <div className="mb-2">
                      <h4 className="text-sm text-white font-medium inline-flex items-center gap-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/25">
                          <Icon className="h-3.5 w-3.5 text-cyan-200" />
                        </span>
                        {group.title}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {sortedItems.map((skill) => {
                        const skillVisual = resolveSkillVisual(skill);
                        const SkillIcon = skillVisual.icon;

                        return (
                          <motion.span
                            key={skill}
                            whileHover={{ y: -2, scale: 1.02 }}
                            className="group/item relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-[rgba(3,0,20,0.55)] px-3 py-1.5 text-xs"
                          >
                            <span
                              className={`pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r ${skillVisual.glow} opacity-0 transition-opacity group-hover/item:opacity-100`}
                            />
                            <SkillIcon
                              style={{ color: skillVisual.color }}
                              className="relative z-10 h-3.5 w-3.5"
                            />
                            <span className="relative z-10 text-gray-100">{skill}</span>
                          </motion.span>
                        );
                      })}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-violet-500/10 blur-[100px]" />
      </div>
    </section>
  );
};
