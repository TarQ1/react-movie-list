import './MovieList.css';
import React from 'react';
var json = require('../res/movies.json');

function GenerateItem() {
    let movieList = JSON.parse(JSON.stringify(json["results"]));
    const final = [];
    for (let i = 0; i < movieList.length; i++) {
        var img = React.createElement('img', { class: 'poster', src: "https://image.tmdb.org/t/p/original/" + movieList[i].poster_path, });
        var text = React.createElement('a', { class: 'poster_text' }, movieList[i].title);

        var container = React.createElement('div', { class: 'itemLayout' }, img, text);
        final.push(container);

    }
    return final;
}

function GenerateItemWithQuery(input) {
    const final = [];
    try {
        let movieList = JSON.parse(input).results;
        for (let i = 0; i < movieList.length; i++) {

            var img = React.createElement('img', { class: 'poster', src: "https://image.tmdb.org/t/p/original/" + movieList[i].poster_path, });

            let title = movieList[i].name;
            if (title === undefined || title === "")
            {
                title = movieList[i].original_name;
            }

            var text = React.createElement('a', { class: 'poster_text' }, title);

            var container = React.createElement('div', { class: 'itemLayout' }, img, text);
            final.push(container);
        }
    }
    catch (e) {

        console.warn("failed to parse json" + e)
        console.warn("====JSON====\n", input)
    }
    return final;
}


function MovieList({ list }) {
    if (!list || list === null || list.length === 0 || list === "") {
        return (
                <div class="filmListLayout" >
                    {GenerateItem()}
                </div>
        );
    }
    else {
        return (
                <div class="filmListLayout">
                    {GenerateItemWithQuery(list)}
                </div>
        );
    }

}






export default MovieList;