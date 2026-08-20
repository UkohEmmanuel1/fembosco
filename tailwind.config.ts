import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#ff0000",
          "primary-dark": "#b30000",
          "primary-light": "#ff3b3b",
          secondary: "#e53935",
          "secondary-light": "#fef2f2",
          accent: "#ed8936",
          "accent-dark": "#dd6b20",
          ink: "#0f172a",
          muted: "#475569",
          navy: "#081726",
        },
        border: "#e2e8f0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-display)", "Space Grotesk", "Inter", "system-ui", "sans-serif"],
        montserrat: ["Montserrat", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      maxWidth: {
        site: "1170px",
        hero: "1240px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -8px rgba(15,23,42,0.08)",
        cardHover: "0 2px 4px rgba(15,23,42,0.05), 0 20px 40px -12px rgba(179,0,0,0.22)",
        glowBlue:
          "0 0 0 1px rgba(229,57,53,0.12), 0 8px 40px -8px rgba(229,57,53,0.35), 0 24px 80px -24px rgba(179,0,0,0.35)",
        glowAmber:
          "0 0 0 1px rgba(237,137,54,0.14), 0 8px 32px -8px rgba(237,137,54,0.35), 0 20px 60px -20px rgba(221,107,32,0.3)",
        button: "0 8px 24px -8px rgba(221,107,32,0.45)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "100%": { transform: "translateX(200%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s cubic-bezier(0.4,0,0.2,1) both",
        "scale-in": "scale-in 0.3s cubic-bezier(0.4,0,0.2,1) both",
        shimmer: "shimmer 1.4s ease-out infinite",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;