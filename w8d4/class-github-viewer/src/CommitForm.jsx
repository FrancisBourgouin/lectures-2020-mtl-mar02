import React from "react";

class CommitForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			owner: this.props.owner,
			repo: this.props.repo,
		};

		this.changeRepo = this.changeRepo.bind(this);
	}

	changeOwner = (e) => {
		this.setState({ ...this.state, owner: e.target.value });
	};

	changeRepo(e) {
		this.setState({ ...this.state, repo: e.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		// this.props.setState() <--- THIS IS BAD
		this.props.updateOwnerAndRepo(this.state.owner, this.state.repo);
	};

	render() {
		const { owner, repo } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					name="owner"
					value={owner}
					onChange={this.changeOwner}
					placeholder="Owner of repo"
				/>
				<input
					name="repo"
					value={repo}
					onChange={this.changeRepo}
					placeholder="Name of repo"
				/>
				<button type="submit">Fetch commits !</button>
			</form>
		);
	}
}
export default CommitForm;
