import React from "react";
import { Link } from "react-router-dom";
import { BiGame } from "react-icons/bi";

function Navbar() {
	return (
		<div className="bg-dark flex sm:px-5 py-7 justify-evenly flex-wrap sm:space-x-40 space-y-5 sm:space-y-0 gap-3 shadow-xl sticky top-0 w-full">
			<Link
				to="/"
				className="text-3xl sm:text-4xl text-gray-300 flex items-center font-semibold cursor-pointer hover:animate-pulse rainbow "
			>
				<BiGame />
				<h1>.LIB</h1>
			</Link>
			<ul className="text-gray-300 mx-10 text-sm sm:text-lg flex items-center justify-center space-x-10 flex-wrap">
				<li className="hover:text-gray-500 transition-colors duration-200 hover:animate-pulse">
					<Link to="/">HOME</Link>
				</li>
				<li className="hover:text-gray-500 transition-colors duration-200 hover:animate-pulse">
					<Link to="/games">GAMES</Link>
				</li>
				<li className="hover:text-gray-500 transition-colors duration-200 hover:animate-pulse">
					<Link to="/about">ABOUT</Link>
				</li>
				<li className="hover:text-gray-500 transition-colors duration-200 hover:animate-pulse">
					<Link to="/contact">CONTACT</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
