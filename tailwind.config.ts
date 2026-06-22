import type { Config } from "tailwindcss";

/* ============================================================
   LIFTED TRUCK INSURANCE — "Trail Ready" palette
   clay = deep forest green · sage = copper · gold = electric orange
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F4",
        sand: "#F2EDE6",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#2A4A2E",
          dark: "#1C3320",
          light: "#3D6B44",
          50: "#EEF4EF",
          100: "#D4E5D5",
          200: "#A8CCAB",
          300: "#7AB280",
          400: "#50985A",
          500: "#3D6B44",
          600: "#2A4A2E",
          700: "#1C3320",
          800: "#112013",
          900: "#080F09",
        },
        sage: {
          DEFAULT: "#B56B2A",
          dark: "#8A4E1A",
          light: "#D4894E",
          50: "#FDF3EA",
          100: "#F9E3C8",
          200: "#F2C89A",
          300: "#E8A96C",
          400: "#DC8D45",
          500: "#D4894E",
          600: "#B56B2A",
          700: "#8A4E1A",
        },
        gold: {
          DEFAULT: "#F05A00",
          dark: "#C04400",
          light: "#FF8040",
          50: "#FFF0E6",
          100: "#FFD9BE",
          200: "#FFB57A",
          300: "#FF8D42",
          400: "#F86C14",
          500: "#F05A00",
          600: "#C04400",
          700: "#8A2F00",
        },
        espresso: "#1A180E",
        cocoa: "#4A4030",
        mocha: "#7A6C58",
        adobe: "#E0D4C4",
        adobeDark: "#C8B89C",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #FAF8F4 0%, #F2EDE6 40%, #EDE6D8 70%, #FAF8F4 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(61,107,68,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(181,107,42,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #2A4A2E 0%, #3D6B44 100%)",
        "sage-gradient": "linear-gradient(135deg, #B56B2A 0%, #D4894E 100%)",
        "gold-gradient": "linear-gradient(135deg, #F05A00 0%, #FF8040 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(42, 74, 46, 0.22), 0 4px 12px -6px rgba(26, 24, 14, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(42, 74, 46, 0.28), 0 10px 30px -10px rgba(26, 24, 14, 0.10)",
        card: "0 2px 8px -2px rgba(26, 24, 14, 0.06), 0 1px 3px -1px rgba(26, 24, 14, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(42, 74, 46, 0.22), 0 8px 20px -8px rgba(26, 24, 14, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(42, 74, 46, 0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
