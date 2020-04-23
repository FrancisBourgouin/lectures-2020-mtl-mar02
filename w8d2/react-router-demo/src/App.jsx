import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useHistory,
} from "react-router-dom";
import "./App.css";

const Profile = () => {
	const [userInfo, setUserInfo] = useState();
	const queryParams = useParams();
	let nameToShow = "";
	if (!queryParams.userId) {
		axios
			.get(`users/${queryParams.userId}`)
			.then((res) => setUserInfo(res.data));
		nameToShow = "This is my profile";
	} else {
		nameToShow = `This is the profile of the user with ID ${queryParams.userId}`;
	}
	return (
		<section>
			<h1>{nameToShow}</h1>
			<h2>User information</h2>
			<ul>
				<li>Name : Francis</li>
				<li>Username: Cadaei</li>
				<li>Age : Old enough</li>
			</ul>
			<pre>{JSON.stringify(queryParams, null, 2)}</pre>
		</section>
	);
};

const Login = () => {
	const [email, setEmail] = useState("");
	const history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		history.push(`/profile/${email}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" name="" id="" placeholder="name" />
			<input type="text" name="" id="" placeholder="last name" />
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				name=""
				id=""
				placeholder="email"
			/>
			<input type="submit" />
		</form>
	);
};

const Home = () => {
	return (
		<section>
			<h1>This is the home of my app</h1>
			<Link to="/login">Login</Link>
			<Link to="/profile">Profile</Link>
		</section>
	);
};

const Header = () => {
	const history = useHistory();
	console.log(history);

	return (
		<header className="App-header">
			<h1>React Router Demo !</h1>
			<Link to="/login">Login</Link>
			<Link to="/profile">Profile</Link>
			<button onClick={() => history.goBack()}>GO BACK !</button>
		</header>
	);
};
function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/">
						<h1>Yo this is home again</h1>
						<Home />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route exact path="/profile">
						<Profile />
					</Route>
					<Route path="/profile/:userId">
						<Profile />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
