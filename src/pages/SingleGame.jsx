import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import data from "../api/data.json";

function SingleGame() {
	const { id } = useParams();
	const [readMore, setReadMore] = useState(false);
	const [game, setGame] = useState(data[id]);

	console.log(game);

	return (
		<main className="h-semiscreen">
			<Navbar />
			<section className="page text-gray-300 flex justify-center">
				<div className="space-y-5 bg-dark p-10 bg-opacity-50 rounded xl:w-4/5">
					<h1 className="text-4xl font-medium">{game.title}</h1>
					<div className="flex space-y-15 gap-20 md:gap-10 2xl:gap-0 lg:space-y-0 2xl:space-x-10 flex-col 2xl:flex-row">
						<div className="flex flex-col space-y-5 2xl:max-w-lg">
							<video
								className="shadow-md"
								src={game.video.url}
								controls
							></video>
							<div className="space-y-2">
								<h1 className="text-xl font-medium">
									About game:
								</h1>
								<p className="text-justify text-gray-400 leading-relaxed">
									{!readMore
										? `${game.description["about-game"].slice(0,500)} ...`
										: game.description["about-game"]}
								</p>
								{game.description["about-game"].length >= 500 && 
									<button
										className="bg-primary text-white px-3 py-1 rounded shadow-md capitalize"
										onClick={() => setReadMore(!readMore)}
									>
										{!readMore ? "read more" : "show less"}
									</button>
								}
							</div>
						</div>

						<div className="flex flex-col space-y-5">
							<img
								className="shadow-md"
								src={game.images.url}
								alt={game.title}
							/>
							<p className="text-justify text-gray-400">
								{game.description.short}
							</p>
							<a
								className="text-green-500 bg-dark text-center py-2 rounded shadow-md hover:animate-pulse"
								href={game.links.buy}
								target="_blank"
								rel="noopener noreferrer"
							>
								Buy the game
							</a>
							<table className="text-justify w-full text-sm sm:text-base ">
								<tbody>
									<tr>
										<th>RECENT REVIEWS:</th>
										<td className="capitalize text-gray-400">
											{game.reviews.recent}
										</td>
									</tr>
									<tr>
										<th>ALL REVIEWS:</th>
										<td className="capitalize text-gray-400">
											{game.reviews.all}
										</td>
									</tr>
									<tr>
										<th>RELEASE DATE:</th>
										<td className="capitalize text-gray-400">
											{game.release}
										</td>
									</tr>
									<tr>
										<th>DEVELOPER:</th>
										<td className="capitalize text-gray-400">
											{game.creators.developer}
										</td>
									</tr>
									<tr>
										<th>PUBLISHER:</th>
										<td className="capitalize text-gray-400">
											{game.creators.publisher}
										</td>
									</tr>
								</tbody>
							</table>
							<h1 className="text-xl font-medium">Tags: </h1>
							<div className="flex flex-wrap gap-2 overflow-hidden">
								{game.tags.map((tag) => {
									return (
										<p className="capitalize bg-dark py-1 px-2 rounded shadow flex-grow text-center text-gray-400">
											{tag}
										</p>
									);
								})}
							</div>

							<h1 className="text-xl font-medium">Languages: </h1>
							<div className="flex flex-col gap-2 overflow-hidden">
								{game.languages.subtitles.map((language) => {
									return (
										<p className="capitalize py-1 px-2 shadow border-b">
											{language}
										</p>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}

export default SingleGame;
