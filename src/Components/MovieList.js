import './MovieList.css';
import React from 'react';
var json = require('../res/movies.json');


function GenerateItem() {
    let movieList = JSON.parse(JSON.stringify(json["results"]));
    const final = [];
    for (let i = 0; i < movieList.length; i++) {
        // Image="https://image.tmdb.org/t/p/original/"+movieList[i].poster_path
        var img = React.createElement('img', { class: 'poster' ,src: "https://image.tmdb.org/t/p/original/" + movieList[i].poster_path, });
        var text = React.createElement('a', { class: 'poster_text'}, movieList[i].title);

        var container = React.createElement('div', { class: 'itemLayout'}, img, text);
        final.push(container);

    }
    return final;
}

function MovieList() {
    return (
        <div className="App">
            <div class="filmListLayout">

            </div>
            {GenerateItem()}

        </div>
    );
}



export default MovieList;