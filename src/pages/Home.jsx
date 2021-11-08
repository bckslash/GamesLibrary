import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import GamePreview from "../components/GamePreview";
import ButtonMain from "../components/Button";

import Loading from "../components/Loading";

import { useGlobalContext } from "../context";

function Home() {
	document.title = "Game Library";

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
		});
	}, []);

	const { loading } = useGlobalContext();

	if (loading) {
		return <Loading />;
	}

	return (
		<main className="h-semiscreen">
			<Navbar />
			<section className="page flex flex-col 2xl:flex-row justify-evenly items-center gap-10 space-y-10 2xl:space-y-0 md:gap-0">
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
