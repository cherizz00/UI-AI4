/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'base-black': '#000000',
                'talent-blue': '#0052FF',
                'talent-royal': '#0041CC',
            },
            container: {
                center: true,
                padding: '2rem',
            },
        },
    },
    plugins: [],
}
