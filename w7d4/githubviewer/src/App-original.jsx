import React, { useState, useEffect } from "react";
import { CommitList } from "./CommitList";
import { CommitForm } from "./CommitForm";

import axios from "axios";
import "./App.css";

// API ADDRESS : https://api.github.com/repos/:owner/:repo/commits
// API ADDRESS : https://api.github.com/repos/:owner/:repo/branches

// FrancisBourgouin
// windows-terminal-color-scheme-builder
// lhl-12-w10d3

function App() {
	const [name, setName] = useState("Francis");
	const [repoData, setRepoData] = useState({
		owner: "FrancisBourgouin",
		repo: "windows-terminal-color-scheme-builder",
		commits: [],
	});
	const { owner, repo, commits } = repoData;

	useEffect(() => {
		axios
			.get(
				`https://api.github.com/repos/${repoData.owner}/${repoData.repo}/commits`
			)
			.then((data) => setRepoData({ ...repoData, commits: data.data }))
			.catch((err) => console.log(err));
	}, []);

	const updateOwnerAndRepo = (owner, repo) => {
		if (owner && repo) {
			setRepoData({ ...repoData, owner, repo });
		}
	};

	return (
		<div className="App">
			<h1>{name}'s Github viewer ! ;D</h1>
			<CommitForm updateOwnerAndRepo={updateOwnerAndRepo} />
			<CommitList commits={commits} />
		</div>
	);
}

export default App;
