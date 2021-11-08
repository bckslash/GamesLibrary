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
		<main className="h-semiscreen">
			<Navbar />
			<section className="page text-gray-300 text-center space-y-10">
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
