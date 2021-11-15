module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				dark: "#171A21",
				primary: "#2A475e",
				secondary: "#1b2838",
				lightblue: "#66c0f4",
				light: "#c7d5e0",
				text: "#c5c3c0",
			},
			height: {
				semiscreen: "90vh",
				screenplus: "120vh",
			},
			animation: {
				"spin-slow": "spin 4s linear infinite",
			},
		},
	},
	variants: {
		extend: {
			brightness: ["hover", "focus"],
			animation: ["hover", "focus"],
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
	],
};
