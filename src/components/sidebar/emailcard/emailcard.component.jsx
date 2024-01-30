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
 * @param activeId ID number of clicked on active email displayed
 * @param clickHandler Click handle that retrieves email ID on click
 * @return {JSX.Element} Container displayed email information
 */
const EmailCard = ({ email, activeId, clickHandler }) => {
	const {id, from, address, time, subject, read} = email;
	let className = "";

	// Pick CSS class based on if card active, read, or unread
	if (id === activeId) {
		className = 'emailCardActive';
	}
	else if (read === "true") {
		className = 'emailCardRead';
	}
	else {
		className = 'emailCardUnread';
	}

	return (
		<div id={id} className={className} onClick={clickHandler}>
			subject: {subject}<br/>
			from: {from}<br/>
			address: {address}<br/>
			timestamp: {time}
		</div>
	);
}

export default EmailCard;