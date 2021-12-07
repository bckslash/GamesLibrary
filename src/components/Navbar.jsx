import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Link } from "react-router-dom";

import { BiGame } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
	const [hamburgerMenu, setHamburgerMenu] = useState(false);
	const { loginWithRedirect, logout, user, isLoading } = useAuth0();

	useEffect(() => {
		window.addEventListener("resize", () => {
			setHamburgerMenu(false);
		});
		return () => {
			window.removeEventListener("resize", () => {
				return;
			});
		};
	});

	return (
		<nav className="bg-dark transition-all sticky top-0 text-text z-50">
			<div
				className={`px-8 py-4 flex justify-between md:justify-evenly items-center ${
					hamburgerMenu && ""
				}`}
			>
				<Link
					to="/"
					className="text-3xl sm:text-4xl flex items-center font-semibold cursor-pointer hover:animate-pulse rainbow transition-all "
				>
					<BiGame />
					<h1>.LIB</h1>
				</Link>
				<button
					onClick={() => {
						setHamburgerMenu(!hamburgerMenu);
					}}
					className="text-4xl"
				>
					<GiHamburgerMenu
						className={`${
							hamburgerMenu && "transform -rotate-90"
						} transition-transform md:hidden`}
					/>
				</button>
				{hamburgerMenu || <NavbarLinks {...{ hamburgerMenu }} />}

				{/* auth0 buttons */}
				<div className="flex justify-center items-center gap-5">
					{!isLoading && !user && (
						<button
							className="bg-primary py-2 px-4 rounded shadow animation hover:animate-pulse hover:bg-secondary transition-all"
							onClick={() => loginWithRedirect()}
						>
							Log In
						</button>
					)}

					{!isLoading && user && (
						<button
							className="bg-primary py-2 px-4 rounded shadow animation hover:animate-pulse hover:bg-secondary transition-all"
							onClick={() => logout()}
						>
							Log Out
						</button>
					)}

					{user && !hamburgerMenu && (
						<Link to="/profile">
							<div className="w-12 cursor-pointer">
								<img
									className="rounded"
									src={user.picture}
									alt={user.name}
								/>
							</div>
						</Link>
					)}
				</div>
			</div>
			{hamburgerMenu && <NavbarLinks {...{ hamburgerMenu }} />}
		</nav>
	);
}

const NavbarLinks = ({ hamburgerMenu }) => {
	return (
		<ul
			className={`text-lg px-8 py-5 space-y-2 ${
				hamburgerMenu ? "bg-dark absolute w-full" : "hidden"
			} md:flex justify-center items-center md:space-y-0 gap-10`}
		>
			<li>
				<Link
					className="hover:text-gray-500 transition-colors duration-200 hover:animate-pulse"
					to="/"
				>
					HOME
				</Link>
			</li>
			<li>
				<Link
					className="hover:text-gray-500 transition-colors duration-200 hover:animate-pulse"
					to="/games"
				>
					GAMES
				</Link>
			</li>
			<li>
				<Link
					className="hover:text-gray-500 transition-colors duration-200 hover:animate-pulse"
					to="/articles"
				>
					ARTICLES
				</Link>
			</li>
			<li>
				<Link
					className="hover:text-gray-500 transition-colors duration-200 hover:animate-pulse"
					to="/about"
				>
					ABOUT
				</Link>
			</li>
			<li>
				<Link
					className="hover:text-gray-500 transition-colors duration-200 hover:animate-pulse"
					to="/contact"
				>
					CONTACT
				</Link>
			</li>
		</ul>
	);
};

export default Navbar;
