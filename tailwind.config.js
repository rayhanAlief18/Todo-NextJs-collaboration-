/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            'sm': '375px',
            'md': '640px',
            'lg': '1024px',
            'xl': '1280px',
        },
        extend: {
            colors: {
                'black': '#080A1E',
                'glosy': '#E5E7F466',
                'bg-secondary': '#F5F5FB',
                'btn-green': '#C9F5B8',
                'icon-gray': '#8A8AAB',

                'sm-bg-secondary': '#ECE5E8'
            }
        },
    },
    plugins: [],
}