"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box border border-cyan-400/35 px-[10px] py-[8px] opacity-[0.95]"
      >
        <SparklesIcon className="text-cyan-200 mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">Technical Stack</h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="mt-3 text-center text-[36px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 md:text-[44px]"
      >
        AI engineering tools for production delivery
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="mb-6 mt-1 max-w-3xl px-6 text-center text-sm text-gray-400 md:text-base"
      >
        Focused on retrieval systems, API services, data pipelines, and deployment workflows.
      </motion.div>
    </div>
  );
};
