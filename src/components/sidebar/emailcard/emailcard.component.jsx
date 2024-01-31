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

import './emailcard.component.css';


const EmailCard = ({ email, activeId, clickHandler }) => {
	const {id, from, address, time, subject, read} = email;
	let className = 'emailCardUnread';

	// Pick CSS class based on if card active, read, or unread
	if (id === activeId) {
		className = 'emailCardActive';
	}
	else if (read === "true") {
		className = 'emailCardRead';
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