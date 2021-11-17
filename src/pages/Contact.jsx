import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ButtonSubmit from "../components/Button";
import { FunctionalButton } from "../components/Button";

import { RiDeleteBack2Fill } from "react-icons/ri";

function Contact() {
	document.title = "Game Library | Contact";

	const nameContainer = useRef(null);
	const emailContainer = useRef(null);
	const messageContainer = useRef(null);

	const checkboxContainer = useRef(false);
	const likeYesContainer = useRef(false);
	const likeNoContainer = useRef(false);

	const [comments, setComments] = useState(
		localStorage.getItem("comments")
			? JSON.parse(localStorage.getItem("comments"))
			: []
	);

	const [valid, setValid] = useState(true);
	const [sent, setSent] = useState(false);

	const validateName = (name) => {
		const re = /^[^0-9()]+$/;
		return re.test(String(name).toLowerCase());
	};

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
			messageContainer.current.value &&
			checkboxContainer.current.checked
		) {
			if (!validateEmail(emailContainer.current.value)) {
				setValid(false);
				emailContainer.current.value = "";
				return;
			}

			if (!validateName(nameContainer.current.value)) {
				setValid(false);
				nameContainer.current.value = "";
				return;
			}
			const newData = {
				id: createID(),
				name: nameContainer.current.value,
				email: emailContainer.current.value,
				message: messageContainer.current.value,
				date: new Date().toDateString(),
			};

			setComments([...comments, newData]);
			setSent(true);
		}
	};

	const handleRemove = (id) => {
		setComments(
			comments.filter((comment) => {
				return comment.id !== id;
			})
		);
	};

	useEffect(() => {
		setTimeout(() => {
			setValid(true);
			setSent(false);
		}, 5000);
	}, [valid, sent]);

	useEffect(() => {
		localStorage.setItem("comments", JSON.stringify(comments));
		nameContainer.current.value = "";
		emailContainer.current.value = "";
		messageContainer.current.value = "";

		checkboxContainer.current.checked = false;
		likeYesContainer.current.checked = false;
		likeNoContainer.current.checked = false;
	}, [comments]);

	const handleRefresh = () => {
		nameContainer.current.value = "";
		emailContainer.current.value = "";
		messageContainer.current.value = "";

		checkboxContainer.current.checked = false;
		likeYesContainer.current.checked = false;
		likeNoContainer.current.checked = false;
	};

	useEffect(() => {
		nameContainer.current.focus();
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
					<Form
						{...{
							handleSubmit,
							handleRefresh,
							valid,
							sent,
							nameContainer,
							emailContainer,
							likeYesContainer,
							likeNoContainer,
							messageContainer,
							checkboxContainer,
						}}
					/>
					<CommentSection {...{ comments, handleRemove }} />
				</section>
			</main>
			<Footer />
		</>
	);
}

const Form = ({
	handleSubmit,
	handleRefresh,
	valid,
	sent,
	nameContainer,
	emailContainer,
	likeYesContainer,
	likeNoContainer,
	messageContainer,
	checkboxContainer,
}) => {
	return (
		<form
			action="POST"
			data-netlify="true"
			onSubmit={handleSubmit}
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
			<input
				className="bg-transparent border-gray-900 rounded"
				id="name"
				type="text"
				placeholder="NAME*"
				ref={nameContainer}
				required
			/>
			<input
				className="bg-transparent border-gray-900 rounded"
				id="email"
				type="text"
				placeholder="E-MAIL*"
				ref={emailContainer}
				required
			/>
			<div className="flex items-center gap-3 text-white">
				<input
					className="bg-transparent border-2 border-dark cursor-pointer rounded"
					ref={checkboxContainer}
					type="checkbox"
					name="checkbox"
					id="checkbox"
					required
				/>
				<p>I accept the terms of use</p>
			</div>
			<textarea
				className="bg-transparent border-gray-900 rounded h-52"
				id="message"
				type="text"
				placeholder="MESSAGE*"
				ref={messageContainer}
				required
			></textarea>
			<div className="space-y-2 text-left text-white">
				<p>Did you liked the site?</p>
				<div className="space-x-2 text-text">
					<label htmlFor="radio">Yes</label>
					<input
						className="bg-transparent border-2 border-dark cursor-pointer"
						type="radio"
						name="rating"
						id="rating"
						ref={likeYesContainer}
						required
					/>
					<label htmlFor="radio">No</label>
					<input
						className="bg-transparent border-2 border-dark cursor-pointer"
						type="radio"
						name="rating"
						id="rating"
						ref={likeNoContainer}
						required
					/>
				</div>
			</div>
			<div className="space-x-6">
				<ButtonSubmit type="submit">Submit</ButtonSubmit>
				<FunctionalButton fun={handleRefresh}>Refresh</FunctionalButton>
			</div>
		</form>
	);
};

const CommentSection = ({ comments, handleRemove }) => {
	console.log(comments);
	if (comments.length === 0) {
		return (
			<article className="mt-20 space-y-10 text-white">
				<h1 className="mb-10 text-lg md:text-4xl font-semibold text-center text-text">
					No Comments yet {":("}
				</h1>
			</article>
		);
	}

	return (
		<article className="text-white mt-32 flex flex-col gap-10 md:w-6/12 mx-auto">
			<h1 className="text-2xl md:text-4xl font-semibold text-center text-text">
				Comment section
			</h1>
			{comments.map((comment) => {
				return (
					<div
						key={comment.id}
						className="bg-dark rounded-t shadow-lg"
					>
						<div className="border-b py-4 px-4 md:text-lg flex justify-between items-center text-text">
							<button
								onClick={() => handleRemove(comment.id)}
								className="text-2xl md:text-3xl transition-opacity hover:opacity-80"
							>
								<RiDeleteBack2Fill />
							</button>
							<h1>{comment.date}</h1>
						</div>
						<div className="py-2 px-4 space-y-2 bg-primary rounded-b">
							<div>
								<h1>Name: </h1>
								<p className="text-text capitalize">
									{comment.name}
								</p>
							</div>
							<div>
								<h1>Email: </h1>
								<p className="text-text">{comment.email}</p>
							</div>
							<div>
								<h1>Message: </h1>
								<p className="text-text">{comment.message}</p>
							</div>
						</div>
					</div>
				);
			})}
		</article>
	);
};

const ErrorMessage = ({ children }) => {
	return <h4 className="bg-red-800 py-2 rounded text-white">{children}</h4>;
};

const SuccessMessage = ({ children }) => {
	return <h4 className="bg-green-800 py-2 rounded text-white">{children}</h4>;
};

export default Contact;
