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