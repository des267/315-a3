import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import EmailCardList from "./components/sidebar/emailcardlist/emailcardlist.component";
import SearchBar from "./components/sidebar/searchbar/searchbar.component";

function App() {
	// State variables
	const [allEmails, setAllEmails] = useState([]);
	const [emails, setEmails] = useState([]);
	const [currentBox, setCurrentBox] = useState("inbox");
	const [search, setSearch] = useState("");

	// Retrieves emails from weblink
	useEffect(() => {
		const fetchEmails = async () => {
			const response = await axios(
				"https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json"
			);
			setAllEmails(response.data);
		};
		fetchEmails();
	}, []);

	useEffect(() => {
		// Filter all emails to current box
		let filtered = allEmails.filter(email =>
			email["tag"] === currentBox
		);
		// If not empty search, filter
		if (search !== "") {
			filtered = filtered.filter(email =>
				email.subject.toLowerCase().includes(search.toLowerCase())
			);
		}
		setEmails(filtered);
	},[allEmails, search]);

	// If no emails in the mailbox, display message
	const EmptyBox = function emptyBox({message}) {
		if (emails.length === 0) {
			return <p>{message}</p>;
		}
	}

	const searchHandler = e => {
		setSearch(e.target.value);
	};

	const inboxClick = e => {
		//
	};

	const trashClick = e => {
		//
	};

	return (
		<div className="App">
			<div className="inboxTrashSidebar">
				<div id="inboxTrash">
					<p>Inbox</p>
					<img
						src="https://static.vecteezy.com/system/resources/previews/000/443/029/original/vector-inbox-icon.jpg"
						alt="inbox icon"/>
				</div>
				<div id="inboxTrash">
					<p>Trash</p>
					<img src="https://cdn-icons-png.flaticon.com/512/81/81132.png" alt="trash icon"/>
				</div>
			</div>
			<div className="emailSidebar">
				<SearchBar placeholder="Search" inputHandler={searchHandler}/>
				<EmptyBox message="No emails"></EmptyBox>
				<EmailCardList emails={emails}/>
			</div>
			<div className="emailBody">
				<h1>hello</h1>
			</div>
		</div>
	);
}

export default App;
