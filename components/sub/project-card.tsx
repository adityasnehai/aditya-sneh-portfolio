"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiChevronRight } from "react-icons/fi";

type ProjectCardVariant = "featured" | "compact" | "carousel" | "rail" | "stack";
type ProjectCardTone = "violet" | "cyan" | "pink" | "emerald";

type ProjectCardPalette = {
  border: string;
  glow: string;
  pill: string;
  label: string;
};

type ProjectCardProps = {
  index: number;
  src: string;
  videoSrc?: string;
  title: string;
  description: string;
  link: string;
  variant?: ProjectCardVariant;
  tone?: ProjectCardTone;
  tags?: readonly string[];
  isActive?: boolean;
  onSelect?: () => void;
  reverse?: boolean;
};

const PALETTE: Record<ProjectCardTone, ProjectCardPalette> = {
  violet: {
    border: "border-violet-400/35",
    glow: "from-violet-400/35 via-cyan-400/15 to-transparent",
    pill: "border-violet-200/60 text-violet-200 bg-violet-500/15",
    label: "text-violet-200",
  },
  cyan: {
    border: "border-cyan-400/35",
    glow: "from-cyan-400/30 via-blue-400/15 to-transparent",
    pill: "border-cyan-200/60 text-cyan-200 bg-cyan-500/15",
    label: "text-cyan-200",
  },
  pink: {
    border: "border-pink-400/35",
    glow: "from-pink-400/30 via-violet-400/12 to-transparent",
    pill: "border-pink-200/60 text-pink-200 bg-pink-500/15",
    label: "text-pink-200",
  },
  emerald: {
    border: "border-emerald-400/35",
    glow: "from-emerald-400/30 via-cyan-400/12 to-transparent",
    pill: "border-emerald-200/60 text-emerald-200 bg-emerald-500/15",
    label: "text-emerald-200",
  },
};

