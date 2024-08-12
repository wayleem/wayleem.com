export const colors = {
	home: {
		primary: "#BAFFC9", // Pastel Green
		secondary: "#D1FFD9", // Lighter Pastel Green
		background: "#E8FFEC", // Very Light Pastel Green
	},
	about: {
		primary: "#BAE1FF", // Pastel Blue
		secondary: "#D1EAFF", // Lighter Pastel Blue
		background: "#E8F4FF", // Very Light Pastel Blue
	},
	skills: {
		primary: "#FFFFBA", // Pastel Yellow
		secondary: "#FFFFD1", // Lighter Pastel Yellow
		background: "#FFFFE8", // Very Light Pastel Yellow
	},
	projects: {
		primary: "#FFDFBA", // Pastel Orange
		secondary: "#ffd4a6", // Lighter Pastel Orange
		background: "#FFF4E8", // Very Light Pastel Orange
	},
	articles: {
		primary: "#FFB3BA", // Pastel Pink
		secondary: "#ff99a6", // Lighter Pastel Pink
		background: "#FFE8EC", // Very Light Pastel Pink
	},
	contact: {
		primary: "#E1BAFF", // Pastel Purple
		secondary: "#EACFFF", // Lighter Pastel Purple
		background: "#F4E8FF", // Very Light Pastel Purple
	},
};
export type ColorKey = keyof typeof colors;
export type ColorProperty = keyof typeof colors.home;
