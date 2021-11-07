import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Games from "./pages/Games";
import SingleGame from "./pages/SingleGame";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

function App() {
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
				<Route path="/about">
					<About />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="*">
					<ErrorPage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
