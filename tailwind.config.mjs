/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#211963",
        secondary: "#1b1455",
        github: "#2b3137",
        facebook: "#4267B2",
        google: "#eb4034",
        linkedin: "#0a66c2",
        facebook: "#4267B2",
        workos: "#1E3A8A",
      },
    },
  },
  plugins: [],
};
