import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f2c04c",
          border: "7px solid #111111",
          borderRadius: 34,
          color: "#111111",
          fontSize: 104,
          fontWeight: 700,
          letterSpacing: -5,
        }}
      >
        A
      </div>
    ),
    { ...size },
  );
}
