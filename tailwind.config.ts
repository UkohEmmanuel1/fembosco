import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "rgb(var(--color-brand-50) / <alpha-value>)",
          100: "rgb(var(--color-brand-100) / <alpha-value>)",
          200: "rgb(var(--color-brand-200) / <alpha-value>)",
          300: "rgb(var(--color-brand-300) / <alpha-value>)",
          400: "rgb(var(--color-brand-400) / <alpha-value>)",
          500: "rgb(var(--color-brand-500) / <alpha-value>)",
          600: "rgb(var(--color-brand-600) / <alpha-value>)",
          700: "rgb(var(--color-brand-700) / <alpha-value>)",
          800: "rgb(var(--color-brand-800) / <alpha-value>)",
          900: "rgb(var(--color-brand-900) / <alpha-value>)",
          primary: "rgb(var(--color-brand-primary) / <alpha-value>)",
          "primary-dark": "rgb(var(--color-brand-primary-dark) / <alpha-value>)",
          "primary-light": "rgb(var(--color-brand-primary-light) / <alpha-value>)",
          secondary: "rgb(var(--color-brand-secondary) / <alpha-value>)",
          "secondary-light": "rgb(var(--color-brand-secondary-light) / <alpha-value>)",
          accent: "rgb(var(--color-brand-accent) / <alpha-value>)",
          "accent-light": "rgb(var(--color-brand-accent-light) / <alpha-value>)",
          "accent-dark": "rgb(var(--color-brand-accent-dark) / <alpha-value>)",
          ink: "rgb(var(--color-brand-ink) / <alpha-value>)",
          muted: "rgb(var(--color-brand-muted) / <alpha-value>)",
          navy: "rgb(var(--color-brand-navy) / <alpha-value>)",
        },
        border: "rgb(var(--color-border) / <alpha-value>)",
        canvas: "rgb(var(--color-canvas) / <alpha-value>)",
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
        glow: "0 0 0 1px rgba(229,57,53,0.12), 0 8px 40px -8px rgba(229,57,53,0.35), 0 24px 80px -24px rgba(179,0,0,0.35)",
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