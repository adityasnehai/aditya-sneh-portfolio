"use client";

import { type FormEvent, useState } from "react";

import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

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
      className="relative flex scroll-mt-28 flex-col items-center justify-center overflow-hidden px-4 py-14 md:px-8 lg:px-12 lg:py-18"
    >
      <div className="relative z-10 w-full max-w-2xl">
        <div className="mb-7 flex flex-col gap-3">
          <h2 className="text-[34px] font-semibold text-black md:text-[42px]">
            Contact
          </h2>
          <p className="text-sm text-black/58 md:text-base">
            Reach out for AI engineering roles, collaborations, or project discussions.
          </p>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-black/10 bg-white/65 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.04)] md:p-6"
        >
          <div className="space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm text-black/65">Your Name</span>
              <input
                type="text"
                value={formData.name}
                onChange={(event) => updateField("name", event.target.value)}
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/30 focus:border-black/35 focus:outline-none"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-black/65">Your Email</span>
              <input
                type="email"
                value={formData.email}
                onChange={(event) => updateField("email", event.target.value)}
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/30 focus:border-black/35 focus:outline-none"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-black/65">Your Message</span>
              <textarea
                value={formData.message}
                onChange={(event) => updateField("message", event.target.value)}
                required
                rows={6}
                placeholder="What do you want to discuss?"
                className="w-full resize-none rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/30 focus:border-black/35 focus:outline-none"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={submissionState === "submitting"}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-black bg-black px-5 py-3.5 text-base font-medium text-white transition hover:-translate-y-0.5 hover:bg-zinc-800"
          >
            <FiSend className="h-4 w-4" />
            {submissionState === "submitting" ? "Sending..." : "Send"}
          </button>
          <p className="mt-3 text-xs text-black/45">
            {statusMessage || "If direct form sending is not configured, this opens your email client with a draft."}
          </p>
        </motion.form>
      </div>
    </section>
  );
};
