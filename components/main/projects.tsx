"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative flex scroll-mt-24 flex-col items-center justify-center overflow-hidden px-4 py-14 md:px-8 lg:px-12 lg:py-18"
    >
      <div className="relative z-10 w-full max-w-[1160px]">
        <div className="mb-6 flex flex-col gap-3">
          <h2 className="text-[34px] font-semibold text-black md:text-[42px]">
            Projects
          </h2>
          <p className="max-w-2xl text-sm text-black/58 md:text-base">
            Open-source builds and applied ML systems, from research code to deployable pipelines.
          </p>
        </div>
      </div>

      <div className="relative z-10 overflow-hidden rounded-2xl border border-black/10 bg-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.04)] w-full max-w-[1160px]">
        {PROJECTS.map((project, index) => (
          <Link
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center gap-4 border-b border-black/8 px-5 py-4 transition last:border-b-0 hover:bg-[#fbfaf7] md:px-6 md:py-5"
          >
            <span className="shrink-0 text-sm tabular-nums text-black/30">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="min-w-0 flex-1">
              <h3 className="text-base font-semibold leading-snug text-black md:text-lg">
                {project.title}
              </h3>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={`${tag}-${project.title}`}
                    className="rounded-full border border-black/10 bg-[#fbfaf7] px-2 py-0.5 text-[11px] text-black/55"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <FiArrowUpRight className="h-4 w-4 shrink-0 text-black/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black/60" />
          </Link>
        ))}
      </div>
    </section>
  );
};
