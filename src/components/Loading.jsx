import React from "react";
import { FaReact } from "react-icons/fa";

function Loading() {
	return (
		<main className="min-h-screen flex flex-col justify-between">
			<section className="page flex-1 flex flex-col justify-evenly items-center">
				<div className="flex justify-center animate-pulse text-white">
					<FaReact className="text-9xl animate-spin" />
				</div>
			</section>
		</main>
	);
}

export default Loading;
