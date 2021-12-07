import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Games from "./pages/Games";
import SingleGame from "./pages/SingleGame";
import Articles from "./pages/Articles";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Profile from "./pages/Profile";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Loading from "./components/Loading";
import { useGlobalContext } from "./context";

function App() {
	const { loading } = useGlobalContext();

	if (loading) {
		return (
			<Router>
				<Navbar />
				<Loading />
				<Footer />
			</Router>
		);
	}

	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/games">
					<Games />
				</Route>
				<Route path="/game/:id">
					<SingleGame />
				</Route>
				<Route path="/articles">
					<Articles />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/profile">
					<Profile />
				</Route>
				<Route path="*">
					<ErrorPage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
