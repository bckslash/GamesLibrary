import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from "../api/data.json";

import { GameCard } from "../components/GamePreview";

function Games() {
	return (
		<main className="h-semiscreen">
			<Navbar />
			<section className="page grid gap-10 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 items-start">
				{data.map((item) => {
					return <GameCard key={item.id} game={item} />;
				})}
			</section>
			<Footer />
		</main>
	);
}

export default Games;
