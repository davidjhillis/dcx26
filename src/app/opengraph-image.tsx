import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "DiscoverCX — Content Delivery Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(0,199,183,0.18) 0%, transparent 60%), radial-gradient(ellipse at 80% 90%, rgba(91,233,222,0.10) 0%, transparent 55%), #08090A",
          color: "#F7F8F8",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              background: "#00C7B7",
              boxShadow: "0 0 24px rgba(0,199,183,0.7)",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#8A8F98",
            }}
          >
            DiscoverCX
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 960,
          }}
        >
          <div
            style={{
              fontSize: 76,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#F7F8F8",
            }}
          >
            Build documentation.
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#8A8F98",
            }}
          >
            Ship customer experiences.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#8A8F98",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
            <span>CCMS</span>
            <span style={{ color: "#3B3F46" }}>·</span>
            <span>Headless API</span>
            <span style={{ color: "#3B3F46" }}>·</span>
            <span>Customer Portal</span>
          </div>
          <div style={{ color: "#5BE9DE", fontSize: 22 }}>discovercx.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
