/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./App.tsx",
    ],
    theme: {
        extend: {
            colors: {
                background: "#09090B", // Zinc 950
                surface: "#18181B",    // Zinc 900
                primary: "#FAFAFA",    // Zinc 50
                secondary: "#A1A1AA",  // Zinc 400
                cta: "#2563EB",        // Blue 600
                "cta-hover": "#1D4ED8", // Blue 700
            },
            fontFamily: {
                sans: ['"DM Sans"', 'sans-serif'],
            },
            animation: {
                "fade-in-up": "fadeInUp 0.6s ease-out forwards",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            keyframes: {
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
};
