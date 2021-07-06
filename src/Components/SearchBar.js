
import './SearchBar.css';

function SearchBar() {
    return (
        <div class="bar-div">
            <p>
                <label htmlFor="header-search">
                    <span className="visually-hidden"> Search Films</span>
                </label>
            </p>
            <input class="search-bar"
                placeholder="Batman vs Superman"
            />
        </div >
    );
}


export default SearchBar;
