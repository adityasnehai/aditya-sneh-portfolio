import Image from "next/image";
import Link from "next/link";
import { FiBookOpen, FiCalendar, FiFileText, FiGithub, FiLinkedin } from "react-icons/fi";

export const Hero = () => {
  return (
    <section
      id="about-me"
      className="flex min-h-screen scroll-mt-28 items-center px-4 pb-10 pt-32 md:px-8 md:pt-36 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-[1160px] gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.22em] text-black/48 md:text-base">
            AI Engineer &middot; AI Researcher
          </p>

          <h1 className="mt-5 text-6xl font-black text-black md:text-7xl lg:text-8xl">
            Aditya Sneh
          </h1>

          <div className="mt-6 max-w-2xl space-y-2 text-lg leading-8 text-black/78 md:text-xl md:leading-9">
            <p>
              I build AI systems that automate the boring parts of your job,
              and occasionally my own existential crisis.
            </p>
            <p>
              If the model behaves, I call it a product. If it doesn&apos;t,
              I call it research and write a paper about it.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/Aditya_Sneh_Resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-black bg-black px-5 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800"
            >
              <FiFileText className="h-5 w-5" />
              Resume
            </Link>
            <Link
              href="https://arxiv.org/search/cs?searchtype=author&query=Sneh,+A"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-black/12 bg-white/75 px-5 py-3 text-base font-semibold text-black transition hover:-translate-y-0.5 hover:border-black/25 hover:bg-white"
            >
              <FiBookOpen className="h-5 w-5" />
              Research Papers
            </Link>
            <Link
              href="https://calendar.app.google/wvWfY6WAN3jQo5jm9"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-black/12 bg-white/75 px-5 py-3 text-base font-semibold text-black transition hover:-translate-y-0.5 hover:border-black/25 hover:bg-white"
            >
              <FiCalendar className="h-5 w-5" />
              Schedule a Meeting
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="https://www.linkedin.com/in/aditya-sneh/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="inline-flex items-center gap-2 rounded-full border border-black/12 bg-white/75 p-3 text-black transition hover:-translate-y-0.5 hover:border-black/25 hover:bg-white"
              >
                <FiLinkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/adityasnehai"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                title="GitHub"
                className="inline-flex items-center gap-2 rounded-full border border-black/12 bg-white/75 p-3 text-black transition hover:-translate-y-0.5 hover:border-black/25 hover:bg-white"
              >
                <FiGithub className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center lg:justify-end">
          <div className="pointer-events-none absolute inset-6 rounded-full bg-black/[0.04] blur-3xl" />
          <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-full border border-black/12 bg-white shadow-[0_28px_90px_rgba(0,0,0,0.08)]">
            <Image
              src="/hero-right-aditya.png"
              alt="Aditya Sneh portrait"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 500px"
              className="object-cover grayscale contrast-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
