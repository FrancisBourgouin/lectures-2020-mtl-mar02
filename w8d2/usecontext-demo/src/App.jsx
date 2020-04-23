import React, { useState, createContext } from "react";
import { TaskList } from "./TaskList";
import { DarkModeContext } from "./context/DarkModeContext";
import "./App.css";

const list = [
	"Play Beat Saber",
	"Do some yoga",
	"Go outside (After Covid)",
	"Eat Sushi",
	"Go on a Road Trip",
];

function App() {
	const [taskList, setTaskList] = useState(list);
	const [darkMode, setDarkMode] = useState(false);

	return (
		<DarkModeContext.Provider value={darkMode}>
			<div
				className={darkMode ? "dark" : "light"}
				onClick={() => setDarkMode(!darkMode)}
			>
				<header className="App-header">
					<h1>useContext hook demo !</h1>
				</header>
				<section>
					<h1>Laundry List of Tasks</h1>
					{/* <TaskList taskList={taskList} />  */}
					<TaskList {...{ taskList }} />
				</section>
			</div>
		</DarkModeContext.Provider>
	);
}

export default App;
