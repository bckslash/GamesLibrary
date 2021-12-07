import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

import { AppProvider } from "./context";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

ReactDOM.render(
	// .render by default, .hydrate on server
	<Router>
		<Auth0ProviderWithHistory>
			<AppProvider>
				<App />
			</AppProvider>
		</Auth0ProviderWithHistory>
	</Router>,
	document.getElementById("root")
);
