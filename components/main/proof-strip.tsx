"use client";

import { useEffect, useRef } from "react";

const PROOF_POINTS = [
  { value: "23.5K+", label: "hours of smartphone data collected" },
  { value: "10.6K", label: "context-aware intervention prompts" },
  { value: "4", label: "end-to-end AI products" },
  { value: "6", label: "research papers · including work in progress" },
] as const;

export const ProofStrip = () => {
  const strip = useRef<HTMLElement>(null);

  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const numbers = Array.from(strip.current?.querySelectorAll<HTMLElement>("[data-counter]") ?? []);
    const played = new Set<HTMLElement>();
    const frames = new Map<HTMLElement, number>();
    const restore = () => {
      frames.forEach(frame => cancelAnimationFrame(frame));
      frames.clear();
      numbers.forEach((number, index) => { number.textContent = PROOF_POINTS[index].value; });
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const number = entry.target as HTMLElement;
        if (!entry.isIntersecting || played.has(number)) return;
        played.add(number);
        observer.unobserve(number);
        if (preference.matches) return;
        const final = PROOF_POINTS[numbers.indexOf(number)].value;
        const target = parseFloat(final);
        const decimals = final.includes(".") ? 1 : 0;
        const suffix = final.replace(/[\d.]/g, "");
        const started = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - started) / 1400, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          number.textContent = progress === 1 ? final : `${(Math.floor(target * eased * 10 ** decimals) / 10 ** decimals).toFixed(decimals)}${suffix}`;
          if (progress < 1) frames.set(number, requestAnimationFrame(tick));
          else frames.delete(number);
        };
        frames.set(number, requestAnimationFrame(tick));
      });
    }, { threshold: .6 });
    numbers.forEach(number => observer.observe(number));
    const onPreference = () => { if (preference.matches) restore(); };
    preference.addEventListener("change", onPreference);
    return () => {
      observer.disconnect();
      restore();
      preference.removeEventListener("change", onPreference);
    };
  }, []);

  return (
  <section ref={strip} className="proof-strip border-b-2 border-black bg-[#111] text-[#fff8e9]">
    <div className="mx-auto grid max-w-[1440px] divide-y-2 divide-[#fff8e9]/25 px-6 py-2 md:grid-cols-4 md:divide-x-2 md:divide-y-0 md:px-8 md:py-0">
      {PROOF_POINTS.map((point) => (
        <div key={point.value} className="px-0 py-6 md:px-7 md:py-7 lg:px-9">
          <p className="text-3xl font-black tracking-[-0.04em] sm:text-4xl"><span className="sr-only">{point.value}</span><span data-counter aria-hidden="true">{point.value}</span></p>
          <p className="mt-1 max-w-[16rem] text-sm leading-5 text-[#f7f0d5]/75">{point.label}</p>
        </div>
      ))}
    </div>
  </section>
  );
};
