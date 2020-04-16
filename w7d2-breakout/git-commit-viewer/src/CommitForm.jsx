import React, { useState } from "react";

const CommitForm = (props) => {
	const [formData, setFormData] = useState({ author: "", message: "" });
	const { author, message } = formData;
	const { addNewCommit } = props;

	const updateFormData = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		addNewCommit(formData);
	};

	return (
		<form onSubmit={submitHandler}>
			<input
				type="text"
				name="message"
				placeholder="Message"
				value={message}
				// onChange={event =>setFormData({...formData, message: event.target.value})}
				onChange={updateFormData}
			/>
			<input
				type="text"
				name="author"
				placeholder="Author"
				value={author}
				onChange={updateFormData}
			/>
			<input
				type="text"
				name="author2"
				placeholder="Author"
				value={author}
				onChange={updateFormData}
			/>
			<input type="submit" />
		</form>
	);
};

export default CommitForm;
