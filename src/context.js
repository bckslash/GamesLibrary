import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

function AppProvider({ children }) {
	const [number, setNumber] = useState(0);
	const [games, setGames] = useState([]);
	const [game, setGame] = useState({});
	const [search, setSearch] = useState("");

	// eslint-disable-next-line
	const [page, setPage] = useState(1);

	const [loading, setLoading] = useState(true);

	const url = "https://api.rawg.io/api/games?";
	const apiKey = process.env.REACT_APP_RAWG_KEY;

	const fetchData = async () => {
		setLoading(true);
		try {
			await fetch(
				`${url}key=${apiKey}&page=${page}&ordering=${"-relevance"}&page_size=20&search=${search}`
			)
				.then((resp) => {
					return resp.json();
				})
				.then((data) => {
					const { results } = data;
					setGames(results);
					setGame(results[number]);
					setLoading(false);
				});
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url, page, search]);

	return (
		<AppContext.Provider
			value={{
				game,
				setGame,
				number,
				setNumber,
				loading,
				games,
				page,
				setPage,
				setSearch,
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
