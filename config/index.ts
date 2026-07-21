import type { Metadata } from "next";

export const SITE_URL = "https://aditya-sneh-portfolio.vercel.app";
const SITE_TITLE = "Aditya Sneh";
const SITE_DESCRIPTION =
  "AI/ML Engineer portfolio featuring production-grade LLM, RAG, and real-time mobile context modeling systems.";

export const siteConfig: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Aditya Sneh",
    "AI Engineer",
    "ML Engineer",
    "Generative AI",
    "LLM Engineer",
    "RAG",
    "Multimodal AI",
    "Mobile Sensing",
    "MLOps",
    "PyTorch",
    "FastAPI",
    "Portfolio",
  ],
  authors: [{ name: "Aditya Sneh", url: "https://github.com/adityasnehai" }],
  creator: "Aditya Sneh",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
} as const;
