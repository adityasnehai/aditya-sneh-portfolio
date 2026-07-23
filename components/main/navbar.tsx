'use client';

import { useState } from "react";

import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

import { NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/8 bg-[#f4efe6]/82 backdrop-blur-xl">
      <div className="relative mx-auto flex w-full max-w-[1160px] items-center justify-end gap-4 px-4 py-4 md:px-8">
        <Link href="#about-me" className="mr-auto text-base font-semibold text-black md:text-lg">
          Aditya Sneh
        </Link>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center md:flex">
          <div className="flex items-center gap-1 rounded-full border border-black/10 bg-white/75 px-2 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="rounded-full px-5 py-2.5 text-base font-semibold text-black/72 transition hover:bg-black hover:text-white"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden items-center justify-end gap-3 md:flex">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              aria-label={name}
              title={name}
              className="rounded-full border border-black/10 bg-white/75 p-3 text-black/72 transition hover:-translate-y-0.5 hover:border-black/20 hover:bg-white hover:text-black"
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}

          <Link
            href="/Aditya_Sneh_Resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full border border-black bg-black px-5 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800"
          >
            Resume
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          className="ml-auto inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 p-3 text-black shadow-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-black/10 bg-[#f4efe6]/98 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-[1160px] flex-col gap-2 rounded-3xl border border-black/10 bg-white/75 p-3 shadow-[0_12px_32px_rgba(0,0,0,0.05)]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-black/72 transition hover:bg-black hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}

            <div className="mt-1 flex flex-wrap gap-2 px-1 pb-1">
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={name}
                  aria-label={name}
                  title={name}
                  className="rounded-full border border-black/10 bg-white/80 p-3 text-black/70"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
              <Link
                href="/Aditya_Sneh_Resume.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-black bg-black px-5 py-3 text-base font-semibold text-white"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
