import React, { useState, useContext, useEffect } from "react";

import data from "./api/data.json";
const AppContext = React.createContext();

function AppProvider({ children }) {
	const [number, setNumber] = useState(0);
	const [games] = useState(data);
	const [game, setGame] = useState(games[number]);

	const [loading, setLoading] = useState(true);
	const [APIgames, setAPIgames] = useState({});

	const url = "https://api.rawg.io/api/games?";
	const key = "79fef868b7604333b57ebde17d0922a8";

	const fetchData = async () => {
		setLoading(true);
		try {
			await fetch(`${url}key=${key}`)
				.then((resp) => {
					return resp.json();
				})
				.then((data) => {
					setAPIgames(data);
					setLoading(false);
				});
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, [url]);

	return (
		<AppContext.Provider
			value={{
				games,
				game,
				setGame,
				number,
				setNumber,
				APIgames,
				loading,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
