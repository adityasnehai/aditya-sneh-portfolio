'use client';

import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";

import { NAV_LINKS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setIsMobileMenuOpen(false); menuButton.current?.focus(); }
    };
    const desktop = matchMedia("(min-width: 1200px)");
    const resize = () => { if (desktop.matches) setIsMobileMenuOpen(false); };
    document.addEventListener("keydown", escape);
    desktop.addEventListener("change", resize);
    return () => { document.removeEventListener("keydown", escape); desktop.removeEventListener("change", resize); };
  }, [isMobileMenuOpen]);

  return (
    <header className="portfolio-header fixed left-0 top-0 z-50 w-full border-b-2 border-black bg-[#f7f0d5]">
      <div className="mx-auto grid min-h-[76px] w-full max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-4 md:px-8">
        <Link href="#about-me" onClick={() => setIsMobileMenuOpen(false)} className="portfolio-brand justify-self-start text-black" aria-label="Aditya Sneh, home"><span className="portfolio-brand-name">Aditya Sneh<span className="portfolio-brand-period" aria-hidden="true">.</span></span></Link>
        <nav aria-label="Main navigation" className="col-start-2 hidden items-center md:flex">
          <div className="flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="border-b-2 border-transparent px-3 py-2 text-sm font-bold text-black/75 transition hover:border-black hover:text-black md:px-4 md:text-[15px]"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </nav>

        <div className="col-start-3 hidden items-center justify-end gap-3 md:flex">
          <Link href="/Aditya_Sneh_Resume.pdf" target="_blank" rel="noreferrer noopener" className="header-resume border-2 border-black bg-[#d13f64] px-4 py-2 text-sm font-black text-white shadow-[3px_3px_0_#111] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#111]">Resume <FiArrowUpRight aria-hidden="true" /></Link>
          <span className="h-7 w-px bg-black/25" aria-hidden="true" />
          <Link href="https://github.com/adityasnehai" target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="text-black transition hover:-translate-y-0.5"><FiGithub className="h-5 w-5" /></Link>
          <Link href="https://www.linkedin.com/in/aditya-sneh/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="text-black transition hover:-translate-y-0.5"><FiLinkedin className="h-5 w-5" /></Link>
        </div>

        <button
          ref={menuButton}
          type="button"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          className="col-start-3 ml-auto inline-flex items-center justify-center border-2 border-black bg-white p-2.5 text-black shadow-[3px_3px_0_#111] md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="border-t-2 border-black bg-[#f7f0d5] px-4 py-4 md:hidden" onKeyDown={(event) => { if (event.key === "Escape") { setIsMobileMenuOpen(false); menuButton.current?.focus(); } }}>
          <div className="mx-auto flex max-w-[1320px] flex-col gap-2 border-2 border-black bg-white p-2 shadow-[4px_4px_0_#111]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="border-2 border-transparent px-4 py-3 text-base font-black text-black transition hover:border-black hover:bg-[#f2c04c]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <div className="flex flex-wrap gap-3 border-t border-black/20 p-3">
              <Link href="/Aditya_Sneh_Resume.pdf" target="_blank" rel="noreferrer noopener" className="neo-button bg-[#d13f64] text-white">Resume</Link>
              <Link href="https://github.com/adityasnehai" target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="neo-icon bg-white"><FiGithub /></Link>
              <Link href="https://www.linkedin.com/in/aditya-sneh/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="neo-icon bg-white"><FiLinkedin /></Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
