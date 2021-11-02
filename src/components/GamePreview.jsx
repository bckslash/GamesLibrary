import React from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

function GamePreview() {
	return (
		<article className="">
			<section className="bg-dark text-gray-300 rounded flex flex-col sm:w-2/4">
				<div className="block">
					<img
						className="object-cover rounded-t sm:rounded-l sm:rounded-t-none h-full"
						src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-CtlUjO7zNSk%2FWRuLgCNeFuI%2FAAAAAAAAFJw%2FZao8Duybd2cXmEGaof2YDROazd9Yn-klgCHM%2Fw1200-h630-p-k-no-nu%2Fgta-v-wallpaper-1080p-hd-wallpapersafari.jpg&f=1&nofb=1"
						alt="cover image"
					/>
				</div>
				<section className="px-8 py-10 space-y-5">
					<h1 className="text-center text-2xl font-semibold">
						Grand Theft Auto V
					</h1>
					<p className="text-sm sm:text-base">
						Grand Theft Auto V for PC offers players the option to
						explore the award-winning world of Los Santos and Blaine
						County in resolutions of up to 4k and beyond, as well as
						the chance to experience the game running at 60 frames
						per second.
					</p>
					<table className="text-left w-full text-sm sm:text-base">
						<tr>
							<th>ALL REVIEWS:</th>
							<td>Very Positive</td>
						</tr>
						<tr>
							<th>RELEASE DATE:</th>
							<td>14 Apr, 2015</td>
						</tr>
						<tr>
							<th>DEVELOPER:</th>
							<td>Rockstar North</td>
						</tr>
					</table>
				</section>
			</section>
			<div className="">
				<IoMdArrowDropleft className="text-8xl -left-10 " />
				<IoMdArrowDropright className="text-8xl" />
			</div>
		</article>
	);
}

export default GamePreview;
