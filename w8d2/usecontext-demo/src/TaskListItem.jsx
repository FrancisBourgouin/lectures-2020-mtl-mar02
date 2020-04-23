import React, { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";

export const TaskListItem = (props) => {
	const darkMode = useContext(DarkModeContext);

	return <li style={{ fontWeight: darkMode ? 700 : 300 }}>{props.task}</li>;

	// return(
	//   <DarkModeContext.Consumer>
	//     {value => <li>{value}</li>}
	//   </DarkModeContext.Consumer>
	// )
};
