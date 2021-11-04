import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ButtonSubmit from "../components/Button";

function Contact() {
	const nameContainer = useRef(null);
	const emailContainer = useRef(null);
	const messageContainer = useRef(null);

	const [data, setData] = useState({
		id: "",
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			nameContainer.current.value &&
			emailContainer.current.value &&
			messageContainer.current.value
		) {
			const newData = {
				id: new Date().getTime().toString(),
				name: nameContainer.current.value,
				email: emailContainer.current.value,
				message: messageContainer.current.value,
			};
			setData({ ...newData });
		}
	};

	useEffect(() => {
		localStorage.setItem(data.id, JSON.stringify(data));
		nameContainer.current.value = "";
		emailContainer.current.value = "";
		messageContainer.current.value = "";
	}, [data]);

	useEffect(() => {
		nameContainer.current.focus();
	}, []);

	return (
		<main className="h-semiscreen">
			<Navbar />
			<section className="page">
				<form
					onClick={handleSubmit}
					className="flex flex-col gap-5 md:w-6/12 mx-auto text-center text-gray-300"
				>
					<h2 className="text-gray-300 mb-10 text-2xl md:text-4xl font-semibold ">
						Send us a feedback
					</h2>
					<input
						className="bg-transparent border-gray-900 rounded"
						id="name"
						type="text"
						placeholder="NAME"
						ref={nameContainer}
						required
					/>
					<input
						className="bg-transparent border-gray-900 rounded"
						id="email"
						type="text"
						placeholder="E-MAIL"
						ref={emailContainer}
						required
					/>
					<textarea
						className="bg-transparent border-gray-900 rounded h-80"
						id="message"
						type="text"
						placeholder="MESSAGE"
						ref={messageContainer}
						required
					></textarea>
					<ButtonSubmit>Submit</ButtonSubmit>
				</form>
			</section>
			<Footer />
		</main>
	);
}

export default Contact;
