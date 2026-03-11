"use client";

import { type FormEvent, useState } from "react";

import Link from "next/link";

import { motion } from "framer-motion";
import {
  FiActivity,
  FiCalendar,
  FiCheckCircle,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiSend,
  FiZap,
} from "react-icons/fi";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type SubmissionState = "idle" | "submitting" | "sent" | "fallback" | "error";

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

const CONTACT_FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.trim() || "";

export const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionState("submitting");
    setStatusMessage("");

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${formData.name || "Website Visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    if (CONTACT_FORM_ENDPOINT) {
      try {
        const response = await fetch(CONTACT_FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            source: "portfolio-contact-form",
          }),
        });

        if (!response.ok) {
          throw new Error(`Contact form request failed (${response.status})`);
        }

        setSubmissionState("sent");
        setStatusMessage("Message sent successfully.");
        setFormData(INITIAL_FORM);
        return;
      } catch {
        setSubmissionState("fallback");
        setStatusMessage("Form endpoint unavailable. Opening your email client instead.");
      }
    }

    window.location.href = `mailto:adityasneh09@gmail.com?subject=${subject}&body=${body}`;
    if (!CONTACT_FORM_ENDPOINT) {
      setSubmissionState("fallback");
      setStatusMessage("Opening your email client with a prefilled draft.");
    }
  };

  return (
    <section
      id="contact"
      className="relative flex scroll-mt-24 flex-col items-center justify-center overflow-hidden px-6 py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-purple-500/14 blur-[110px]" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-72 w-72 rounded-full bg-cyan-500/14 blur-[110px]" />

      <div className="w-full max-w-6xl relative z-10">
        <div className="mb-7 flex flex-col gap-3">
          <h2 className="text-[36px] md:text-[44px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
            Contact
          </h2>
          <p className="text-gray-400 max-w-3xl text-sm md:text-base">
            Reach out for AI engineering roles, collaborations, or project discussions.
          </p>
        </div>
      </div>

      <div className="w-full max-w-6xl relative z-10 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-[#2A0E61] bg-[rgba(7,7,24,0.52)] p-5 md:p-6"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/90">Get in touch</p>
          <h3 className="mt-2 text-4xl font-semibold text-white">Contact.</h3>

          <div className="mt-6 space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm text-gray-300">Your Name</span>
              <input
                type="text"
                value={formData.name}
                onChange={(event) => updateField("name", event.target.value)}
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-white/10 bg-[rgba(3,0,20,0.6)] px-4 py-3 text-sm text-gray-100 placeholder:text-gray-500 focus:border-cyan-400/60 focus:outline-none"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-gray-300">Your Email</span>
              <input
                type="email"
                value={formData.email}
                onChange={(event) => updateField("email", event.target.value)}
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/10 bg-[rgba(3,0,20,0.6)] px-4 py-3 text-sm text-gray-100 placeholder:text-gray-500 focus:border-cyan-400/60 focus:outline-none"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-gray-300">Your Message</span>
              <textarea
                value={formData.message}
                onChange={(event) => updateField("message", event.target.value)}
                required
                rows={6}
                placeholder="What do you want to discuss?"
                className="w-full resize-none rounded-lg border border-white/10 bg-[rgba(3,0,20,0.6)] px-4 py-3 text-sm text-gray-100 placeholder:text-gray-500 focus:border-cyan-400/60 focus:outline-none"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={submissionState === "submitting"}
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-cyan-300/60 bg-cyan-500/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-cyan-500/25 hover:border-cyan-200"
          >
            <FiSend className="h-4 w-4" />
            {submissionState === "submitting" ? "Sending..." : "Send"}
          </button>
          <p className="mt-3 text-xs text-gray-400">
            {statusMessage || "If direct form sending is not configured, this opens your email client with a draft."}
          </p>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-[#2A0E61] bg-[rgba(7,7,24,0.52)] p-5 md:p-6 flex flex-col"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
            Let&apos;s build reliable AI products.
          </h3>
          <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
            Prefer a quick discussion? You can email me directly or schedule a meeting.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="mailto:adityasneh09@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[rgba(3,0,20,0.55)] px-3 py-2 text-sm text-gray-100 hover:border-cyan-400/60 transition"
            >
              <FiMail className="h-4 w-4 text-cyan-300" />
              adityasneh09@gmail.com
            </Link>
            <Link
              href="https://calendly.com/adityasneh09/30min"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[rgba(3,0,20,0.55)] px-3 py-2 text-sm text-gray-100 hover:border-cyan-400/60 transition"
            >
              <FiCalendar className="h-4 w-4 text-cyan-300" />
              Schedule Meeting
            </Link>
            <Link
              href="https://www.linkedin.com/in/aditya-sneh/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[rgba(3,0,20,0.55)] px-3 py-2 text-sm text-gray-100 hover:border-cyan-400/60 transition"
            >
              <FiLinkedin className="h-4 w-4 text-cyan-300" />
              LinkedIn
            </Link>
          </div>

          <div className="relative mt-6 flex-1 min-h-[250px] overflow-hidden rounded-2xl border border-white/10 bg-[rgba(2,1,16,0.78)] p-5">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_34%)]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative z-10 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-cyan-400/25 bg-[rgba(6,18,38,0.72)] p-3">
                <FiCpu className="h-5 w-5 text-cyan-300" />
                <p className="mt-3 text-sm font-medium text-white">LLM Systems</p>
                <p className="mt-1 text-xs leading-relaxed text-gray-400">
                  Production-ready assistants and inference flows.
                </p>
              </div>
              <div className="rounded-xl border border-emerald-400/25 bg-[rgba(7,24,22,0.68)] p-3">
                <FiDatabase className="h-5 w-5 text-emerald-300" />
                <p className="mt-3 text-sm font-medium text-white">RAG Pipelines</p>
                <p className="mt-1 text-xs leading-relaxed text-gray-400">
                  Retrieval, ranking, grounding, and memory layers.
                </p>
              </div>
              <div className="rounded-xl border border-violet-400/25 bg-[rgba(18,10,36,0.7)] p-3">
                <FiLayers className="h-5 w-5 text-violet-300" />
                <p className="mt-3 text-sm font-medium text-white">Agent Workflows</p>
                <p className="mt-1 text-xs leading-relaxed text-gray-400">
                  Tool orchestration and multi-step reasoning loops.
                </p>
              </div>
              <div className="rounded-xl border border-amber-400/25 bg-[rgba(36,20,8,0.68)] p-3">
                <FiActivity className="h-5 w-5 text-amber-300" />
                <p className="mt-3 text-sm font-medium text-white">Production ML</p>
                <p className="mt-1 text-xs leading-relaxed text-gray-400">
                  Evaluation, monitoring, and scalable deployment.
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-100">
                <FiZap className="h-3.5 w-3.5" />
                LLM Apps
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-100">
                <FiDatabase className="h-3.5 w-3.5" />
                Multimodal RAG
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-1 text-xs text-violet-100">
                <FiCheckCircle className="h-3.5 w-3.5" />
                Deployment Ready
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
