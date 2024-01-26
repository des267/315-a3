/**
 * emailcard.component.jsx
 *
 * Each email card is a container within the
 * emailcard list that becomes displayed in columns
 * within the email sidebar.
 *
 * Author: Desmond Stular
 * Date: January 26, 2024
 */
import react from "react";

/**
 * A container of information that represents an email. Each
 * card displays the subject, from, from address, and the
 * timestamp.
 * @param email An email object
 * @return {JSX.Element} Container displayed email information
 */
const emailCard = ({ email }) => {
	const {id, from, address, message, time, subject, tag, read} = email;

	return (
		<div>
			<h4>subject: {subject}</h4>
			<p>from: {from}</p>
			<p>address: {address}</p>
			<p>timestamp: {time}</p>
		</div>
	);
}