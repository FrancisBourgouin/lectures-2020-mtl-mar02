import React from "react";
import { Commit } from "./Commit";

export const CommitList = (props) => {
	const { commits: _commits, loading } = props;

	const commits = _commits
		? _commits.map((commit, id) => (
				<Commit
					key={id}
					name={commit.commit.author.name}
					message={commit.commit.message}
					date={commit.commit.author.date}
				/>
		  ))
		: undefined;

	return (
		<div className="Commits">
			<h2>Commit list</h2>
			<ul>{commits}</ul>
			{!commits && !loading && <p>THERE IS NO COMMITS YET</p>}
			{loading && <p>I AM LOADING</p>}
		</div>
	);
};
