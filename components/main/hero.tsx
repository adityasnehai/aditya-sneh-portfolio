import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiFileText, FiVideo } from "react-icons/fi";

export const Hero = () => (
  <section id="about-me" className="portfolio-hero neo-grid flex min-h-screen scroll-mt-24 items-center border-b-2 border-black px-6 pb-16 pt-32 md:px-8 lg:pb-20 lg:pt-36">
    <div className="mx-auto grid w-full max-w-[1440px] gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
      <div className="max-w-3xl">
        <div className="neo-label mb-8 w-fit bg-white"><span className="mr-2 inline-block h-3 w-3 rounded-full bg-[#d13f64]" />APPLIED AI ENGINEER</div>
        <h1 className="max-w-[820px] text-6xl font-black leading-[0.91] tracking-[-0.07em] text-black">I build useful <span className="neo-highlight mx-1 inline-block -rotate-2 bg-[#f2c04c] px-2">AI products</span> for real problems.</h1>
        <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-black/75 md:text-xl">My favorite workflow: find the problem, build the thing, test the weird edge cases.</p>
        <div className="mt-9 flex flex-wrap gap-3"><Link href="/Aditya_Sneh_Resume.pdf" target="_blank" rel="noreferrer noopener" className="neo-button bg-[#d13f64] text-white"><FiFileText aria-hidden="true" /> Resume <FiArrowUpRight aria-hidden="true" /></Link><Link href="https://calendar.app.google/wvWfY6WAN3jQo5jm9" target="_blank" rel="noreferrer noopener" aria-label="Book a Google Meet call (opens in a new tab)" className="neo-button bg-[#8edfd2]"><FiVideo aria-hidden="true" /> Book a call <FiArrowUpRight aria-hidden="true" /></Link></div>
      </div>

      <div className="relative mx-auto w-full max-w-[520px]">
        <div className="mb-4 flex min-h-16 items-center justify-between gap-4">
          <p className="border-2 border-black bg-[#f2c04c] px-4 py-3 text-xs font-bold tracking-wider shadow-[4px_4px_0_#111] sm:text-sm">RESEARCH · BUILD · DEPLOY</p>
          <div className="paper-butterfly" aria-hidden="true">
            <svg viewBox="0 0 100 80" width="80" height="64" fill="none">
              <g className="paper-wing paper-wing-left"><path d="M50 43 7 9 16 53 45 62Z" fill="#f2c04c" stroke="#111" strokeWidth="2" /><path d="M7 9 50 43 16 53" fill="#fff8e9" stroke="#111" strokeWidth="2" /></g>
              <g className="paper-wing paper-wing-right"><path d="M50 43 93 9 84 53 55 62Z" fill="#d13f64" stroke="#111" strokeWidth="2" /><path d="M93 9 50 43 84 53" fill="#f8d9df" stroke="#111" strokeWidth="2" /></g>
              <path d="M50 36V66M50 37 43 26M50 37 57 26" stroke="#111" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <figure className="border-2 border-black bg-[#fff8e9] shadow-[8px_8px_0_#111]">
          <div className="relative aspect-square overflow-hidden">
            <div className="hero-floating-art absolute inset-0">
              <Image src="/hero-aditya-floating-gpu-v2.png" alt="Aditya Sneh floating cross-legged with coffee and a GPU" fill priority unoptimized sizes="(max-width: 600px) 120vw, 624px" className="translate-x-[3%] translate-y-[6%] scale-[1.2] object-contain object-center" />
            </div>
          </div>
          <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t-2 border-black bg-[#f7f0d5] px-5 py-4"><p className="text-sm font-bold">Aditya Sneh</p><p className="text-sm font-medium">AI/ML · LLMs · Research</p></figcaption>
        </figure>
        <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs font-bold tracking-wide sm:text-sm"><div className="border-2 border-black bg-[#d13f64] p-3 text-white shadow-[3px_3px_0_#111]">AGENTS</div><div className="border-2 border-black bg-white p-3 shadow-[3px_3px_0_#111]">LLMs</div><div className="border-2 border-black bg-[#f2c04c] p-3 shadow-[3px_3px_0_#111]">RAG</div></div>
        <div className="pointer-events-none absolute -left-4 top-1/2 sm:-left-8" aria-hidden="true">
          <svg className="paper-butterfly paper-butterfly-companion" viewBox="0 0 100 80" width="54" height="44" fill="none">
            <g className="paper-wing"><path d="M50 43 7 9 16 53 45 62Z" fill="#8edfd2" stroke="#111" strokeWidth="2" /><path d="M7 9 50 43 16 53" fill="#fff8e9" stroke="#111" strokeWidth="2" /></g>
            <g className="paper-wing paper-wing-right"><path d="M50 43 93 9 84 53 55 62Z" fill="#f2c04c" stroke="#111" strokeWidth="2" /><path d="M93 9 50 43 84 53" fill="#fff0b8" stroke="#111" strokeWidth="2" /></g>
            <path d="M50 36V66M50 37 43 26M50 37 57 26" stroke="#111" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  </section>
);
