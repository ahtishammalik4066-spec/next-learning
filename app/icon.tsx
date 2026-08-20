import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation — "A" logo matching navbar (dark rounded square + cyan letter)
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
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #050505 60%, #071414 100%)",
          borderRadius: 8,
          border: "1px solid rgba(34, 211, 238, 0.35)",
          boxShadow: "inset 0 0 12px rgba(34, 211, 238, 0.15)",
        }}
      >
        <div
          style={{
            fontSize: 19,
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