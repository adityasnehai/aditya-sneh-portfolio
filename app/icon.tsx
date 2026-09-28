import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          border: "2px solid #111111",
          borderRadius: 6,
          color: "#111111",
          fontSize: 19,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        A
      </div>
    ),
    { ...size },
  );
}
