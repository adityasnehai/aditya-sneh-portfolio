'use client';
import { useState } from "react";
import Link from "next/link";

import { NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-4 md:px-8">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-end px-2 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <div className="hidden lg:block" aria-hidden />

        <div className="hidden h-full flex-row items-center justify-self-center lg:flex">
          <div className="flex items-center gap-5 h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-cyan-300 transition"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden flex-row justify-self-end gap-5 lg:flex">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              aria-label={name}
              title={name}
            >
              <Icon className="h-6 w-6 text-white hover:text-cyan-300 transition" />
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          className="text-4xl text-white focus:outline-none lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 lg:hidden">
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-cyan-300 transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                aria-label={name}
                title={name}
              >
                <Icon className="h-8 w-8 text-white hover:text-cyan-300 transition" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
