import React, { useState } from "react";
import DisplayData from "./DisplayData";
import Form from "./Form";
function ParentComponent() {
	const [firstName, setFirstName] = useState("John");
	const [lastName, setLastName] = useState("Henry");
	const [checkboxStatus, setCheckboxStatus] = useState(false);
	const [editStatus, setEditStatus] = useState(false);
	const [range, setRange] = useState(0);
	function handleFirstNameChange(event) {
		setFirstName(event.target.value);
	}
	function handleLastNameChange(event) {
		setLastName(event.target.value);
	}
	function handleNewsLetterChange(event) {
		setCheckboxStatus(event.target.checked);
	}
	function handleRangeChange(event) {
		setRange(event.target.value);
	}

	function handleEditChange() {
		setEditStatus((prevStatus) => !prevStatus);
	}
	return (
		<div>
			{editStatus && (
				<Form
					firstName={firstName}
					lastName={lastName}
					checkboxStatus={checkboxStatus}
					range={range}
					onFirstNameChange={handleFirstNameChange}
					onLastNameChange={handleLastNameChange}
					onNewsLetterChange={handleNewsLetterChange}
					onRangeChange={handleRangeChange}
				/>
			)}
			<DisplayData
				firstName={firstName}
				lastName={lastName}
				checkboxStatus={checkboxStatus}
				editStatus={editStatus}
				range={range}
				onEditChange={handleEditChange}
			/>
		</div>
	);
}

export default ParentComponent;
