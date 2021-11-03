import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
	const handleSubmit = () => {};

	return (
		<main className="h-semiscreen">
			<Navbar />
			<section className="page">
				<form className="flex flex-col gap-5 md:w-6/12 mx-auto text-center">
					<h2 className="text-gray-300 mb-10 text-2xl md:text-4xl font-semibold ">
						Send us a feedback
					</h2>
					<input
						className="bg-transparent border-gray-900 rounded"
						id="name"
						type="text"
						placeholder="NAME"
						required
					/>
					<input
						className="bg-transparent border-gray-900 rounded"
						id="email"
						type="text"
						placeholder="E-MAIL"
						required
					/>
					<textarea
						className="bg-transparent border-gray-900 rounded h-80"
						id="message"
						type="text"
						placeholder="MESSAGE"
						required
					></textarea>
					<button
						className=" bg-dark text-gray-300 py-3 rounded shadow-lg hover:opacity-80 transition-opacity duration-200"
						type="submit"
					>
						Submit !
					</button>
				</form>
			</section>
			<Footer />
		</main>
	);
}

export default Contact;
