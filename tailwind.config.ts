import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: ".5625rem",
        md: ".375rem",
        sm: ".1875rem",
      },
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
          border: "hsl(var(--card-border) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
          border: "hsl(var(--popover-border) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          border: "var(--primary-border)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
          border: "var(--secondary-border)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
          border: "var(--muted-border)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          border: "var(--accent-border)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
          border: "var(--destructive-border)",
        },
        ring: "hsl(var(--ring) / <alpha-value>)",
        chart: {
          "1": "hsl(var(--chart-1) / <alpha-value>)",
          "2": "hsl(var(--chart-2) / <alpha-value>)",
          "3": "hsl(var(--chart-3) / <alpha-value>)",
          "4": "hsl(var(--chart-4) / <alpha-value>)",
          "5": "hsl(var(--chart-5) / <alpha-value>)",
        },
        sidebar: {
          ring: "hsl(var(--sidebar-ring) / <alpha-value>)",
          DEFAULT: "hsl(var(--sidebar) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-foreground) / <alpha-value>)",
          border: "hsl(var(--sidebar-border) / <alpha-value>)",
        },
        "sidebar-primary": {
          DEFAULT: "hsl(var(--sidebar-primary) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-primary-foreground) / <alpha-value>)",
          border: "var(--sidebar-primary-border)",
        },
        "sidebar-accent": {
          DEFAULT: "hsl(var(--sidebar-accent) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-accent-foreground) / <alpha-value>)",
          border: "var(--sidebar-accent-border)"
        },
        neon: {
          cyan: "hsl(var(--neon-cyan) / <alpha-value>)",
          magenta: "hsl(var(--neon-magenta) / <alpha-value>)",
          purple: "hsl(var(--neon-purple) / <alpha-value>)",
          lime: "hsl(var(--neon-lime) / <alpha-value>)",
          pink: "hsl(var(--neon-pink) / <alpha-value>)",
        },
        status: {
          online: "rgb(34 197 94)",
          away: "rgb(245 158 11)",
          busy: "rgb(239 68 68)",
          offline: "rgb(156 163 175)",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "var(--font-sans)", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
        mono: ["VT323", "var(--font-mono)", "monospace"],
      },
      fontSize: {
        "hero": ["clamp(3rem, 8vw, 6rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "section": ["clamp(2.25rem, 5vw, 4rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "subsection": ["clamp(1.5rem, 3vw, 2rem)", { lineHeight: "1.3" }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "glitch": {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        "glitch-skew": {
          "0%, 100%": { transform: "skew(0deg)" },
          "20%": { transform: "skew(-1deg)" },
          "40%": { transform: "skew(1deg)" },
          "60%": { transform: "skew(-0.5deg)" },
          "80%": { transform: "skew(0.5deg)" },
        },
        "neon-pulse": {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.8", filter: "brightness(1.3)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "scroll-indicator": {
          "0%, 100%": { opacity: "0.3", transform: "translateY(0)" },
          "50%": { opacity: "1", transform: "translateY(8px)" },
        },
        "border-flow": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glitch": "glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite",
        "glitch-skew": "glitch-skew 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "scroll-indicator": "scroll-indicator 2s ease-in-out infinite",
        "border-flow": "border-flow 3s ease infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      boxShadow: {
        "neon-cyan": "0 0 5px hsl(var(--neon-cyan)), 0 0 20px hsl(var(--neon-cyan) / 0.5), 0 0 40px hsl(var(--neon-cyan) / 0.3)",
        "neon-magenta": "0 0 5px hsl(var(--neon-magenta)), 0 0 20px hsl(var(--neon-magenta) / 0.5), 0 0 40px hsl(var(--neon-magenta) / 0.3)",
        "neon-purple": "0 0 5px hsl(var(--neon-purple)), 0 0 20px hsl(var(--neon-purple) / 0.5), 0 0 40px hsl(var(--neon-purple) / 0.3)",
        "neon-lime": "0 0 5px hsl(var(--neon-lime)), 0 0 20px hsl(var(--neon-lime) / 0.5), 0 0 40px hsl(var(--neon-lime) / 0.3)",
        "neon-glow": "0 0 10px hsl(var(--neon-cyan) / 0.5), 0 0 30px hsl(var(--neon-magenta) / 0.3)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "neon-gradient": "linear-gradient(135deg, hsl(var(--neon-cyan)), hsl(var(--neon-magenta)), hsl(var(--neon-purple)))",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
