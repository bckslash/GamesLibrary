import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

import { useFetch } from "../hooks/useFetch";

import formatDate from "../utils/formatDate";

function SingleGame() {
	const { id } = useParams();
	const url = `https://api.rawg.io/api/games/${id}?`;

	const { data, loading } = useFetch(url);
	const [readMore, setReadMore] = useState(false);

	document.title = `Game Library | ${data.name}`;

	React.useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
		});
	}, []);

	const readMoreText = () => {
		if (readMore) {
			return data.description_raw;
		} else if (data.description_raw.length >= 500) {
			return `${data.description_raw.slice(0, 500)} ...`;
		} else {
			return data.description_raw;
		}
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<>
			<main className="min-h-screen flex flex-col justify-between">
				<Navbar />
				<section className="page flex-1 text-text flex justify-center">
					<div className="space-y-6 bg-dark p-5 lg:p-10 bg-opacity-50 rounded xl:w-4/5">
						<h1 className="text-4xl font-medium">{data.name}</h1>

						<div className="flex space-y-15 gap-20 md:gap-10 2xl:gap-0 lg:space-y-0 2xl:space-x-10 flex-col 2xl:flex-row">
							<div className="flex flex-col space-y-6 2xl:max-w-lg">
								<Screenshots />
								<div className="space-y-3">
									<h1 className="text-xl font-medium">
										About game:
									</h1>
									<p className="text-justify text-sm md:text-base text-gray-400 leading-relaxed">
										{readMoreText()}
									</p>

									{data.description.length >= 500 && (
										<button
											className="bg-primary text-white px-3 py-1 rounded shadow-md capitalize"
											onClick={() =>
												setReadMore(!readMore)
											}
										>
											{readMore
												? "show less"
												: "read more"}
										</button>
									)}
								</div>
							</div>

							<div className="flex flex-col space-y-6 text-sm md:text-base">
								<img
									className="shadow-md"
									src={data.background_image}
									alt={data.slug}
								/>
								<a
									className="text-green-500 xltext-lg bg-dark text-center py-2 rounded shadow-md hover:animate-pulse"
									href={data.website}
									target="_blank"
									rel="noopener noreferrer"
								>
									Buy the game
								</a>

								{data.metacritic && <Metascore {...{ data }} />}
								<Table {...{ data }} />
								{data.tags && <Tags {...{ data }} />}
								{data.platforms && <Platforms {...{ data }} />}
								{data.genres && <Genres {...{ data }} />}
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

const Metascore = ({ data }) => {
	return (
		<div className="text-green-500 flex justify-start items-center space-x-3">
			<h1 className="w-min p-3 rounded text-sm md:text-2xl border border-green-500">
				{data.metacritic}
			</h1>
			<h1 className="text-sm md:text-2xl uppercase">Metascore</h1>
		</div>
	);
};

const Genres = ({ data }) => {
	return (
		<>
			<h1 className="text-sm md:text-base font-medium">Genres: </h1>
			<div className="flex flex-wrap gap-2 overflow-hidden">
				{data.genres.map((genre) => {
					return (
						<p
							key={genre.id}
							className="capitalize bg-dark py-1 px-2 rounded shadow flex-grow text-center text-text"
						>
							{genre.name}
						</p>
					);
				})}
			</div>
		</>
	);
};

const Tags = ({ data }) => {
	return (
		<>
			<h1 className="text-sm md:text-base font-medium">Tags: </h1>
			<div className="flex flex-wrap gap-2 overflow-hidden text-sm md:text-base">
				{data.tags.map((tag) => {
					return (
						<p
							key={tag.id}
							className="capitalize bg-dark py-1 px-2 rounded shadow flex-grow text-center text-text"
						>
							{tag.name}
						</p>
					);
				})}
			</div>
		</>
	);
};

const Platforms = ({ data }) => {
	return (
		<>
			<h1 className="text-sm md:text-base font-medium">Platforms: </h1>
			<div className="flex flex-wrap gap-2 overflow-hidden text-sm md:text-base">
				{data.platforms.map((item) => {
					return (
						<p
							key={item.platform.id}
							className="capitalize bg-dark py-1 px-2 rounded shadow flex-grow text-center text-text"
						>
							{item.platform.name}
						</p>
					);
				})}
			</div>
		</>
	);
};

const Screenshots = () => {
	const { id } = useParams();
	const url = `https://api.rawg.io/api/games/${id}/screenshots?`;

	const { data, loading } = useFetch(url);
	const [screens, setScreens] = useState([]);

	const { results } = data;
	useEffect(() => {
		if (!loading) {
			setScreens(results);
		}
	}, [data, loading, results]);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<section className="overflow-x-scroll flex gap-2 py-2 snap-container">
			{loading ||
				screens.map((item) => {
					return (
						<img
							className="rounded shadow-md snap-child"
							key={item.id}
							src={item.image}
							alt={`screenshot ${item.id}`}
						/>
					);
				})}
		</section>
	);
};

const Table = ({ data }) => {
	return (
		<table className="text-justify w-full text-sm md:text-base">
			<tbody>
				<tr className="border-b border-gray-500">
					<th>Release date:</th>
					<td className="capitalize text-gray-400">
						{formatDate(data.released)}
					</td>
				</tr>
				<tr className="border-b border-gray-500">
					<th>Developers:</th>
					<td className="capitalize text-gray-400">
						{data.developers.map((item) => {
							return <p key={item.id}>{item.name}</p>;
						})}
					</td>
				</tr>
				<tr className="border-b border-gray-500">
					<th>Publishers:</th>
					<td className="capitalize text-gray-400">
						{data.publishers.map((item) => {
							return <p key={item.id}>{item.name}</p>;
						})}
					</td>
				</tr>
				<tr className="border-b border-gray-500">
					<th>Ratings:</th>
					<td className="capitalize text-gray-400 space-y-1">
						{data.ratings.map((item) => {
							return (
								<div key={item.id} className="flex space-x-2">
									<h3>{item.title}</h3>
									<p>({item.count})</p>
								</div>
							);
						})}
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default SingleGame;
