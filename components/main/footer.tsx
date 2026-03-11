import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full px-6 pb-8 pt-6 text-gray-200">
      <div className="mx-auto w-full max-w-6xl rounded-2xl border border-[rgba(112,66,248,0.25)] bg-[rgba(3,0,20,0.4)] p-5 md:p-7">
        <div className="grid w-full gap-4 md:grid-cols-2 md:gap-6">
          {FOOTER_DATA.map((column) => (
            <section
              key={column.title}
              className="rounded-xl border border-[rgba(112,66,248,0.3)] bg-[rgba(3,0,20,0.5)] p-4 md:p-5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300">
                {column.title}
              </h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <div key={`${column.title}-${name}`} className="mt-3">
                  <Link
                    href={link}
                    target={link.startsWith("http") ? "_blank" : undefined}
                    rel={link.startsWith("http") ? "noreferrer noopener" : undefined}
                    className="inline-flex items-center gap-2 text-[15px] text-gray-200 transition hover:text-white"
                  >
                    {Icon && <Icon className="h-4 w-4 text-cyan-300" />}
                    <span>{name}</span>
                  </Link>
                </div>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-center text-sm text-gray-300">
          &copy; Aditya Sneh {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
