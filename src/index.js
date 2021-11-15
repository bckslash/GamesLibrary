import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { AppProvider } from "./context";

ReactDOM.render(      // .render by default, .hydrate on server
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
