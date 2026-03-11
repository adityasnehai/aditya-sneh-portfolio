"use client";

import { motion } from "framer-motion";

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  const railStyles: Array<"violet" | "cyan" | "pink" | "emerald"> = [
    "violet",
    "cyan",
    "pink",
    "emerald",
  ];

  return (
    <section
      id="projects"
      className="relative flex scroll-mt-24 flex-col items-center justify-center overflow-hidden px-6 py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute -left-16 top-4 h-72 w-72 rounded-full bg-purple-500/12 blur-[110px]" />
      <div className="pointer-events-none absolute -right-12 bottom-14 h-72 w-72 rounded-full bg-cyan-500/12 blur-[110px]" />

      <div className="w-full max-w-6xl relative z-10">
        <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-[36px] md:text-[44px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
              Projects
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl relative z-10">
        <div className="mb-4">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/90">
            Flagship Projects
          </p>
        </div>

        <div className="rounded-[28px] border border-[#2A0E61] bg-[rgba(7,7,24,0.42)] p-4 md:p-5 relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#030014] to-transparent" />
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-0 w-12 bg-gradient-to-r from-[#030014] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-0 w-12 bg-gradient-to-l from-[#030014] to-transparent" />

          <div className="relative z-10 space-y-3">
            {PROJECTS.map((project, index) => {
              const tags = project.tags ?? [];

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="rounded-[22px] overflow-hidden border border-white/10"
                >
                  <ProjectCard
                    index={index + 1}
                    src={project.image}
                    videoSrc={project.video}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    variant="stack"
                    tone={railStyles[index % railStyles.length]}
                    tags={tags}
                    reverse={index % 2 === 1}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
