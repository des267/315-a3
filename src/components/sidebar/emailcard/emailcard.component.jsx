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
import './emailcard.component.css';

/**
 * A container of information that represents an email. Each
 * card displays the subject, from, from address, and the
 * timestamp.
 * @param email An email object
 * @return {JSX.Element} Container displayed email information
 */
const EmailCard = ({ email }) => {
	const {id, from, address, time, subject, read} = email;

	return (
		<div className='emailCard' id={id}>
			<h4>subject: {subject}</h4>
			<p>from: {from}</p>
			<p>address: {address}</p>
			<p>timestamp: {time}</p>
		</div>
	);
}

export default EmailCard;