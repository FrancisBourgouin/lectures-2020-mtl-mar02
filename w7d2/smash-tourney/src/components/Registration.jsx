import React, { useState } from "react";

export const Registration = (props) => {
	//  Access to addNewPlayer

	const [registrationInfo, setRegistrationInfo] = useState({
		name: "",
		character: "",
	});

	const submitPlayer = (event) => {
		event.preventDefault();

		props.addNewPlayer(registrationInfo);
	};
	return (
		<form onSubmit={submitPlayer}>
			<input
				type="text"
				name="player_name"
				value={registrationInfo.name}
				onChange={(event) =>
					setRegistrationInfo({
						...registrationInfo,
						name: event.target.value,
					})
				}
			/>
			<input
				type="text"
				name="character_name"
				value={registrationInfo.character}
				onChange={(event) =>
					setRegistrationInfo({
						...registrationInfo,
						character: event.target.value,
					})
				}
			/>
			<input type="submit" />
		</form>
	);
};
