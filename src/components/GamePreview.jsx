import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

import { useGlobalContext } from "../context";

function GamePreview() {
	const { number, setNumber, game, setGame, games } = useGlobalContext();

	const handlePreview = () => {
		if (number <= 0) {
			setNumber(games.length - 1);
		} else {
			setNumber(number - 1);
		}
	};

	const handleNext = () => {
		if (number >= 10) {
			setNumber(0);
		} else {
			setNumber(number + 1);
		}
	};

	useEffect(() => {
		setGame(games[number]);
	}, [number, setGame, games]);

	return (
		<article className="sm:w-9/12 lg:w-1/3 flex justify-between items-center transform">
			<ArrowButtonLeft handlePreview={handlePreview}>
				<IoMdArrowDropleft />
			</ArrowButtonLeft>

			<GameCard game={game} />

			<ArrowButtonRight handleNext={handleNext}>
				<IoMdArrowDropright />
			</ArrowButtonRight>
		</article>
	);
}

export const GameCard = ({ game }) => {
	const [showMore, setShowMore] = useState(true);

	return (
		<section className="bg-dark flex-1 text-text rounded shadow-xl hover:filter saturate-0 brightness-75 transform hover:scale-105 z-10 transition-transform">
			<img
				className="rounded-t w-full"
				src={game.background_image}
				alt={game.name}
			/>
			<section className="p-8 space-y-5 text-center">
				<Link to={`/game/${game.id}`}>
					<h1 className="text-center text-2xl font-semibold capitalize hover:opacity-50 transition-opacity cursor-pointer">
						{game.name}
					</h1>
				</Link>
				<Table {...{ showMore, game }} />
				<ToggleButton {...{ showMore, setShowMore }} />
			</section>
		</section>
	);
};

const Table = ({ showMore, game }) => {
	return (
		<table
			className={`text-left w-full text-sm sm:text-base ${
				showMore && `hidden`
			}`}
		>
			<tbody className="">
				<tr className="border-b border-gray-500">
					<th>RATING:</th>
					<td className="capitalize">{game.rating}</td>
				</tr>
				<tr className="border-b border-gray-500">
					<th>RELEASE DATE:</th>
					<td className="capitalize">{game.released}</td>
				</tr>
				<tr className="border-b border-gray-500">
					<th>GENRES</th>
					<td className="capitalize flex space-x-2">
						{game.genres.map((item) => {
							return <h1 key={item.id}>{item.name}</h1>;
						})}
					</td>
				</tr>
			</tbody>
		</table>
	);
};

const ArrowButtonLeft = ({ handlePreview, children }) => {
	return (
		<button
			onClick={() => handlePreview()}
			className="text-4xl text-text bg-dark rounded-l py-10 hover:opacity-80 transition-opacity duration-200"
		>
			{children}
		</button>
	);
};

const ArrowButtonRight = ({ handleNext, children }) => {
	return (
		<button
			onClick={handleNext}
			className="text-4xl text-text bg-dark rounded-r py-10 hover:opacity-80 transition-opacity duration-200"
		>
			{children}
		</button>
	);
};

const ToggleButton = ({ showMore, setShowMore }) => {
	return (
		<button
			onClick={() => {
				setShowMore(!showMore);
			}}
			className="bg-primary mx-auto px-3 py-1 rounded shadow-xl text-white hover:opacity-80 transition-opacity duration-200"
		>
			{showMore ? "Read More" : "Show less"}
		</button>
	);
};

export default GamePreview;
