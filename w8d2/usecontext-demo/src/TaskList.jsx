import React from "react";
import { TaskListItem } from "./TaskListItem";

export const TaskList = (props) => {
	const listOfTasks = props.taskList.map((task) => (
		<TaskListItem task={task} />
	));

	return <ul>{listOfTasks}</ul>;
};
