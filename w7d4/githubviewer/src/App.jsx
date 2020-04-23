import React, { useState, useEffect } from "react";
import { CommitList } from "./CommitList";
import { CommitForm } from "./CommitForm";
import { useGitHubAPI } from "./hooks/useGitHubAPI";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import useAxiosGet from "./hooks/useAxios";

import "./App.css";

function App() {
	const [name, setName] = useState("Francis");
	const { commits, owner, repo, loading, updateOwnerAndRepo } = useGitHubAPI();
	const scroll = useWindowScrollPosition();

	return (
		<div className="App">
			<h1>{name}'s Github viewer ! ;D</h1>
			<CommitForm updateOwnerAndRepo={updateOwnerAndRepo} />
			<h2>
				Commits for {owner}'s {repo} repo
			</h2>
			<CommitList commits={commits} loading={loading} />
			<p>You scrolled this {scroll.y} amount</p>
		</div>
	);
}

export default App;
