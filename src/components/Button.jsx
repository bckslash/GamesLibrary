import React from "react";

function Button({ children }) {
	return (
		<button className="bg-dark text-light px-5 py-2 rounded hover:opacity-80 mt-5 transition-opacity duration-200 hover:animate-pulse">
			{children}
		</button>
	);
}

export const FunctionalButton = ({ fun, children }) => {
	return (
		<button
			onClick={fun}
			className="bg-dark text-light px-5 py-2 rounded hover:opacity-80 transition-opacity duration-200 hover:animate-pulse"
		>
			{children}
		</button>
	);
};

export default Button;
