import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        surface: "#f0fdf9",
        green: {
          850: "#115e59",
          800: "#0f766e",
          700: "#148078",
          600: "#1aab73",
          500: "#2ecc87",
          400: "#3ecf8e",
          300: "#6ee7b7",
          75: "#b8e8d4",
        },
        rose: {
          DEFAULT: "#e8488a",
          500: "#ec4899",
          700: "#db2777",
          100: "#fce7f3",
          muted: "#c45b8a",
        },
        body: "#3d5c54",
        neutral: {
          200: "#d1e7df",
          300: "#b8d4c8",
        },
      },
      fontFamily: {
        sans: ["var(--font-public-sans)", "Arial", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "Arial", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        pill: "9999px",
      },
      maxWidth: {
        container: "80rem",
      },
      fontSize: {
        display: ["5.875rem", { lineHeight: "0.9", letterSpacing: "0" }],
      },
    },
  },
  plugins: [],
};

export default config;
