/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,html}','./components/**/*.{js,ts,jsx,tsx,html}'],
  plugins: [require('daisyui'),require('@tailwindcss/forms')],
  daisyui: {
    // styled: true,
    // themes: true,
    // base: true,
    // utils: true,
    // logs: true,
    // rtl: false,
    // prefix: "",
    darkTheme: "light",
  },
};
