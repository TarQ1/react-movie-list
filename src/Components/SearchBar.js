import './SearchBar.css';
import SearchEvent from './SearchBarController';


function SearchBar( {changeValue} ) {
    let searchBarController = new SearchEvent({changeValue});
    console.log("Searchbar created");
    return (
        <div class="bar-div">
            <input class="search-bar"
                placeholder="Film name"
                onChange={event => searchBarController.sendRequest(event.target.value)}
            />
        </div >
    );
}



export default SearchBar;
