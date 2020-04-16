import React, { useState, useEffect } from "react";
import axios from "axios";

const useAxiosGet = () => {
	const [state, setState] = useState({
		url: "",
		loading: false,
		result: undefined,
	});

	const { url, loading, result } = state;

	useEffect(() => {
		if (url) {
			setState((prev) => ({ ...prev, loading: true }));
			axios
				.get(url)
				.then((res) =>
					setState((prev) => ({ ...prev, result: res.data, loading: false }))
				);
		}
	}, [url]);

	return [
		state.url,
		state.loading,
		state.result,
		(url) => setState((prev) => ({ ...prev, url })),
	];
};

export default useAxiosGet;
