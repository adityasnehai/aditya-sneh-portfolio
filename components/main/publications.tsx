import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiFileText } from "react-icons/fi";

import { PUBLICATIONS } from "@/constants";

const PAPER_META = [
  ["ROBUSTNESS", "2025", "bg-[#f2c04c]"],
  ["MULTIMODAL AI", "2026", "bg-[#ff708b]"],
  ["MOBILE SENSING", "2026", "bg-[#8edfd2]"],
  ["HEALTHCARE FAIRNESS", "2026", "bg-[#f2c04c]"],
  ["REAL-WORLD AI", "2026", "bg-[#ff708b]"],
  ["MOBILE INTERVENTIONS", "2026", "bg-[#8edfd2]"],
] as const;

function PaperCard({ index }: { index: number }) {
  const paper = PUBLICATIONS[index];
  const [category, , color] = PAPER_META[index];
  const unpublished = index === 5;

  const cardClassName = "research-paper-card group relative border-2 border-black bg-[#fff8e9] p-4 shadow-[5px_5px_0_#111] transition hover:-translate-y-1 hover:shadow-[3px_7px_0_#111]";
  const cardContent = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className={`research-paper-tab inline-block border-2 border-black px-2 py-1 text-[10px] font-black tracking-wide ${color}`}>{category}</span>
      </div>
      <span className="research-paper-venue">{paper.venue}</span>
      <h3 className="mt-3 text-lg font-black leading-tight tracking-[-0.03em]">{paper.title}</h3>
      <p className="mt-2 text-xs leading-5 text-black/65">{[
        "Testing iris attack detectors beyond the conditions they were trained on.",
        "Learning from wearable and smartphone signals with fewer labeled examples.",
        "Connecting sedentary activity and social context through smartphone signals.",
        "Exploring fairer audio-visual stress detection when labeled data is limited.",
        "Understanding receptivity to mental health support in everyday life.",
        "Finding better moments for mobile interventions through passive sensing.",
      ][index]}</p>
      <div className="research-paper-bottom">
        {unpublished ? <span className="text-xs font-bold">In progress</span> : <span className="inline-flex items-center gap-2 text-xs font-black underline decoration-2 underline-offset-4">Read paper<FiArrowUpRight className="h-4 w-4" /></span>}
        <FiFileText aria-hidden="true" className="research-paper-icon" />
      </div>
    </>
  );

  return unpublished ? <article className={cardClassName}>{cardContent}</article> : <Link href={paper.link} target="_blank" rel="noreferrer noopener" aria-label={`Read paper: ${paper.title} (opens in a new tab)`} className={cardClassName}>{cardContent}</Link>;
}

export const Publications = () => (
  <section id="publications" className="research-section neo-grid scroll-mt-24 border-b-2 border-black px-4 py-20 md:px-8 lg:px-12 lg:py-28">
    <div className="mx-auto max-w-[1480px]">
      <div className="research-heading text-center">
        <h2 className="research-title"><span>Research</span><b>&amp;</b><span>Publications</span></h2>
        <p>Turning experiments into useful systems.</p>
      </div>

      <div className="research-board">
        <div className="research-paper-column research-paper-left">
          {[0, 1, 2].map((index) => <PaperCard key={index} index={index} />)}
        </div>
        <div className="research-scientist">
          <div className="research-speech" aria-hidden="true">small experiments.<br/>bigger tomorrow.</div>
          <svg className="research-molecule" viewBox="0 0 100 100" aria-hidden="true"><g stroke="#171714" strokeWidth="3.5"><path d="m48 17 16 40-35 25L9 55" fill="none"/><circle cx="48" cy="17" r="12" fill="#7bd1b4"/><circle cx="64" cy="57" r="14" fill="#ff708b"/><circle cx="29" cy="82" r="11" fill="#7bd1b4"/><circle cx="9" cy="55" r="8" fill="#ffc91b"/></g></svg>
          <Image src="/research-scientist.png" alt="Aditya Sneh in a lab coat and protective glasses presenting an experiment" width={1024} height={1536} sizes="(min-width: 1024px) 38vw, 85vw" className="research-portrait" />
          <div className="research-arrows" aria-hidden="true">{[0,1,2].map(i=><svg key={i} viewBox="0 0 400 85"><path d="M85 10Q65 58 9 47m15-15L8 47l19 12M315 10q20 48 76 37m-15-15 16 15-19 12"/></svg>)}</div>
        </div>
        <div className="research-paper-column research-paper-right">
          {[3, 4, 5].map((index) => <PaperCard key={index} index={index} />)}
        </div>
      </div>
    </div>
  </section>
);
