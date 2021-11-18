import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Form from "../components/Contact/Form";
import CommentSection from "../components/Contact/CommentSection";

function Contact() {
	document.title = "Game Library | Contact";

	const [comments, setComments] = useState(
		localStorage.getItem("comments")
			? JSON.parse(localStorage.getItem("comments"))
			: []
	);

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
				<section className="page flex-1 text-text">
					<Form {...{ comments, setComments }} />
					<CommentSection {...{ comments, setComments }} />
				</section>
			</main>
			<Footer />
		</>
	);
}

export default Contact;
