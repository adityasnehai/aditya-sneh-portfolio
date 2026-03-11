"use client";

import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiExternalLink,
  FiMapPin,
} from "react-icons/fi";

import { EXPERIENCES } from "@/constants";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative flex scroll-mt-24 flex-col items-center justify-center overflow-hidden px-6 py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute -left-36 -top-10 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-[36px] md:text-[44px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 pb-3 relative z-10"
      >
        Work Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
        viewport={{ once: true }}
        className="text-gray-400 max-w-3xl text-sm md:text-base text-center relative z-10 mb-8"
      >
        A timeline view of ML systems and product work across research and
        industry.
      </motion.p>

      <div className="w-full max-w-6xl relative z-10">
        <div className="relative">
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/0 via-cyan-400/70 to-cyan-400/0 md:left-1/2" />

          <div className="space-y-8 md:space-y-10">
            {EXPERIENCES.map((experience, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.article
                  key={`${experience.role}-${experience.company}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.25 }}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                >
                  <span className="absolute left-[18px] top-7 z-20 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-cyan-100 bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.8)] md:left-1/2" />

                  <div
                    className={`ml-10 rounded-2xl border border-[#2A0E61] bg-[rgba(3,0,20,0.5)] p-6 backdrop-blur-sm transition-transform hover:-translate-y-1 hover:border-cyan-400/45 md:ml-0 ${
                      isLeft ? "md:mr-10" : "md:col-start-2 md:ml-10"
                    }`}
                  >
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                        <FiBriefcase className="h-5 w-5 text-cyan-300" />
                        {experience.role}
                      </h2>
                      <div className="flex items-center gap-2 text-gray-300">
                        <p>{experience.company}</p>
                        {"companyLink" in experience ? (
                          <a
                            href={experience.companyLink}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${experience.company} certificate`}
                            className="text-cyan-300 transition-colors hover:text-cyan-200"
                          >
                            <FiExternalLink className="h-4 w-4" />
                          </a>
                        ) : null}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="flex items-center gap-1 text-cyan-300/95">
                          <FiCalendar className="h-4 w-4" />
                          {experience.period}
                        </span>
                        <span className="flex items-center gap-1 text-gray-300">
                          <FiMapPin className="h-4 w-4" />
                          {experience.location}
                        </span>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-2 text-gray-200">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <FiCheckCircle className="h-4 w-4 text-cyan-300 mt-1 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
