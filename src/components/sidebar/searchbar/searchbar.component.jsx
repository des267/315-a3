/**
 * searchbar.component.jsx
 *
 * Contains the search bar for the email sidebar
 * and allows a user to filter the email cards by
 * subject.
 *
 * Author: Desmond Stular
 * Date: January 29, 2024
 */

import './searchbar.component.css';
const SearchBar = ({placeholder, inputHandler}) => (
	<input
		className="searchBar"
		type="Search"
		placeholder={placeholder}
		onChange={inputHandler}
	/>
);

export default SearchBar;