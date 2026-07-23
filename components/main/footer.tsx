import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full px-4 pb-10 pt-6 text-black md:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[1160px] rounded-[28px] border border-black/10 bg-white/65 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.04)] md:p-7">
        <div className="grid w-full gap-4 md:grid-cols-2 md:gap-6">
          {FOOTER_DATA.map((column) => (
            <section
              key={column.title}
              className="rounded-2xl border border-black/10 bg-[#fbfaf7] p-4 md:p-5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-black/55">
                {column.title}
              </h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <div key={`${column.title}-${name}`} className="mt-3">
                  <Link
                    href={link}
                    target={link.startsWith("http") ? "_blank" : undefined}
                    rel={link.startsWith("http") ? "noreferrer noopener" : undefined}
                    className="inline-flex items-center gap-2 text-[15px] text-black/78 transition hover:text-black"
                  >
                    {Icon && <Icon className="h-4 w-4 text-black/55" />}
                    <span>{name}</span>
                  </Link>
                </div>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-6 border-t border-black/10 pt-4 text-center text-sm text-black/45">
          &copy; Aditya Sneh {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
