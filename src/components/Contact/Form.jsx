import React, { useState, useRef, useEffect } from "react";

import ButtonSubmit from "../Button";
import { FunctionalButton } from "../Button";

function Form({ comments, setComments }) {
	const nameContainer = useRef(null);
	const emailContainer = useRef(null);
	const messageContainer = useRef(null);

	const checkboxContainer = useRef(false);

	const [valid, setValid] = useState(true);
	const [sent, setSent] = useState(false);

	// const validateName = (name) => {
	// 	const re = /^[^0-9()]+$/;
	// 	return re.test(String(name).toLowerCase());
	// };

	// const validateEmail = (email) => {
	// 	const re =
	// 		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// 	return re.test(String(email).toLowerCase());
	// };

	// const createID = () => {
	// 	return new Date().getTime().toString().slice(-6);
	// };

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	if (
	// 		nameContainer.current.value &&
	// 		emailContainer.current.value &&
	// 		messageContainer.current.value &&
	// 		checkboxContainer.current.checked
	// 	) {
	// 		if (!validateEmail(emailContainer.current.value)) {
	// 			setValid(false);
	// 			emailContainer.current.value = "";
	// 			return;
	// 		}

	// 		if (!validateName(nameContainer.current.value)) {
	// 			setValid(false);
	// 			nameContainer.current.value = "";
	// 			return;
	// 		}
	// 		const newData = {
	// 			id: createID(),
	// 			name: nameContainer.current.value,
	// 			email: emailContainer.current.value,
	// 			message: messageContainer.current.value,
	// 			date: new Date().toDateString(),
	// 		};

	// 		setComments([...comments, newData]);
	// 		setSent(true);
	// 	}
	// };

	const handleRefresh = () => {
		nameContainer.current.value = "";
		emailContainer.current.value = "";
		messageContainer.current.value = "";

		checkboxContainer.current.checked = false;
	};

	useEffect(() => {
		localStorage.setItem("comments", JSON.stringify(comments));
		nameContainer.current.value = "";
		emailContainer.current.value = "";
		messageContainer.current.value = "";

		checkboxContainer.current.checked = false;
	}, [comments]);

	useEffect(() => {
		setTimeout(() => {
			setValid(true);
			setSent(false);
		}, 5000);
	}, [valid, sent]);

	useEffect(() => {
		nameContainer.current.focus();
	}, []);

	return (
		<form
			name="contact"
			method="post"
			// onSubmit={handleSubmit}
			className="flex flex-col gap-5 md:w-6/12 mx-auto text-center"
		>
			<h2 className="mb-10 text-2xl  md:text-4xl font-semibold">
				Send us a feedback
			</h2>
			{valid || (
				<ErrorMessage>Invalid Name or Email Address</ErrorMessage>
			)}

			{sent && (
				<SuccessMessage>
					The Feedback was sent successfully
				</SuccessMessage>
			)}
			<input type="hidden" name="form-name" value="contact" />
			<input
				className="bg-transparent border-gray-900 rounded"
				type="text"
				id="name"
				name="name"
				placeholder="NAME*"
				ref={nameContainer}
				required
			/>
			<input
				className="bg-transparent border-gray-900 rounded"
				type="email"
				id="email"
				name="email"
				placeholder="E-MAIL*"
				ref={emailContainer}
				required
			/>
			<textarea
				className="bg-transparent border-gray-900 rounded h-52"
				id="message"
				name="message"
				placeholder="MESSAGE*"
				ref={messageContainer}
				required
			></textarea>
			<div className="flex items-center gap-3 text-white">
				<input
					className="bg-transparent border-2 border-dark cursor-pointer rounded"
					type="checkbox"
					id="checkbox"
					name="accept-terms"
					ref={checkboxContainer}
					required
				/>
				<p>I accept the terms of use</p>
			</div>
			<div className="space-x-6">
				<ButtonSubmit>
					<input
						className="bg-transparent cursor-pointer"
						type="submit"
						value="Submit"
					/>
				</ButtonSubmit>
				<FunctionalButton fun={handleRefresh}>Refresh</FunctionalButton>
			</div>
		</form>
	);
}

const ErrorMessage = ({ children }) => {
	return <h4 className="bg-red-800 py-2 rounded text-white">{children}</h4>;
};

const SuccessMessage = ({ children }) => {
	return <h4 className="bg-green-800 py-2 rounded text-white">{children}</h4>;
};

export default Form;
