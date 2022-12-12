/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "2rem",
				sm: "7rem",
				lg: "8rem",
				xl: "9rem",
				"2xl": "11rem",
			},
		},
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				josefin: ["Josefin Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
