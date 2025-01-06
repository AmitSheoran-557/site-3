/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./index.html",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#39ff14',  
                'neon-green': '#39ff14',  
            },
            backgroundImage:{
                "bg-img":"assets/images/png/site-3-profile-img.jpg"
            }
        },
    },
    plugins: [],
};
