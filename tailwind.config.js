/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "primary": "#3B6EA3",
                "typo": "#71b7ff",
                "secondary": "#0E1B33",
                "accent": "#84827D"
            }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", "dark", "night",]
      },
}