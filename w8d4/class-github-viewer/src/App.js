import React from "react";
import "./App.css";
import CommitForm from "./CommitForm";
import { CommitList } from "./CommitList";
import Axios from "axios";

// API ADDRESS : https://api.github.com/repos/:owner/:repo/commits
// API ADDRESS : https://api.github.com/repos/:owner/:repo/branches

// FrancisBourgouin
// windows-terminal-color-scheme-builder
// lhl-12-w10d3

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "Francis",
			owner: "",
			repo: "",
			commits: [],
			editActive: false,
		};
	}

	updateOwnerAndRepo = (owner, repo) => {
		this.setState({ ...this.state, owner, repo });
	};

	toggleEditActiveValue = () => {
		this.setState({ ...this.state, editActive: !this.state.editActive });
	};

	componentDidUpdate(prevProps, prevState) {
		if (
			prevState.owner !== this.state.owner ||
			prevState.repo !== this.state.repo
		) {
			Axios.get(
				`https://api.github.com/repos/${this.state.owner}/${this.state.repo}/commits`
			)
				.then((res) =>
					this.setState((prev) => ({ ...prev, commits: res.data }))
				)
				.catch((err) => console.error(err));
		}
	}

	componentDidMount() {
		console.log("App is loaded and ready for some action !");
	}

	componentWillUnmount() {}

	render() {
		const { name, owner, repo, commits } = this.state;
		return (
			<div className="App">
				<h1>{name} Github Viewer - Class Version</h1>
				<h2>
					<button onClick={this.toggleEditActiveValue}>
						SHOW ME THE FORM (Or hide it, I don't want to make two buttons)
					</button>
				</h2>

				{this.state.editActive && (
					<CommitForm
						owner={owner}
						repo={repo}
						setState={this.setState}
						updateOwnerAndRepo={this.updateOwnerAndRepo}
					/>
				)}
				<CommitList commits={commits} />
			</div>
		);
	}
}

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Github Viewer - Class Version</h1>
//     </div>
//   );
// }

export default App;
