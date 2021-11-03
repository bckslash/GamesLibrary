import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from "../api/data.json";

import Game from "../pages/Game";
import { GameCard } from "../components/GamePreview";

function Games() {
	return (
		<main className="h-semiscreen">
			<Navbar />
			<section className="page grid grid-cols-1 gap-10 2xl:grid-cols-2 ">
				{data.map((item) => {
					return <GameCard key={item._id} game={item} />;
				})}
			</section>
			<Footer />
		</main>
	);
}

export default Games;
