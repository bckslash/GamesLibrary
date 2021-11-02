import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import GamePreview from "../components/GamePreview";

function Home() {
	return (
		<main className="h-screen">
			<Navbar />
			<section className="min-h-full px-10 py-20 sm:px-0 sm:py-0 bg-gradient-to-b from-primary to-secondary flex flex-col 2xl:flex-row justify-evenly items-center gap-20 md:gap-0">
				<section className="text-gray-300 space-y-5">
					<p className="text-base">Are you done playing ?</p>
					<h1 className="text-4xl font-semibold">
						Explore and review games
					</h1>
					<button className="bg-dark px-5 py-2 rounded hover:opacity-80 ">
						<Link to="/games">Browse Games</Link>
					</button>
				</section>
				<GamePreview />
			</section>
		</main>
	);
}

export default Home;
