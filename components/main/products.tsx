"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { PRODUCTS } from "@/constants";

export const Products = () => {
  return (
    <section
      id="products"
      className="relative flex scroll-mt-28 flex-col items-center justify-center overflow-hidden px-4 py-14 md:px-8 lg:px-12 lg:py-18"
    >
      <div className="relative z-10 w-full max-w-[1160px]">
        <div className="mb-7 flex flex-col gap-3">
          <h2 className="text-[34px] font-semibold text-black md:text-[42px]">
            Products I&apos;ve Shipped
          </h2>
          <p className="max-w-2xl text-sm text-black/58 md:text-base">
            Live, end-to-end AI products, from idea to deployment.
          </p>
        </div>
      </div>

      <div className="relative z-10 grid w-full max-w-[1160px] gap-5 md:grid-cols-2">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <Link
              href={product.link}
              target="_blank"
              rel="noreferrer noopener"
              className="group block text-center"
            >
              <h3 className="text-lg font-semibold text-black">{product.title}</h3>
              <p className="mt-0.5 text-sm text-black/55">{product.tagline}</p>

              <div className="relative mt-4 aspect-[2/1] overflow-hidden rounded-2xl border border-black/10 bg-[#fbfaf7] shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition group-hover:-translate-y-1 group-hover:border-black/20 group-hover:shadow-[0_22px_50px_rgba(0,0,0,0.08)]">
                <Image
                  src={product.image}
                  alt={`${product.title} product screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-2"
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
