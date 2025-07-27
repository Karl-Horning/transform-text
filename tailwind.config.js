export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                night: {
                    900: "#0d1117",
                    800: "#161b22",
                    100: "#c9d1d9",
                },
            },
        },
    },
    plugins: [],
};
