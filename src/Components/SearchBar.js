import './SearchBar.css';
import SearchEvent from './SearchBarController';


function SearchBar( {changeValue} ) {
    let searchBarController = new SearchEvent({changeValue});
    console.log("Searchbar created");
    return (
        <div class="bar-div">
            <p>
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search Films</span>
                </label>
            </p>
            <input class="search-bar"
                placeholder="Batman vs Superman"
                onChange={event => searchBarController.sendRequest(event.target.value)}
            />
        </div >
    );
}



export default SearchBar;
