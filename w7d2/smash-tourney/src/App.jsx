import React, { useState } from "react";
import "./App.css";
import { Registration } from "./components/Registration";

const players = {
	"1": {
		name: "Francis",
		character: "Inkling",
	},
	"2": {
		name: "Vasily",
		character: "Lucina",
	},
	"3": {
		name: "Dom",
		character: "Donkey Kong",
	},
	"4": {
		name: "Marie",
		character: "Joker",
	},
};
const matches = [
	{
		player1: 4,
		player2: 3,
		winner: 4,
	},
	{
		player1: 4,
		player2: 3,
		winner: undefined,
	},
	{
		player1: 1,
		player2: 2,
		winner: undefined,
	},
];
// const Button = (props) => {
// 	// props.className => App
// 	// props.onClick => action
// 	return <button className={props.className} onClick={props.onClick}></button>;
// };

// const Header = (props) => {
// 	const [name, setName] = useState(props.name);
// 	// let secretName = "";
// 	return (
// 		<header>
// 			<h1>
// 				I am title of {name} and I am {props.mood}
// 			</h1>
// 			<button onClick={() => setName("Hatem")}>Hatem</button>
// 			<button onClick={() => setName("Lee")}>Lee</button>
// 			<button onClick={() => setName("Luana")}>Luana</button>
// 		</header>
// 	);
// };
const App = () => {
	const [tourneyData, setTourneyData] = useState({ players, matches });

	const addNewPlayer = (playerInfo) => {
		const id = Object.keys(players).length + 1; // Generate an ID based on length (bad), should use UUID
		const newPlayerObject = { ...playerInfo, id }; // Adding the ID to my player Object that I received as an argument
		const updatedPlayers = { ...players }; // Creating a copy of players, then I will add my new player to it
		updatedPlayers[id] = newPlayerObject; // Adding my new player to the copy of players
		// players[id] = newPlayerObject; // Adding my new player to the copy of players

		console.log(updatedPlayers);
		setTimeout(
			() => setTourneyData({ ...tourneyData, players: updatedPlayers }), // Update my state with the copy of players I made
			2000
		);
	};

	const currentPlayers = Object.values(tourneyData.players).map((player) => (
		<p>
			{player.name}, {player.character}
		</p>
	));

	const anotherCurrentPlayers = (players) => {
		const output = [];
		for (const playerId in players) {
			const { name, character } = players[playerId]; // players[playerId] => {name:"", character:""}
			output.push(
				<p>
					{playerId}: {name}, {character}
				</p>
			);
		}
		return output;
	};

	const parsePlayerData = (id) => {
		if (tourneyData.players[id]) {
			const { name, character } = tourneyData.players[id];
			return (
				<li>
					ID: {id}, name: {name}, character: {character}
				</li>
			);
		}
	};
	const listOfMatches = tourneyData.matches.map((match) => {
		return (
			<ul>
				{parsePlayerData(match.player1)}
				{parsePlayerData(match.player2)}
				{parsePlayerData(match.winner)}
			</ul>
		);
	});

	return (
		<div className="App">
			<h1>Super Smash Bros Tourney Manager - Spatial Distancing Edition</h1>
			<Registration addNewPlayer={addNewPlayer} />
			{currentPlayers}
			{anotherCurrentPlayers(tourneyData.players)}
			{listOfMatches}
		</div>
	);
};

export default App;
