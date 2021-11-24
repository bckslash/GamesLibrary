import { useState, useEffect } from "react";

export const useFetch = (url) => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	const key = process.env.REACT_APP_RAWG_KEY;

	const fetchData = async () => {
		setLoading(true);
		try {
			await fetch(`${url}key=${key}`)
				.then((resp) => {
					return resp.json();
				})
				.then((data) => {
					setData(data);
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
	}, [url]);

	return { data, loading };
};

export const useFetchKeyless = (url) => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		setLoading(true);
		try {
			await fetch(url)
				.then((resp) => {
					return resp.json();
				})
				.then((data) => {
					setData(data);
					setLoading(false);
				});
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();

		return () => {
			fetchData()
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url]);

	return { data, loading };
};
