import Image from "next/image";
import Link from "next/link";

import { PRODUCTS } from "@/constants";

export const Products = () => {
  return (
    <section
      id="products"
      className="selected-work neo-grid relative scroll-mt-24 border-b-2 border-black px-6 py-14 md:px-8"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        <div className="mb-8 flex flex-col gap-3">
          <div className="mb-4 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/65"><span className="h-px w-12 bg-black" />Ideas → Agents → Products</div>
          <h2 className="relative inline-block text-[48px] font-black tracking-[-0.07em] text-black after:absolute after:-bottom-1 after:left-0 after:h-2 after:w-2/5 after:-rotate-1 after:bg-[#d13f64] md:text-[76px]">
            Selected work
          </h2>
          <p className="max-w-2xl text-base font-medium leading-7 text-black/65 md:text-lg">
            Four systems built from rough idea to working product.
          </p>
        </div>
      </div>

      <div className="selected-work-grid relative z-10 mx-auto grid w-full max-w-[1440px] gap-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Link href={PRODUCTS[0].link} target="_blank" rel="noreferrer noopener" className="featured-product group flex h-full flex-col border-2 border-black bg-[#f2c04c] p-5 shadow-[6px_6px_0_#111] md:p-6">
            <div className="flex items-end justify-between gap-3"><div><span className="inline-block border-2 border-black bg-[#fff8e9] px-3 py-1 text-xs font-black tracking-wider shadow-[3px_3px_0_#111]">01 / AGENTIC AI</span><h3 className="mt-4 text-4xl font-black tracking-[-0.05em] text-black md:text-6xl">{PRODUCTS[0].title}</h3></div><span className="hidden max-w-[12rem] text-right text-sm font-medium text-black/65 sm:block">{PRODUCTS[0].tagline}</span></div>
            <p className="mt-4 max-w-md text-base leading-relaxed">An AI plant companion that observes conditions and recommends the next care action.</p>
            <div className="relative mt-5 aspect-[2/1] w-full overflow-hidden border-2 border-black bg-black"><Image src={PRODUCTS[0].image} alt={`${PRODUCTS[0].title} product screenshot`} fill sizes="(max-width: 1024px) 90vw, 650px" className="object-contain" /></div>
            <div className="mt-auto flex items-end justify-between gap-4 pt-5"><span className="border-2 border-black bg-black px-4 py-2 text-sm font-bold text-white">VIEW PROJECT ↗</span><span className="-rotate-3 border border-black bg-[#8edfd2] px-3 py-2 font-mono text-xs">Small agents.<br />Greener days.</span></div>
          </Link>
        </div>

        <div className="grid grid-rows-3 gap-5">
          {PRODUCTS.slice(1).map((product, index) => (
            <div key={product.title}>
              <Link href={product.link} target="_blank" rel="noreferrer noopener" className="supporting-product group grid h-full items-center gap-4 border-2 border-black bg-[#fff8e9] p-4 shadow-[6px_6px_0_#111] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#111] sm:grid-cols-[1fr_1fr]">
                <div className="flex items-start justify-between gap-3"><div><span className={`inline-block border-2 border-black px-2 py-1 text-[10px] font-black tracking-wider ${index === 0 ? "bg-[#d13f64] text-white" : index === 1 ? "bg-[#8edfd2]" : "bg-[#f2c04c]"}`}>0{index + 2} / {index === 0 ? "KNOWLEDGE AGENTS" : index === 1 ? "HEALTH AI" : "PERSONAL FINANCE"}</span><h3 className="mt-2 text-2xl font-black tracking-tight text-black">{product.title}</h3><p className="mt-1 text-sm font-medium leading-5 text-black/65">{product.tagline}</p></div><span className="text-xl font-black">↗</span></div>
                <div className="relative aspect-[2/1] overflow-hidden border border-black bg-white"><Image src={product.image} alt={`${product.title} product screenshot`} fill sizes="(max-width: 640px) 90vw, 320px" className="object-contain" /></div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-7 flex max-w-[1440px] justify-between gap-4 font-mono text-[10px] uppercase tracking-widest"><span>Curiosity compounds.</span><span>Different problems. Same curiosity. ↗</span></div>
    </section>
  );
};
