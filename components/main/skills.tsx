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
  Programming: FiCode,
  "Machine Learning & Deep Learning": FiCpu,
  "LLM & Generative AI": FiLayers,
  "Backend & Data": FiServer,
  "Cloud & MLOps": FiCloud,
  "Version Control": FiGitBranch,
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex scroll-mt-24 flex-col items-center justify-center overflow-hidden px-4 py-14 md:px-8 lg:px-12 lg:py-18"
    >
      <div className="relative z-10 w-full max-w-[1160px]">
        <div className="mb-7 flex flex-col gap-3">
          <h2 className="text-[34px] font-semibold text-black md:text-[42px]">
            Tech Stack
          </h2>
          <p className="max-w-2xl text-sm text-black/58 md:text-base">
            Tools and frameworks used across research and production systems.
          </p>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1160px]">
        {SKILL_GROUPS.map((group) => {
          const Icon = GROUP_ICONS[group.title] ?? FiLayers;
          const sortedItems = [...group.items].sort((a, b) => a.localeCompare(b));

          return (
            <div
              key={group.title}
              className="flex flex-col gap-3 border-b border-black/8 py-4 last:border-b-0 md:flex-row md:items-center md:gap-6 md:py-5"
            >
              <h3 className="flex shrink-0 items-center gap-2 text-sm font-semibold text-black md:w-56">
                <Icon className="h-4 w-4 text-black/60" />
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {sortedItems.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-black/10 bg-[#fbfaf7] px-3 py-1 text-sm text-black/68"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
