import './App.css';
import React from 'react';
import SearchBar from './Components/SearchBar';
import MovieList from './Components/MovieList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: "" };
  }
  render() {

    return (
      <div className="App">
        <SearchBar changeValue={(list) => this.setState({ list })} />
        <MovieList list={this.state.list} />
      </div>
    );
  }
}

export default App;
