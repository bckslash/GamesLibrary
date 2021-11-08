import React from "react";
import { FaReact } from "react-icons/fa";

function Loading() {
	return (
		<main className="h-screen">
			<section className="page flex flex-col 2xl:flex-row justify-evenly items-center gap-10 space-y-10 2xl:space-y-0 md:gap-0">
				<div className="flex justify-center animate-pulse text-white">
					<FaReact className="text-9xl animate-spin" />
				</div>
			</section>
		</main>
	);
}

export default Loading;
