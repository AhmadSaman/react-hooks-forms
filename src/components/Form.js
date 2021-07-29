import React from "react";

function Form({
	firstName,
	lastName,
	checkboxStatus,
	range,
	onFirstNameChange,
	onLastNameChange,
	onNewsLetterChange,
	onRangeChange,
}) {
	return (
		<form>
			<input type="text" onChange={onFirstNameChange} value={firstName} />
			<input type="text" onChange={onLastNameChange} value={lastName} />
			<input
				type="checkbox"
				onChange={onNewsLetterChange}
				value={checkboxStatus}
			/>
			<input type="range" value={range} onChange={onRangeChange} />
			<button type="submit">Submit</button>
		</form>
	);
}

export default Form;
