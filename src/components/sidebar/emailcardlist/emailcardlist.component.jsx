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