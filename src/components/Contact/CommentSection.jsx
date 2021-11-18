import React from "react";

import { RiDeleteBack2Fill } from "react-icons/ri";

function CommentSection({ comments, setComments }) {
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

	const handleRemove = (id) => {
		setComments(
			comments.filter((comment) => {
				return comment.id !== id;
			})
		);
	};

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
}

export default CommentSection;
