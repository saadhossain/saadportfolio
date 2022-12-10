/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "primary": "#D5868A",
                "secondary": "#6C84CA",
                "accent": "#84827D"
            },
            fontFamily: {
                bigshoulder: ["'Big Shoulders Display', cursive"],
                chivo:["'Chivo Mono', monospace"]
              }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", "dark", "night",]
      },
}