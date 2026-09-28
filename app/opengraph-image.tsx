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
          background: "#f7f0d5",
          color: "#171714",
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
          Applied AI Engineer
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
          I build useful AI products for real problems.
        </div>
      </div>
    ),
    { ...size },
  );
}