export const ProjectCard = ({
  index,
  src,
  videoSrc,
  title,
  description,
  link,
  variant = "featured",
  tone = "violet",
  tags = [],
  isActive = false,
  onSelect,
  reverse = false,
}: ProjectCardProps) => {
  const palette = PALETTE[tone];
  const hasVideo = Boolean(videoSrc);
  const videoShellClass = "bg-[#050816]";
  const showProjectBadge = !hasVideo;

  const media = (
    <>
      {videoSrc ? (
        <div className="absolute inset-0 flex items-center justify-center p-3 md:p-4">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={src}
            className="block max-h-full max-w-full object-contain"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      ) : (
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}
    </>
  );

  if (variant === "rail") {
    return (
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.28 }}
        className="h-full"
      >
        <Link
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className={`group relative flex h-full min-h-[300px] overflow-hidden rounded-[26px] border ${palette.border} bg-[rgba(3,0,20,0.50)] hover:shadow-[0_18px_40px_rgba(34,211,238,0.2)] transition`}
        >
          <div className="relative grid h-full w-full grid-cols-1 lg:grid-cols-[1.22fr_1fr]">
            <div
              className={`relative min-h-[190px] overflow-hidden border-r border-white/5 lg:border-r-0 lg:border-b-0 ${
                hasVideo ? videoShellClass : ""
              }`}
            >
              {media}
              {!hasVideo ? (
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${palette.glow}`} />
              ) : null}
              {showProjectBadge ? (
                <span
                  className={`absolute top-3 left-3 inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] ${palette.pill}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  Project {index}
                </span>
              ) : null}
            </div>

            <div className="relative flex flex-col justify-between p-4 md:p-5 space-y-4">
              <div className="space-y-3">
                <h1 className="text-lg md:text-[1.45rem] font-semibold text-white leading-tight">
                  {title}
                </h1>
                <p className="text-sm leading-relaxed text-gray-300">{description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {tags.map((tag) => (
                    <span
                      key={`${tag}-${title}`}
                      className="text-[11px] px-2.5 py-1 rounded-full border border-white/15 text-gray-300 bg-white/[0.03]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <p
                  className={`text-xs ${palette.label} flex items-center gap-2`}
                >
                  Visit repository
                  <FiArrowUpRight className="h-4 w-4" />
                </p>
                <span className={`text-[10px] uppercase tracking-wider ${palette.label}/90`}>
                  Open
                </span>
              </div>
            </div>
          </div>
        </Link>

        <motion.div
          aria-hidden
          className={`pointer-events-none absolute right-4 bottom-4 h-24 w-24 rounded-full border ${palette.border} opacity-45`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.65, 0.4],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "mirror", ease: "easeInOut" }}
        />
      </motion.article>
    );
  }

  if (variant === "stack") {
    return (
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.28 }}
        className="h-full"
      >
        <Link
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className={`group relative overflow-hidden rounded-[22px] border ${palette.border} bg-[rgba(3,0,20,0.5)] hover:shadow-[0_16px_38px_rgba(34,211,238,0.22)] transition`}
        >
          <div
            className={`relative grid gap-0 grid-cols-1 lg:grid-cols-[1.05fr_1fr] ${
              reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
            }`}
          >
            <div
              className={`relative min-h-[220px] lg:min-h-[250px] ${
                hasVideo ? videoShellClass : ""
              }`}
            >
              {media}
              {!hasVideo ? (
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${palette.glow}`} />
              ) : null}
              {showProjectBadge ? (
                <span
                  className={`absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[11px] ${palette.pill}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  Project {index}
                </span>
              ) : null}
            </div>

            <div className="relative p-4 md:p-5 flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <h1 className="text-xl md:text-[1.5rem] leading-tight font-semibold text-white">
                  {title}
                </h1>
                <p className="text-sm leading-relaxed text-gray-300">{description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {tags.map((tag) => (
                    <span
                      key={`${tag}-${title}`}
                      className="text-[11px] px-2.5 py-1 rounded-full border border-white/15 text-gray-300 bg-white/[0.03]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className={`text-xs ${palette.label} flex items-center gap-2`}>
                Explore repository
                <FiArrowUpRight className="h-4 w-4" />
              </p>
            </div>
          </div>

          <motion.div
            aria-hidden
            className={`pointer-events-none absolute right-3 top-3 h-10 w-10 rounded-full border ${palette.border}`}
            animate={{ rotate: [0, 6, -6, 0], scale: [1, 1.03, 1] }}
            transition={{
              duration: 5.2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </Link>
      </motion.article>
    );
  }

  if (variant === "compact") {
    return (
      <motion.button
        type="button"
        onClick={onSelect}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.985 }}
        className={`group relative w-full rounded-2xl border p-3 flex items-center gap-3 text-left transition-all ${
          isActive
            ? "border-cyan-300/70 bg-[rgba(8,22,52,0.85)] shadow-[0_10px_24px_rgba(56,189,248,0.18)]"
            : "border-[#2A0E61] bg-[rgba(3,0,20,0.45)] hover:border-cyan-400/60"
        }`}
      >
        <div className="relative h-14 w-20 rounded-lg overflow-hidden border border-[#4a2d90]/50 shrink-0">
          {videoSrc ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={src}
              className="h-full w-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          ) : (
            <Image src={src} alt={title} fill className="object-cover" />
          )}
          <span className="absolute top-1 left-1 px-1.5 py-0.5 text-[10px] rounded-full border border-cyan-300/40 text-cyan-200 bg-[#070014]/50">
            {index}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold text-white leading-snug">{title}</h3>
          <p className="text-[11px] text-gray-400 mt-1 max-h-[2.6rem] overflow-hidden">
            {description}
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={`${tag}-${index}`}
                className="text-[10px] px-2 py-0.5 rounded-full border border-white/15 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <FiChevronRight className="h-4 w-4 text-cyan-300 shrink-0" />
      </motion.button>
    );
  }

  if (variant === "carousel") {
    return (
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.28 }}
        className="group h-full"
      >
        <Link
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className={`relative overflow-hidden rounded-3xl border ${
            isActive
              ? "border-cyan-300/80 shadow-[0_20px_45px_rgba(56,189,248,0.28)]"
              : "border-[#2A0E61]"
          } bg-[rgba(8,12,26,0.6)] hover:border-cyan-400/70 transition block h-full`}
        >
          <div className="relative">
            <Image
              src={src}
              alt={title}
              width={1200}
              height={650}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
            <span className="absolute top-4 left-4 inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full border border-white/20 text-cyan-200 bg-black/45">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              Project {index}
            </span>
            {isActive && (
              <span className="absolute top-4 right-4 text-[11px] px-2.5 py-1 rounded-full border border-cyan-200/50 text-cyan-100 bg-cyan-500/25 backdrop-blur">
                Highlight
              </span>
            )}
          </div>

          <div className="relative p-5 md:p-6 space-y-4">
            <h1 className="text-xl md:text-2xl font-semibold text-white leading-snug flex items-start gap-2">
              <span>{title}</span>
              <FiArrowUpRight className="h-5 w-5 text-cyan-300 mt-1 shrink-0" />
            </h1>

            <p className="text-sm leading-relaxed text-gray-300">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={`${tag}-${title}`}
                  className="text-[11px] px-2.5 py-1 rounded-full border border-white/15 text-gray-300 bg-white/[0.03]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-xs text-cyan-200 flex items-center gap-2 pt-1">
              Open repository
              <FiArrowUpRight className="h-4 w-4" />
            </p>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group h-full relative"
      transition={{ duration: 0.28 }}
    >
      <Link
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="relative overflow-hidden rounded-2xl border border-[#2A0E61] bg-[rgba(3,0,20,0.45)] hover:border-cyan-400/70 hover:shadow-[0_12px_28px_rgba(112,66,248,0.2)] transition block h-full"
      >
        <div className="relative p-1">
          <div className="grid grid-cols-1 md:grid-cols-[290px_1fr] gap-4 md:gap-5 items-stretch">
            <div className="relative h-56 md:h-auto rounded-xl overflow-hidden border border-[#4a2d90]/50">
              <Image src={src} alt={title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-90" />
              <span className="absolute top-3 left-3 text-[11px] px-2.5 py-1 rounded-full border border-cyan-300/50 text-cyan-200 bg-[#070014]/55">
                Project {index}
              </span>
            </div>

            <div className="relative p-3 md:p-4 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <h1 className="text-2xl font-semibold text-white flex items-start gap-2 leading-tight">
                  <span>{title}</span>
                  <FiArrowUpRight className="h-5 w-5 text-cyan-300 mt-1 shrink-0" />
                </h1>
                <p className="text-gray-300 leading-relaxed text-sm">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={`${tag}-${title}`}
                      className="text-[11px] px-2.5 py-1 rounded-full border border-white/15 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-cyan-200 flex items-center gap-2">
                Visit repository
                <FiArrowUpRight className="h-4 w-4" />
              </p>
            </div>
          </div>
        </div>
      </Link>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-12 -bottom-12 h-32 w-32 rounded-full border border-cyan-400/30 blur-sm"
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 3.8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    </motion.article>
  );
};
