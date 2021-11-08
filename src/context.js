import React, { useState, useContext } from "react";

import data from "./api/data.json";
const AppContext = React.createContext();

function AppProvider({ children }) {
	const [number, setNumber] = useState(0);
	const [games] = useState(data);
	const [game, setGame] = useState(games[number]);

	return (
		<AppContext.Provider
			value={{ games, game, setGame, number, setNumber }}
		>
			{children}
		</AppContext.Provider>
	);
}

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
