import React from "react";

function Button({ children }) {
	return (
		<button className="bg-dark px-5 py-2 rounded hover:opacity-80 mt-5 transition-opacity duration-200 hover:animate-pulse">
			{children}
		</button>
	);
}

export default Button;
