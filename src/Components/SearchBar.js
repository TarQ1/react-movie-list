
import './SearchBar.css';

function SearchBar() {
    return (
        < form action="/" method="get" >
            <p>
            <label htmlFor="header-search">
                <span className="visually-hidden"> Search Films</span>
            </label>
            </p>
            <input class="search-bar"
                placeholder="Batman vs Superman"
            />
        </form >
    );
}


export default SearchBar;
