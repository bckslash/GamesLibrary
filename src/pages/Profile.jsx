import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FaReact } from "react-icons/fa";

import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
	document.title = "Game Library | Profile";

	const { user } = useAuth0();

	React.useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
		});
	}, []);

	if (!user) {
		return (
			<main className="min-h-screen flex flex-col justify-between">
				<Navbar />
				<section className="page flex-1 flex text-light flex-col text-center space-y-10">
					<h1 className="text-4xl font-medium">
						No user logged in. Please Log In.
					</h1>
					<div className="flex justify-center animate-pulse">
						<FaReact className="text-9xl animate-spin-slow" />
					</div>
				</section>
				<Footer />
			</main>
		);
	}

	return (
		<>
			<main className="min-h-screen flex flex-col justify-between">
				<Navbar />
				<section className="page flex-1">
					<div className="text-text 2xl:px-40 space-y-10">
						<div className="flex gap-5 md:gap-10 justify-start items-center flex-wrap">
							<img
								className="rounded-full"
								src={user.picture}
								alt={user.name}
							/>
							<div>
								<h1 className="text-3xl text-light">
									{user.name}
								</h1>
								<h3 className="text-text">{user.email}</h3>
							</div>
						</div>
						<div className="bg-dark px-10 py-5 rounded shadow text-left overflow-x-scroll">
							<pre>{JSON.stringify(user, null, 2)}</pre>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default Profile;
