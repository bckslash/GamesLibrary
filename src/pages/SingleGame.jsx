import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Button from "../components/Button";

import { useGlobalContext } from "../context";

import data from "../api/data.json";

function SingleGame() {
	const { id } = useParams();

	const [game, setGame] = useState(data[id]);

	console.log(game);

	return (
		<main className="h-semiscreen">
			<Navbar />
			<section className="page text-gray-400 flex justify-center">
				<div className="space-y-5 bg-dark p-10 bg-opacity-50 rounded xl:w-4/5">
					<h1 className="text-4xl">{game.title}</h1>
					<div className="flex space-x-10 flex-col 2xl:flex-row">
						<div className="flex flex-col space-y-5 max-w-2xl">
							<video src={game.video.url} controls></video>
							<div className="space-y-2">
								<h1 className="text-xl font-medium">
									About game:
								</h1>
								<p className="">
									{game.description["about-game"]}
								</p>
							</div>
						</div>

						<div className="flex flex-col space-y-5">
							<img src={game.images.url} alt={game.title} />
							<p>{game.description.short}</p>
							<a
								className="text-green-500 bg-dark text-center py-2 rounded shadow-md"
								href={game.links.buy}
								target="_blank"
								rel="noopener noreferrer"
							>
								Buy the game
							</a>
							<table className="text-left w-full text-sm sm:text-base">
								<tbody>
									<tr>
										<th>ALL REVIEWS:</th>
										<td className="capitalize">
											{game.reviews.all}
										</td>
									</tr>
									<tr>
										<th>RELEASE DATE:</th>
										<td className="capitalize">
											{game.release}
										</td>
									</tr>
									<tr>
										<th>DEVELOPER:</th>
										<td className="capitalize">
											{game.creators.developer}
										</td>
									</tr>
								</tbody>
							</table>
							<h1 className="text-xl font-medium">Tags: </h1>
							<div className="flex flex-wrap gap-2 overflow-hidden">
								{game.tags.map((tag) => {
									return (
										<p className="capitalize bg-dark py-1 px-2 rounded shadow">
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
