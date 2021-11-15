import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

import { useFetch } from "../hooks/useFetch";

function SingleGame() {
	const { id } = useParams();
	const url = `https://api.rawg.io/api/games/${id}?`;

	const [data, loading] = useFetch(url);
	const [readMore, setReadMore] = useState(false);

	document.title = `Game Library | ${data.name}`;

	console.log(data);

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
					<div className="space-y-5 bg-dark p-10 bg-opacity-50 rounded xl:w-4/5">
						<h1 className="text-4xl font-medium">{data.name}</h1>
						<div className="flex space-y-15 gap-20 md:gap-10 2xl:gap-0 lg:space-y-0 2xl:space-x-10 flex-col 2xl:flex-row">
							<div className="flex flex-col space-y-5 2xl:max-w-lg">
								<video
									className="shadow-md"
									src=""
									controls
								></video>
								<div className="space-y-2">
									<h1 className="text-xl font-medium">
										About game:
									</h1>
									<p className="text-justify text-gray-400 leading-relaxed">
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

							<div className="flex flex-col space-y-5">
								<img
									className="shadow-md"
									src={data.background_image}
									alt={data.slug}
								/>
								<a
									className="text-green-500 bg-dark text-center py-2 rounded shadow-md hover:animate-pulse"
									href={data.website}
									target="_blank"
									rel="noopener noreferrer"
								>
									Buy the game
								</a>

								<Table {...{ data }} />

								<h1 className="text-xl font-medium">Tags: </h1>
								<div className="flex flex-wrap gap-2 overflow-hidden">
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
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

const Table = ({ data }) => {
	return (
		<table className="text-justify w-full text-sm sm:text-base">
			<tbody>
				{/* <tr>
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
										<th>PUBLISHER:</th>
										<td className="capitalize text-gray-400">
										{game.creators.publisher}
										</td>
									</tr> */}
				<tr className="border-b border-gray-500">
					<th>DEVELOPERS:</th>
					<td className="capitalize text-gray-400">
						{data.developers.map((item) => {
							return <p key={item.id}>{item.name}</p>;
						})}
					</td>
				</tr>
				<tr className="border-b border-gray-500">
					<th>PUBLISHERS:</th>
					<td className="capitalize text-gray-400">
						{data.publishers.map((item) => {
							return <p key={item.id}>{item.name}</p>;
						})}
					</td>
				</tr>
				<tr className="border-b border-gray-500">
					<th>RATINGS:</th>
					<td className="capitalize text-gray-400 space-y-2">
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
