import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// Image generation — "A" logo matching navbar (dark rounded square + cyan letter)
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
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #050505 60%, #071414 100%)",
          borderRadius: 36,
          border: "1px solid rgba(34, 211, 238, 0.35)",
          boxShadow: "inset 0 0 30px rgba(34, 211, 238, 0.15)",
        }}
      >
        <div
          style={{
            fontSize: 110,
            fontWeight: 700,
            fontFamily: "monospace",
            color: "#22d3ee",
            display: "flex",
          }}
        >
          A
        </div>
      </div>
    ),
    { ...size }
  );
}