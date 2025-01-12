/** @type {import('tailwindcss').Config} */
export default {
  // áp dụng cho các file html và các file js, ts, jsx, tsx trong thư mục src
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

