"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { FiExternalLink, FiFileText } from "react-icons/fi";

import { PUBLICATIONS } from "@/constants";

export const Publications = () => {
  const toneClasses = [
    "from-cyan-300/90 to-purple-300/30",
    "from-emerald-300/90 to-cyan-300/30",
    "from-pink-300/90 to-purple-300/30",
    "from-violet-300/90 to-cyan-300/30",
    "from-blue-300/90 to-cyan-300/30",
  ];

  return (
    <section
      id="publications"
      className="relative flex scroll-mt-24 flex-col items-center justify-center overflow-hidden px-6 py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute -left-16 top-12 h-72 w-72 rounded-full bg-purple-500/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-12 bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="relative z-10 w-full max-w-6xl">
        <div className="mb-7 flex flex-col gap-3">
          <h2 className="text-[36px] md:text-[44px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
            Publications
          </h2>
          <p className="text-gray-400 max-w-3xl text-sm md:text-base">
            Research notes, pre-prints, and published contributions from recent work.
          </p>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl rounded-[24px] border border-[#2A0E61] bg-[rgba(7,7,24,0.42)] p-4 md:p-5">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#030014] to-transparent" />

        <div className="relative z-10">
          <div className="grid gap-4 md:grid-cols-2">
            {PUBLICATIONS.map((publication, index) => (
              <motion.article
                key={publication.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-2xl border border-white/10 bg-[rgba(3,0,20,0.45)] hover:border-cyan-400/60 hover:bg-[rgba(8,8,28,0.55)] transition-all overflow-hidden"
              >
                <Link
                  href={publication.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block p-4 md:p-5"
                >
                  <div className="relative flex flex-col">
                    <div
                      className={`mb-4 h-1.5 w-full rounded-full bg-gradient-to-r ${toneClasses[index % toneClasses.length]}`}
                    />
                    <div className="flex items-start justify-between gap-3">
                      <span className="mt-0.5 h-7 w-7 shrink-0 rounded-full border border-cyan-300/50 bg-cyan-500/15 text-cyan-200 flex items-center justify-center">
                        <FiFileText className="h-3.5 w-3.5" />
                      </span>
                      <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
                        {publication.title}
                      </h3>
                      <span className="text-cyan-200/80 shrink-0">
                        <FiExternalLink className="h-4 w-4 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                    <p className="text-gray-300 mt-2 text-xs leading-relaxed">
                      {publication.authors}
                    </p>
                    {publication.snippetImage ? (
                      <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-white p-2">
                        <div className="flex h-[150px] items-start justify-center md:h-[165px]">
                          <img
                            src={publication.snippetImage}
                            alt={`${publication.title} paper figure`}
                            loading="lazy"
                            className="block h-full w-full object-contain object-top"
                          />
                        </div>
                      </div>
                    ) : null}
                    <p className="mt-3 text-sm leading-relaxed text-gray-200 max-h-28 overflow-hidden">
                      {publication.abstract}
                    </p>
                    <div className="mt-4 inline-flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] tracking-wide border border-cyan-400/50 text-cyan-200">
                        {publication.venue}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
