import React from 'react';
import './MovieList.css';
var json = require('../res/movies.json');


function GenerateItem() {
    let movieList = JSON.parse(JSON.stringify(json["results"]));
    const final = [];
    for (let i = 0; i < movieList.length; i++) {
        final.push(<li>{movieList[i].original_title}</li>);  }
    return final;
}

function MovieList() {
    return (
        <div className="App">
      <ul>{GenerateItem()}</ul>
    </div>
  );
}



export default MovieList;