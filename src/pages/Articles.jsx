import React, { useEffect, useState, useRef } from "react";

import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Loading from "../components/Loading";

import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

import { FunctionalButton } from "../components/Button";

function Articles() {
	document.title = "Game Library | Articles";

	const [select, setSelect] = useState("latest");

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
		});
	}, []);

	return (
		<>
			<main className="min-h-screen flex flex-col justify-between">
				<Navbar />
				<section className="page flex-1 flex justify-center items-center">
					<div className="text-text space-y-16 md:w-4/5 xl:w-2/4">
						<h1 className="text-center text-4xl font-semibold ">
							Articles
						</h1>
						<div className="space-y-10">
							<AddComment />
							<div className="space-y-5">
								<div className="text-right">
									<select
										id="articles"
										className="bg-transparent border-gray-900 rounded"
										onChange={(e) =>
											setSelect(e.target.value)
										}
									>
										<option
											value="latest"
											className="bg-primary"
										>
											Latest
										</option>
										<option
											value="default"
											className="bg-primary"
										>
											All
										</option>
									</select>
								</div>
								{select === "latest" ? (
									<Latest />
								) : (
									<ArticlesComponent />
								)}
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

const Latest = () => {
	const url = "https://wt.kpi.fei.tuke.sk/api/article";

	const [articles, setArticles] = useState([]);
	const [meta, setMeta] = useState([]);

	const [maxArticles] = useState(50);
	const [page, setPage] = useState(1);

	useEffect(() => {
		axios
			.get(`${url}?offset=${page}&max=${maxArticles}`)
			.then((res) => {
				const { articles, meta } = res.data;
				setArticles(articles.reverse());
				setMeta(meta);
				setPage(meta.totalCount - maxArticles);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [url, page, maxArticles]);

	if (!articles && !meta) {
		return <Loading />;
	}

	return (
		<section className="text-text space-y-5 space-y-10">
			<article className="space-y-5">
				{articles.map((item) => {
					return (
						<div
							key={item.id}
							className="bg-dark p-6 shadow-md rounded-md space-y-5"
						>
							<div className="flex justify-between flex-wrap gap-1 border-b border-gray-400 pb-3 text-text font-light">
								<h3 className="capitalize flex-1">
									{item.author}
								</h3>
								<h3>{item.dateCreated}</h3>
							</div>
							<div className="space-y-3">
								<h1 className="capitalize font-light">
									<div className="font-medium">Message:</div>
									{item.title}
								</h1>
								{item.imageLink && (
									<img
										className="rounded w-1/2 shadow"
										src={item.imageLink}
										alt={item.title}
									/>
								)}
							</div>
							{item.tags.length > 0 && <Tags {...{ item }} />}
						</div>
					);
				})}
			</article>
		</section>
	);
};

const AddComment = () => {
	const url = "https://wt.kpi.fei.tuke.sk/api/article";

	const nameContainer = useRef(null);
	const bodyContainer = useRef(null);
	const tagsContainer = useRef(null);
	const imageContainer = useRef(null);

	const createPost = async () => {
		await axios
			.post(url, {
				author: nameContainer.current.value,
				title: bodyContainer.current.value,
				tags:
					tagsContainer.current.value.split(" ").length >= 2
						? tagsContainer.current.value.split(" ")
						: tagsContainer.current.value,
				imageLink: imageContainer.current.value,
			})
			.then((res) => {
				console.log(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleClick = () => {
		createPost();
	};

	const { user, isLoading } = useAuth0();
	useEffect(() => {
		if (user && !isLoading) {
			nameContainer.current.value = user.name;
		}
	}, [user, isLoading]);

	return (
		<form className="flex flex-col gap-5 mx-auto text-center">
			<input
				className="bg-transparent border-gray-900 rounded"
				type="text"
				id="name"
				name="name"
				placeholder="NAME"
				ref={nameContainer}
				required
			/>
			<textarea
				className="bg-transparent border-gray-900 rounded h-52"
				id="message"
				name="message"
				placeholder="MESSAGE"
				ref={bodyContainer}
				required
			></textarea>
			<input
				className="bg-transparent border-gray-900 rounded"
				type="url"
				id="url"
				name="url"
				placeholder="IMAGE URL"
				ref={imageContainer}
			/>
			<input
				className="bg-transparent border-gray-900 rounded"
				type="text"
				id="tags"
				name="tsgs"
				placeholder="TAGS"
				ref={tagsContainer}
			/>
			<FunctionalButton fun={handleClick}>
				Submit article
			</FunctionalButton>
		</form>
	);
};

const ArticlesComponent = () => {
	const url = "https://wt.kpi.fei.tuke.sk/api/article";

	const [loading, setLoading] = useState(true);

	const [articles, setArticles] = useState([]);
	const [meta, setMeta] = useState([]);

	const [maxArticles] = useState(20);
	const [page, setPage] = useState(0);

	const lastSite = Math.ceil(meta.totalCount / meta.max);

	const handlePrev = () => {
		if (page / maxArticles <= 0) {
			return;
		}
		setPage(Math.ceil(page - maxArticles));
	};

	const handleNext = () => {
		if (page / maxArticles >= lastSite) {
			return;
		}
		setPage(Math.ceil(page + maxArticles));
	};

	useEffect(() => {
		setLoading(true);
		axios
			.get(`${url}?offset=${page}&max=${maxArticles}`)
			.then((res) => {
				const { articles, meta } = res.data;
				setArticles(articles.reverse());
				setMeta(meta);
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setLoading(false);
			});
	}, [url, page, maxArticles]);

	if (loading) {
		return <Loading />;
	}

	return (
		<section className="text-text space-y-5 space-y-10">
			<article className="space-y-5">
				{loading ||
					articles.map((item) => {
						return (
							<div
								key={item.id}
								className="bg-dark p-6 shadow-md rounded-md space-y-5"
							>
								<div className="flex justify-between flex-wrap gap-1 border-b border-gray-400 pb-3 text-text font-light">
									<h3 className="capitalize flex-1">
										{item.author}
									</h3>
									<h3>{item.dateCreated}</h3>
								</div>
								<div className="space-y-3">
									<h1 className="capitalize font-light">
										<div className="font-medium">
											Message:
										</div>
										{item.title}
									</h1>
									{item.imageLink && (
										<img
											className="rounded w-1/2 shadow"
											src={item.imageLink}
											alt={item.title}
										/>
									)}
								</div>
								{item.tags.length > 0 && <Tags {...{ item }} />}
							</div>
						);
					})}
				<PageButtons
					{...{
						page,
						setPage,
						handlePrev,
						handleNext,
						lastSite,
						maxArticles,
					}}
				/>
			</article>
		</section>
	);
};

const Tags = ({ item }) => {
	return (
		<>
			{item.tags && (
				<div className="text-text border-t border-gray-400 pt-3">
					<h1 className="font-medium">Tags:</h1>
					{item.tags.map((tag, index) => {
						return (
							<div key={index}>
								<p className="font-light">{tag}</p>
							</div>
						);
					})}
				</div>
			)}
		</>
	);
};

const PageButtons = ({
	page,
	setPage,
	handlePrev,
	handleNext,
	lastSite,
	maxArticles,
}) => {
	return (
		<div className="text-base md:text-xl 2xl:text-2xl text-center mt-20 space-x-5 flex justify-center items-center text-text">
			{page !== 0 && (
				<FunctionalButton fun={handlePrev}>
					<IoMdArrowDropleft />
				</FunctionalButton>
			)}
			<div className="hidden sm:flex items-center text-base gap-3">
				{page !== 0 && (
					<FunctionalButton fun={() => setPage(0)}>
						0
					</FunctionalButton>
				)}
				<h1 className="text-xl">Page {page / maxArticles}</h1>
				{page + page !== page && page !== lastSite && (
					<FunctionalButton
						fun={() => setPage(lastSite * maxArticles)}
					>
						{lastSite}
					</FunctionalButton>
				)}
			</div>
			{page !== lastSite && (
				<FunctionalButton fun={handleNext}>
					<IoMdArrowDropright />
				</FunctionalButton>
			)}
		</div>
	);
};

export default Articles;
