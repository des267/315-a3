/**
 * emailcardlist.component.jsx
 *
 * Holds a list of emailcard components and displays
 * them in a column flexbox within the email sidebar
 * of the application.
 *
 * Author: Desmond Stular
 * Date: January 26, 2024
 */

import './emailcardlist.component.css';
import '../emailcard/emailcard.component';
import EmailCard from "../emailcard/emailcard.component";

const EmailCardList = ({ emails, activeId, clickHandler }) => (
	<div className="emailCardList">
		{emails.map(email => (
			<EmailCard email={email} activeId={activeId} clickHandler={clickHandler}/>
		))}
	</div>
	);

export default EmailCardList;