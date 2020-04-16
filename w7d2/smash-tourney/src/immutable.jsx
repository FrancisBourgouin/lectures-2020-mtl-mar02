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
];

for (let i = 0; i < 10; i++) { // Someone clicking 10 times before the database says OK
			const id = Object.keys(players).length + 1;
			const newPlayerObject = { ...playerInfo, id };
			const updatedPlayers = { ...players };
			updatedPlayers[id] = newPlayerObject;
}
console.log("immutable", updatedPlayers)

for (let i = 0; i < 10; i++) { // Someone clicking 10 times before the database says OK
  const id = Object.keys(players).length + 1;
  const newPlayerObject = { ...playerInfo, id };
  players[id] = newPlayerObject;
}
console.log("mutable", players)