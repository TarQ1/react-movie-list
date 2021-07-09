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

class itemLayout extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            clicked: false
        };
    }

    handleClick = () => {
        console.log("itemlayout: clicked");
        if (!this.state.clicked) {
            this.setState({
                clicked: true
            });
        }
        else {
            this.setState({
                clicked: false
            });
        }
    }

    render() {
        if (!this.state.clicked) {
            return (<div class="itemLayout" onClick={this.handleClick}> {this.props.text} {this.props.img} </div>)
        }
        else {
            return (<div class="longItemLayout" onClick={this.handleClick}>{this.props.img}
                <h1>title= {this.props.text}</h1>
                <a>description={this.props.desc}</a>
                <a>release date={this.props.first_air_date}</a>
                <a>origin country={this.props.origin_country}</a>
                <a>popularity={this.props.popularity}</a>
</div>)
        }
    }
}

function GenerateItemWithQuery(input) {
    const final = [];

    try {
        let movieList = JSON.parse(input).results;
        for (let i = 0; i < movieList.length; i++) {

            let img = React.createElement('img', { class: 'poster', src: "https://image.tmdb.org/t/p/original/" + movieList[i].poster_path,
                onError :  (e) => {e.target.onerror = null; e.target.src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VeaeqtAPfyJtw0_neF3TBQHaE8%26pid%3DApi&f=1"}});

            let title = movieList[i].name;
            if (title === undefined || title === "") {
                title = movieList[i].original_name;
            }
            let first_air_date = movieList[i].first_air_date;
            let origin_country = movieList[i].origin_country[0];
            let overview = movieList[i].overview;
            let popularity = movieList[i].popularity;

            let text = React.createElement('a', { class: 'poster_text' }, title);

            let container = React.createElement(itemLayout, { img: img, text: text, desc: overview, first_air_date: first_air_date, origin_country: origin_country, popularity: popularity  });

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
    if (!list || list.length === 0 || list === "") {
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