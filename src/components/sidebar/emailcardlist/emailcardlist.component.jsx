import react from "react";
import './emailcardlist.component.css';
import '../emailcard/emailcard.component';
import EmailCard from "../emailcard/emailcard.component";

const EmailCardList = ({emails}) => {
	return (
		<div className="emailCardList">
			{emails.map(email => (
				<EmailCard key={email.id} email={email}/>
			))}
		</div>
	);
};

