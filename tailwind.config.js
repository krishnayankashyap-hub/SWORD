/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Safelist ensures colors load dynamically even if not detected by scanner
  safelist: [
    { pattern: /(bg|text|border)-(orange|emerald|slate)-(50|100|200|300|400|500|600|700|800|900)/ },
    'min-h-screen',
    'w-full',
    'h-full'
  ]
}