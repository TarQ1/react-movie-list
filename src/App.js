import './App.css';
import SearchBar from './Components/SearchBar';
import MovieList from './Components/MovieList';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar bar={props.SearchBar} />
        <MovieList list={props.MovieList} />
      </header>
    </div>
  );
}

export default App;
