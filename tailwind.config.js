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
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
