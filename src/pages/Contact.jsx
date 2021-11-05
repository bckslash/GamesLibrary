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

	const [valid, setValid] = useState(true);
	const [sent, setSent] = useState(false);

	const validateEmail = (email) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	const createID = () => {
		return new Date().getTime().toString().slice(-6);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			nameContainer.current.value &&
			emailContainer.current.value &&
			messageContainer.current.value
		) {
			if (!validateEmail(emailContainer.current.value)) {
				setValid(false);
				emailContainer.current.value = "";
				return;
			}
			const newData = {
				id: createID(),
				name: nameContainer.current.value,
				email: emailContainer.current.value,
				message: messageContainer.current.value,
			};
			setData({ ...newData });
			setSent(true);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			setValid(true);
			setSent(false);
		}, 5000);
	}, [valid, sent]);

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
					onSubmit={handleSubmit}
					className="flex flex-col gap-5 md:w-6/12 mx-auto text-center text-gray-300"
				>
					<h2 className="text-gray-300 mb-10 text-2xl md:text-4xl font-semibold ">
						Send us a feedback
					</h2>
					{valid || (
						<ErrorMessage>Invalid Email Address</ErrorMessage>
					)}

					{sent && (
						<SuccessMessage>
							The Feedback was sent successfully
						</SuccessMessage>
					)}
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
					<ButtonSubmit type="submit">Submit</ButtonSubmit>
				</form>
			</section>
			<Footer />
		</main>
	);
}

const ErrorMessage = ({ children }) => {
	return <h4 className="bg-red-800 py-2 rounded text-white">{children}</h4>;
};

const SuccessMessage = ({ children }) => {
	return <h4 className="bg-green-800 py-2 rounded text-white">{children}</h4>;
};

export default Contact;
