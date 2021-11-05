module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				dark: "#171C26",
				primary: "#164C66",
				secondary: "#142435",
			},
			height: {
				semiscreen: "90vh",
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
