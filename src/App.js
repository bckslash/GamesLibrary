import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Games from "./pages/Games";
import Game from "./pages/Game";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
	return (
		<Router>
			<Switch>
				<Home exact path="/" />
				<Games path="/games">
					<Game path="/games/game" />
				</Games>
				<About path="/about" />
				<Contact path="/contact" />
			</Switch>
		</Router>
	);
}

export default App;
