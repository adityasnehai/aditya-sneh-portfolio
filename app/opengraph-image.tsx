import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#111111",
          color: "#f4efe6",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            opacity: 0.6,
          }}
        >
          AI Engineer · AI Researcher
        </div>
        <div style={{ fontSize: 104, fontWeight: 700, marginTop: 24 }}>
          Aditya Sneh
        </div>
        <div
          style={{
            fontSize: 32,
            marginTop: 28,
            opacity: 0.75,
            maxWidth: 900,
          }}
        >
          Production AI systems, from research paper to deployed product.
        </div>
      </div>
    ),
    { ...size },
  );
}
