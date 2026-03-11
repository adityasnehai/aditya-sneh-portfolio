"use client";

import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import {
  FiCalendar,
  FiCheckCircle,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiVolume2,
  FiVolumeX,
} from "react-icons/fi";

import {
  slideInFromLeft,
  slideInFromRight,
} from "@/lib/motion";

export const HeroContent = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.muted = true;
    void video.play();
  }, []);

  const toggleVideoAudio = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    if (!nextMuted) {
      void video.play();
    }
    setIsMuted(nextMuted);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="z-[20] mx-auto flex w-full max-w-6xl flex-col-reverse items-center justify-center gap-8 px-6 pb-12 pt-28 md:px-8 lg:flex-row lg:gap-12 lg:px-8 lg:pb-16 lg:pt-36"
    >
      <div className="h-full w-full max-w-3xl flex flex-col gap-5 justify-center text-center lg:text-left">
        <motion.div
          variants={slideInFromLeft(0.35)}
          className="flex flex-wrap items-center justify-center lg:justify-start gap-2"
        >
          <span className="inline-flex items-center rounded-full border border-cyan-400/35 bg-[rgba(3,0,20,0.5)] px-4 py-1 text-xs tracking-[0.2em] uppercase text-cyan-200">
            AI Engineer
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/45 bg-emerald-500/15 px-3 py-1 text-xs text-emerald-200">
            <FiCheckCircle className="h-3.5 w-3.5" />
            Open to AI Engineer roles
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 mt-2 text-white w-auto h-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Aditya Sneh
          </h1>
          <span className="text-2xl md:text-4xl font-semibold leading-tight">
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              reliable AI products
            </span>{" "}
            that deliver measurable value.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-300 my-4 max-w-[680px] mx-auto lg:mx-0"
        >
          I design and ship end-to-end AI products across LLM applications,
          mobile sensing, and production ML pipelines.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(0.9)}
          className="flex flex-wrap justify-center lg:justify-start gap-3 max-w-[720px]"
        >
          <a
            href="/Aditya_Sneh_Resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-sm text-white px-4 py-2 rounded-full border border-purple-300/55 bg-purple-500/15 hover:bg-purple-500/25 hover:border-purple-200 transition"
          >
            <FiFileText className="h-4 w-4 text-purple-100" />
            Resume
          </a>
          <a
            href="https://calendly.com/adityasneh09/30min"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-sm text-white px-4 py-2 rounded-full border border-cyan-300/60 bg-cyan-500/15 hover:bg-cyan-500/25 hover:border-cyan-200 transition"
          >
            <FiCalendar className="h-4 w-4 text-cyan-200" />
            Schedule a Meeting
          </a>
          <a
            href="mailto:adityasneh09@gmail.com"
            className="flex items-center gap-2 text-sm text-gray-200 px-3 py-2 rounded-full border border-[rgba(112,66,248,0.45)] bg-[rgba(3,0,20,0.55)] hover:border-cyan-400 transition"
          >
            <FiMail className="h-4 w-4 text-cyan-300" />
            adityasneh09@gmail.com
          </a>
          <a
            href="https://github.com/adityasnehai"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-sm text-gray-200 px-3 py-2 rounded-full border border-[rgba(112,66,248,0.45)] bg-[rgba(3,0,20,0.55)] hover:border-cyan-400 transition"
          >
            <FiGithub className="h-4 w-4 text-cyan-300" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-sneh/"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-sm text-gray-200 px-3 py-2 rounded-full border border-[rgba(112,66,248,0.45)] bg-[rgba(3,0,20,0.55)] hover:border-cyan-400 transition"
          >
            <FiLinkedin className="h-4 w-4 text-cyan-300" />
            LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="relative flex h-full w-full max-w-[460px] items-center justify-center lg:max-w-[620px]"
      >
        <div className="pointer-events-none absolute left-6 top-14 h-32 w-32 rounded-full bg-cyan-400/18 blur-3xl" />
        <div className="pointer-events-none absolute right-4 top-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-14 bottom-8 h-20 rounded-full bg-cyan-500/15 blur-3xl" />

        <div className="relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,18,39,0.78)_0%,rgba(5,10,24,0.58)_100%)] shadow-[0_30px_80px_rgba(8,8,24,0.48)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_76%_16%,rgba(168,85,247,0.16),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0)_38%)]" />
          <div className="relative flex items-center justify-center px-4 pb-6 pt-7 lg:px-6 lg:pb-8 lg:pt-9">
            <div className="pointer-events-none absolute inset-x-10 top-16 h-[70%] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.26)_0%,rgba(96,165,250,0.16)_34%,rgba(168,85,247,0.14)_52%,rgba(17,24,39,0)_72%)] blur-3xl" />
            <div className="pointer-events-none absolute inset-x-0 bottom-4 h-28 bg-[linear-gradient(180deg,rgba(3,0,20,0)_0%,rgba(3,0,20,0.22)_50%,rgba(3,0,20,0.72)_100%)]" />
            <video
              ref={videoRef}
              key="/hero-right-aditya-alpha.webm"
              autoPlay
              muted
              playsInline
              preload="auto"
              poster="/hero-right-aditya-poster.png"
              controls={false}
              className="relative z-10 h-auto max-h-[560px] w-full rounded-[24px] bg-transparent select-none object-contain drop-shadow-[0_24px_54px_rgba(112,66,248,0.28)] [mask-image:linear-gradient(to_bottom,black_92%,transparent_100%)]"
            >
              <source
                src="/hero-right-aditya-alpha.webm"
                type='video/webm; codecs="vp9,opus"'
              />
              <source
                src="/hero-right-aditya-web-audio.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <button
              type="button"
              onClick={toggleVideoAudio}
              aria-pressed={!isMuted}
              aria-label={isMuted ? "Enable hero video sound" : "Mute hero video sound"}
              className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[rgba(3,0,20,0.72)] px-3 py-1.5 text-xs text-gray-100 shadow-[0_10px_30px_rgba(3,0,20,0.35)] backdrop-blur-md transition hover:border-cyan-400/60 hover:bg-[rgba(3,0,20,0.82)]"
            >
              {isMuted ? (
                <FiVolumeX className="h-4 w-4 text-cyan-300" />
              ) : (
                <FiVolume2 className="h-4 w-4 text-cyan-300" />
              )}
              {isMuted ? "Tap for sound" : "Mute"}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
