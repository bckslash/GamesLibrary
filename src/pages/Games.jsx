import React, { useRef } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

import { FunctionalButton } from "../components/Button";

import { GameCard } from "../components/GamePreview";

import { useGlobalContext } from "../context";

function Games() {
	document.title = "Game Library | Games";

	const { games, page, setPage, setSearch, count } = useGlobalContext();
	const searchContainer = useRef(null);

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

	const handleSearch = (e) => {
		e.preventDefault();
		setSearch(searchContainer.current.value);
		setPage(1);
	};

	function separator(numb) {
		var str = numb.toString().split(".");
		str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return str.join(".");
	}

	return (
		<>
			<main className="min-h-screen flex flex-col justify-between">
				<Navbar />
				<section className="page flex-1 text-center space-y-20">
					<form
						onSubmit={handleSearch}
						className="border-2 border-dark text-text bg-secondary hover:bg-light hover:text-dark transition-all duration-300 text-2xl flex items-center px-4 py-1 rounded-full"
					>
						<AiOutlineSearch />
						<input
							className="bg-transparent border-0 w-full focus:ring-0 text-xl"
							type="text"
							id="search"
							name="search"
							placeholder={`Search ${separator(count)} games`}
							ref={searchContainer}
						/>
						<span className="text-sm border border-primary px-2 py-1 rounded">
							Enter
						</span>
					</form>

					<div className="grid gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-start">
						<div className="flex flex-col gap-5">
							{games.slice(0, 5).map((game) => {
								return <GameCard key={game.id} game={game} />;
							})}
						</div>
						<div className="flex flex-col gap-5">
							{games.slice(5, 10).map((game) => {
								return <GameCard key={game.id} game={game} />;
							})}
						</div>
						<div className="flex flex-col gap-5">
							{games.slice(10, 15).map((game) => {
								return <GameCard key={game.id} game={game} />;
							})}
						</div>
						<div className="flex flex-col gap-5">
							{games.slice(15, 20).map((game) => {
								return <GameCard key={game.id} game={game} />;
							})}
						</div>
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
