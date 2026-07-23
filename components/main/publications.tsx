"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import { PUBLICATIONS } from "@/constants";

export const Publications = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = PUBLICATIONS[activeIndex];

  return (
    <section
      id="publications"
      className="relative flex scroll-mt-28 flex-col items-center justify-center overflow-hidden px-4 py-14 md:px-8 lg:px-12 lg:py-18"
    >
      <div className="relative z-10 w-full max-w-[1160px]">
        <div className="mb-7 flex flex-col gap-3">
          <h2 className="text-[34px] font-semibold text-black md:text-[42px]">
            Publications
          </h2>
          <p className="max-w-2xl text-sm text-black/58 md:text-base">
            Research notes, pre-prints, and published contributions from recent work.
          </p>
        </div>
      </div>

      <div className="relative z-10 grid w-full max-w-[1160px] items-start gap-6 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="mb-2 text-xs text-black/40">Hover or tap a title to preview</p>
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
          {PUBLICATIONS.map((publication, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={publication.title}
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`group flex w-full items-start gap-4 border-b border-black/8 px-5 py-4 text-left transition last:border-b-0 md:px-6 md:py-5 ${
                  isActive ? "bg-[#fbfaf7]" : "bg-transparent hover:bg-[#fbfaf7]/60"
                }`}
              >
                <span
                  className={`mt-0.5 shrink-0 text-sm tabular-nums ${
                    isActive ? "text-black/70" : "text-black/30"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <h3
                    className={`text-base font-semibold leading-snug transition md:text-lg ${
                      isActive ? "text-black" : "text-black/75"
                    }`}
                  >
                    {publication.title}
                  </h3>
                  <p className="mt-1 text-xs text-black/45 md:text-sm">
                    {publication.venue} &middot; {publication.authors}
                  </p>
                </div>

                <FiArrowUpRight
                  className={`mt-1 h-4 w-4 shrink-0 transition ${
                    isActive
                      ? "translate-x-0 opacity-100 text-black/60"
                      : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                  }`}
                />
              </button>
            );
          })}
          </div>
        </div>

        <div className="min-h-[320px] overflow-hidden rounded-2xl border border-black/10 bg-[#fbfaf7] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.04)] md:sticky md:top-28 md:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] tracking-wide text-black/65">
                {active.venue}
              </span>

              <h3 className="mt-4 text-xl font-semibold leading-tight text-black md:text-2xl">
                {active.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-black/55 md:text-sm">
                {active.authors}
              </p>

              {active.snippetImage ? (
                <div className="mt-4 overflow-hidden rounded-xl border border-black/10 bg-white p-2">
                  <div className="flex h-[140px] items-start justify-center md:h-[160px]">
                    <img
                      src={active.snippetImage}
                      alt={`${active.title} paper figure`}
                      loading="lazy"
                      className="block h-full w-full object-contain object-top"
                    />
                  </div>
                </div>
              ) : null}

              <p className="mt-4 text-sm leading-relaxed text-black/75">
                {active.abstract}
              </p>

              <Link
                href={active.link}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-black transition hover:gap-3"
              >
                Read paper
                <FiArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
