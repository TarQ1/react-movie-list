import './SearchBar.css';
import SearchEvent from './SearchBarController';


function SearchBar( {list, changeValue} ) {
    let searchBarController = new SearchEvent({list , changeValue});
    return (
        <div class="bar-div">
            <p>
                <label htmlFor="header-search">
                    <span className="visually-hidden"> Search Films</span>
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
