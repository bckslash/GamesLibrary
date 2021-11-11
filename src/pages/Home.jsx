import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import GamePreview from "../components/GamePreview";
import ButtonMain from "../components/Button";

function Home() {
	document.title = "Game Library";

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
		});
	}, []);

	

	return (
		<main className="min-h-screen flex flex-col justify-between">
			<Navbar />
			<section className="page flex-grow flex flex-col gap-20 lg:flex-row lg:gap-10 justify-evenly items-center">
				<section className="text-gray-300 space-y-5 text-center 2xl:text-left">
					<p className="text-base">Are you done playing ?</p>
					<h1 className="text-4xl font-semibold">
						Explore and review games
					</h1>
					<Link to="/games">
						<ButtonMain>Browse games</ButtonMain>
					</Link>
				</section>
				<GamePreview />
			</section>
			<Footer />
		</main>
	);
}

export default Home;
