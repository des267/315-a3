import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

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

		</div>
	);
}

export default App;
