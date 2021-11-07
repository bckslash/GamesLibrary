import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

import data from "../api/data.json";

import { useGlobalContext } from "../context";

function GamePreview() {
	const { number, setNumber, game, setGame } = useGlobalContext();

	const handlePreview = () => {
		if (number <= 0) {
			setNumber(data.length - 1);
		} else {
			setNumber(number - 1);
		}
	};

	const handleNext = () => {
		if (number >= data.length - 1) {
			setNumber(0);
		} else {
			setNumber(number + 1);
		}
	};

	useEffect(() => {
		setGame(data[number]);
	}, [number, setGame]);

	return (
		<article className="sm:w-9/12 lg:w-3/6 flex justify-center items-center">
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
		<section className="bg-dark text-gray-300 rounded shadow-xl hover:filter saturate-0 brightness-75">
			<Link to={`/game/${game.id}`}>
				<img
					className="rounded-t cursor-pointer w-full"
					src={game.images.url}
					alt={game.title}
				/>
			</Link>
			<section className="p-8 space-y-5 text-center">
				<h1 className="text-center text-2xl font-semibold capitalize">
					{game.title}
				</h1>
				<p
					className={`text-sm sm:text-base text-left ${
						showMore && `hidden`
					} `}
				>
					{game.description.short}
				</p>
				<table
					className={`text-left w-full text-sm sm:text-base ${
						showMore && `hidden`
					}`}
				>
					<tbody>
						<tr>
							<th>ALL REVIEWS:</th>
							<td className="capitalize">{game.reviews.all}</td>
						</tr>
						<tr>
							<th>RELEASE DATE:</th>
							<td className="capitalize">{game.release}</td>
						</tr>
						<tr>
							<th>DEVELOPER:</th>
							<td className="capitalize">
								{game.creators.developer}
							</td>
						</tr>
					</tbody>
				</table>

				<ToggleButton {...{ showMore, setShowMore }} />
			</section>
		</section>
	);
};

const ArrowButtonLeft = ({ handlePreview, children }) => {
	return (
		<button
			onClick={() => handlePreview()}
			className="text-4xl text-gray-300 bg-dark rounded-l py-10 hover:opacity-80 transition-opacity duration-200"
		>
			{children}
		</button>
	);
};

const ArrowButtonRight = ({ handleNext, children }) => {
	return (
		<button
			onClick={handleNext}
			className="text-4xl text-gray-300 bg-dark rounded-r py-10 hover:opacity-80 transition-opacity duration-200"
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
