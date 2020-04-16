import React from "react";

export const Commit = (props) => {
	const { message, committer } = props.singleCommit.commit;

	return (
		<li>
			<h1>{message}</h1>
			<h2>By : {committer.name}</h2>
		</li>
	);
};
