import { Fragment } from "react";

import { FiBriefcase, FiCalendar, FiExternalLink, FiMapPin } from "react-icons/fi";

import { EXPERIENCES } from "@/constants";

const renderHighlight = (text: string) => {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-black">
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
};

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative flex scroll-mt-28 flex-col items-center justify-center overflow-hidden px-4 py-14 md:px-8 lg:px-12 lg:py-18"
    >
      <div className="relative z-10 w-full max-w-[1160px]">
        <div className="mb-7 flex flex-col gap-3">
          <h2 className="text-[34px] font-semibold text-black md:text-[42px]">
            Work Experience
          </h2>
          <p className="max-w-2xl text-sm text-black/58 md:text-base">
            ML systems and product work across research and industry.
          </p>
        </div>
      </div>

      <div className="relative z-10 grid w-full max-w-[1160px] gap-5 md:grid-cols-2 md:items-start">
        {EXPERIENCES.map((experience) => (
          <article
            key={`${experience.role}-${experience.company}`}
            className="rounded-2xl border border-black/10 bg-white/65 p-6 transition hover:-translate-y-1 hover:border-black/20 md:p-7"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold text-black md:text-2xl">
              <FiBriefcase className="h-5 w-5 shrink-0 text-black/70" />
              {experience.role}
            </h3>

            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-black/65 md:text-base">
              <span>{experience.company}</span>
              {"companyLink" in experience ? (
                <a
                  href={experience.companyLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${experience.company} certificate`}
                  className="text-black/45 transition-colors hover:text-black"
                >
                  <FiExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-black/55">
              <span className="flex items-center gap-1">
                <FiCalendar className="h-3.5 w-3.5" />
                {experience.period}
              </span>
              <span className="flex items-center gap-1">
                <FiMapPin className="h-3.5 w-3.5" />
                {experience.location}
              </span>
            </div>

            <ul className="mt-4 space-y-2.5 text-base leading-relaxed text-black/75">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-black/40" />
                  <span>{renderHighlight(highlight)}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
