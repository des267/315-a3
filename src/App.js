import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import EmailCardList from "./components/sidebar/emailcardlist/emailcardlist.component";

function App() {
	// State variables
	const [emails, setEmails] = useState([]);

	// Retrieves emails from weblink
	useEffect(() => {
		const fetchEmails = async () => {
			const response = await axios(
				"https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json"
			);
			setEmails(response.data);
		};
		fetchEmails();
	}, []);

	return (
		<div className="App">
			<div className="inboxTrashSidebar">
				<div>
					<p>Inbox</p>
					<img src="./icons/inbox.png" alt="inbox icon"/>
				</div>
				<div>
					<p>Trash</p>
					<img src="./icons/trash-mail.png" alt="trash icon"/>
				</div>
			</div>
			<div className="emailSidebar">
				<EmailCardList emails={emails}/>
			</div>
			<div className="emailBody">
				<h1>hello</h1>
			</div>
		</div>
	);
}

export default App;
