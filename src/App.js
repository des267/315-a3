import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import EmailCardList from "./components/sidebar/emailcardlist/emailcardlist.component";
import SearchBar from "./components/sidebar/searchbar/searchbar.component";

function App() {
	// State variables
	const [allEmails, setAllEmails] = useState([]);
	const [emails, setEmails] = useState([]);
	const [currentBox, setCurrentBox] = useState("Inbox");
	const [search, setSearch] = useState("");
	const [activeId, setActiveId] = useState(NaN);

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

	// Filters emails by current box, search, and active email
	// If active state changed, set email to read
	useEffect(() => {
		// if active changed, set new active to read
		if (!isNaN(activeId)) {
			let newEmails = allEmails;
			let index = newEmails.findIndex(x => x.id === activeId);
			console.log(newEmails[index]);
			newEmails[index].read = "true";
			setAllEmails(newEmails);
		}

		// Filter all emails to current box
		let filtered = allEmails.filter(email =>
			email["tag"] === currentBox.toLowerCase()
		);
		// If not empty search, filter
		if (search !== "") {
			filtered = filtered.filter(email =>
				email.subject.toLowerCase().includes(search.toLowerCase())
			);
		}
		setEmails(filtered);
	},[activeId, currentBox, allEmails, search]);

	// If no emails in the mailbox, display message
	const EmptyBox = function emptyBox({message}) {
		if (emails.length === 0) {
			return (
				<p>{message}</p>
			);
		}
	}

	// Filter emails by search input
	const searchHandler = e => {
		setSearch(e.target.value);
	};

	// Click on inbox, switch to
	const inboxClick = e => {
		setCurrentBox("Inbox");
	};

	// Click on trash box, switch to
	const trashClick = e => {
		setCurrentBox("Deleted");
	};

	// Click on email, set to active
	const emailClick = e => {
		if (e.target.id !== activeId) {
			setActiveId(e.target.id);
		}
	};

	return (
		<div className="App">
			<div className="inboxTrashSidebar">
				<div id="inboxTrash" onClick={inboxClick}>
					<p>Inbox</p>
					<img
						src="https://www.svgrepo.com/show/55149/inbox.svg"
						alt="inbox icon"/>
				</div>
				<div id="inboxTrash" onClick={trashClick}>
					<p>Trash</p>
					<img src="https://cdn-icons-png.flaticon.com/512/81/81132.png" alt="trash icon"/>
				</div>
			</div>
			<div className="emailSidebar">
				<h2>{currentBox}</h2>
				<SearchBar placeholder="Search" inputHandler={searchHandler}/>
				<EmptyBox message="No emails"></EmptyBox>
				<EmailCardList clickHandler={emailClick} emails={emails} activeId={activeId}/>
			</div>
			<div className="emailBody">
				<h1>hello</h1>
			</div>
		</div>
	);
}

export default App;
