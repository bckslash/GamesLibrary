import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

import { FunctionalButton } from "../components/Button";

import { GameCard } from "../components/GamePreview";

import { useGlobalContext } from "../context";

function Games() {
	document.title = "Game Library | Games";

	const { games, page, setPage } = useGlobalContext();

	React.useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
		});
	}, []);

	const handlePrev = () => {
		if (page === 1) return;
		setPage(page - 1);
	};

	const handleNext = () => {
		setPage(page + 1);
	};

	return (
		<>
			<main className="min-h-screen flex flex-col justify-between">
				<Navbar />
				<section className="page flex-1 text-center">
					<div className="grid gap-5 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 items-start">
						{games.map((game) => {
							return <GameCard key={game.id} game={game} />;
						})}
					</div>
					<div className="text-base md:text-xl 2xl:text-2xl text-center mt-20 space-x-5 flex justify-center items-center text-light">
						<FunctionalButton fun={handlePrev}>
							<IoMdArrowDropleft />
						</FunctionalButton>
						<h1>Page {page}</h1>
						<FunctionalButton fun={handleNext}>
							<IoMdArrowDropright />
						</FunctionalButton>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default Games;
