import React from "react";

function DisplayData({
	firstName,
	lastName,
	checkboxStatus,
	editStatus,
	onEditChange,
	range,
}) {
	return (
		<div>
			<h1>
				{firstName} {lastName}
			</h1>
			<p>checkbox: {checkboxStatus.toString()}</p>
			<p>{range < 50 ? range : "invalid Range try less than 50"}</p>
			<button onClick={onEditChange}>{editStatus ? "Done" : "Edit"}</button>
		</div>
	);
}

export default DisplayData;
