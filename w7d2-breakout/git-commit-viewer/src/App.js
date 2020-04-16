import React, { useState } from "react";
import "./App.css";
import commitSource from "./json/master.json";
import { Commit } from "./Commit";
import CommitForm from "./CommitForm";

function App() {
	const [commits, setCommits] = useState(commitSource);

	// const singleCommit = commits[0];
	const commitList = commits.map((commit) => <Commit singleCommit={commit} />);

	const addNewCommit = (newCommit) => {
		const commitToBeAdded = {
			commit: {
				message: newCommit.message,
				committer: {
					name: newCommit.author,
				},
			},
		};

		// commits.push(commitToBeAdded);
		// setTimeout(() => {
		// 	console.log(commits);
		// 	setCommits(commits);
		// }, 2000);

		const updatedCommits = [...commits, commitToBeAdded];
		setTimeout(() => setCommits(updatedCommits), 2000);
	};
	const deleteCommit = (sha) => {};
	return (
		<div className="App">
			<h1>Github commit viewer</h1>
			<CommitForm addNewCommit={addNewCommit} deleteCommit={deleteCommit} />
			{/* <CommitForm {...{ addNewCommit, deleteCommit }} /> */}
			<ul>
				{/* <Commit singleCommit={singleCommit} /> */}
				{commitList}
			</ul>
		</div>
	);
}

export default App;
