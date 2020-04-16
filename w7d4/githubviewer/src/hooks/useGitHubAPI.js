import React, { useState, useEffect } from "react";
import axios from "axios";

// API ADDRESS : https://api.github.com/repos/:owner/:repo/commits
// API ADDRESS : https://api.github.com/repos/:owner/:repo/branches

// FrancisBourgouin
// windows-terminal-color-scheme-builder
// lhl-12-w10d3

export const useGitHubAPI = () => {
	const [repoData, setRepoData] = useState({
		owner: "",
		repo: "",
		commits: [],
		loading: false,
	});
	// const [isLoading, setIsLoading] = useState(false);

	const { owner, repo, commits, loading } = repoData;

	const updateOwnerAndRepo = (owner, repo) => {
		if (owner && repo) {
			setRepoData({ ...repoData, owner, repo });
		}
	};

	const triggerLoading = (status) => {
		setRepoData((prevState) => {
			console.log("triggerLoading", prevState);
			return { ...prevState, loading: status };
		}); //
	};

	useEffect(() => {
		if (owner && repo) {
			console.log("Trigger loading to true");
			triggerLoading(true); // We are loading {owner:F..., repo:acnh..., commits [], loading:false}

			axios
				.get(`https://api.github.com/repos/${owner}/${repo}/commits`)
				.then((response) => {
					setRepoData((prevState) => {
						console.log("repoData in the then response of axios", prevState);
						return {
							...prevState,
							commits: response.data,
						};
					}); // {owner:F..., repo:acnh..., commits []}
				}) // We stop loading
				.catch((err) => console.log(err)) // We stop loading
				.finally(() => {
					console.log("Trigger loading to false in the finally");

					triggerLoading(false);
				});
		}
	}, [owner, repo]);

	return { commits, owner, repo, loading, updateOwnerAndRepo };
};
