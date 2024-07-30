/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'bg-One' : "#0B0C10",
        'bg-Two' : "#1F2833",
        'text-One' : "#C5C6C7",
        'text-Two' : "#66FCF1",
        'text-Three' : "#45A29E",
      }
    },
  },
  plugins: [],
}