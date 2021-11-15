import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FaReact } from "react-icons/fa";

function ErrorPage() {
	document.title = "Game Library | Error";

	React.useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
		});
	}, []);

	return (
		<main className="min-h-screen flex flex-col justify-between">
			<Navbar />
			<section className="page flex-1 flex text-light flex-col text-center space-y-10">
				<h1 className="text-4xl font-medium">Nothing here.</h1>
				<div className="flex justify-center animate-pulse">
					<FaReact className="text-9xl animate-spin-slow" />
				</div>
			</section>
			<Footer />
		</main>
	);
}

export default ErrorPage;
