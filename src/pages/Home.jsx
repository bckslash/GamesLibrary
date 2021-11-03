import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import GamePreview from "../components/GamePreview";

function Home() {
	return (
		<main className="h-semiscreen">
			<Navbar />
			<section className="page flex flex-col 2xl:flex-row justify-evenly items-center gap-20 md:gap-0">
				<section className="text-gray-300 space-y-5 text-center md:text-left">
					<p className="text-base">Are you done playing ?</p>
					<h1 className="text-4xl font-semibold">
						Explore and review games
					</h1>
					<Link to="/games">
						<button className="bg-dark px-5 py-2 rounded hover:opacity-80 mt-5 transition-opacity duration-200">
							Browse Games
						</button>
					</Link>
				</section>
				<GamePreview />
			</section>
			<Footer />
		</main>
	);
}

export default Home;
