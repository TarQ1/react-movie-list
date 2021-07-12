import './SearchBar.css';
import SearchEvent from './SearchBarController';


function SearchBar({ changeValue }) {
    let searchBarController = new SearchEvent({ changeValue });
    console.log("Searchbar created");
    return (
        <div className="barDiv">
            <input className="search-bar"
                placeholder="Film name"
                onChange={event => searchBarController.sendRequest(event.target.value)}
            />
        </div >
    );
}



export default SearchBar;
