import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Loading from "../components/Loading";

import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

import { useFetchKeyless } from "../hooks/useFetch";

import { FunctionalButton } from "../components/Button";

function Articles() {
	document.title = "Game Library | Articles";

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
				<section className="page flex-1">
					<div className="text-text 2xl:px-96 space-y-10">
						<h1 className="text-center text-4xl font-semibold ">
							Articles
						</h1>
						<ArticlesComponent />
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

const ArticlesComponent = () => {
	const url = "https://wt.kpi.fei.tuke.sk/api/article";

	const [page, setPage] = useState(0);
	const [articlesData, setArticlesData] = useState([]);
	const [metaData, setMetaData] = useState([]);

	const [maxArticles, setMaxArticles] = useState(20);

	const { data, loading } = useFetchKeyless(
		`${url}?offset=${page}&max=${maxArticles}`
	);
	const { articles, meta } = data;

	const lastSite = Math.ceil(metaData.totalCount / metaData.max);

	const handlePrev = () => {
		if (page <= 0) {
			return;
		}
		setPage(page - 20);
	};

	const handleNext = () => {
		if (page >= lastSite) {
			return;
		}
		setPage(page + 20);
	};

	useEffect(() => {
		if (!loading) {
			setArticlesData(articles);
			setMetaData(meta);
		}
		if (page >= lastSite) {
			setMaxArticles(10);
		}
		setMaxArticles(20);
	}, [data, loading, articles, metaData, maxArticles, lastSite, meta, page]);

	if (loading) {
		return <Loading />;
	}

	return (
		<section className="text-text space-y-5 space-y-10">
			<article className="space-y-5">
				{loading ||
					articlesData.map((item) => {
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
					{...{ page, setPage, handlePrev, handleNext, lastSite }}
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

const PageButtons = ({ page, setPage, handlePrev, handleNext, lastSite }) => {
	return (
		<div className="text-base md:text-xl 2xl:text-2xl text-center mt-20 space-x-5 flex justify-center items-center text-text">
			{page !== 0 && (
				<FunctionalButton fun={handlePrev}>
					<IoMdArrowDropleft />
				</FunctionalButton>
			)}
			<h1 className="text-xl sm:hidden">Page {page}</h1>
			<div className="hidden sm:flex items-center text-base gap-3">
				{page !== 0 && (
					<FunctionalButton fun={() => setPage(0)}>
						0
					</FunctionalButton>
				)}

				<h1 className="text-xl">Page {page}</h1>

				{page + 1 !== page && page !== lastSite && (
					<FunctionalButton fun={() => setPage(page + 1)}>
						{page + 1}
					</FunctionalButton>
				)}

				{page + 2 !== page && page !== lastSite && (
					<FunctionalButton fun={() => setPage(page + 2)}>
						{page + 2}
					</FunctionalButton>
				)}

				{page + page !== page && page !== lastSite && (
					<FunctionalButton fun={() => setPage(page + page)}>
						{page + page}
					</FunctionalButton>
				)}
				{page + page !== page && page !== lastSite && (
					<FunctionalButton fun={() => setPage(lastSite)}>
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