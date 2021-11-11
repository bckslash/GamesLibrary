import React from "react";

import { BiGame } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
	return (
		<footer className="bg-dark z-10 p-8 flex flex-col sm:flex-row text-center md:text-left items-center justify-center flex-wrap gap-8 shadow-xl">
			<div
				className="text-3xl sm:text-4xl text-gray-300 flex items-center font-semibold cursor-pointer hover:text-gray-500 transition-color duration-200 hover:animate-pulse rainbow"
				onClick={() => {
					window.scrollTo({
						top: 0,
						left: 0,
						behavior: "smooth",
					});
				}}
			>
				<BiGame />
				<h1>.LIB</h1>
			</div>
			<div className="text-gray-300 object-center md:w-2/5">
				<p className="font-extralight">
					<em className="font-light">
						&#169; 2021 TUKE Robert Smrek Game Library.{" "}
					</em>
					All rights reserved. All trademarks are property of their
					respective owners. MIT Licenced.
				</p>
			</div>
			<ul className="text-gray-300 space-y-4">
				<li className="flex items-center gap-1 hover:text-gray-500 transition-color duration-200">
					<AiFillLinkedin />
					<a
						href="http://www.linkedin.com/in/robertsmrek"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
				</li>
				<li className="flex items-center gap-1 hover:text-gray-500 transition-color duration-200">
					<AiOutlineGithub />
					<a
						href="http://www.github.com/bckslash"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
