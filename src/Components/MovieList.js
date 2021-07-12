import './MovieList.css';
import React from 'react';
var json = require('../res/movies.json');
var missingImgUrl = `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fmissing-red-rubber-stamp-icon-on-transparent-background-vector-id891769064%3Fk%3D6%26m%3D891769064%26s%3D170667a%26w%3D0%26h%3D7quyJKDGsEyrBhxEeS6TkSgA5fNQhMGx_WH9OcwyXsI%3D&f=1&nofb=1`;


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
            return (
                <div class="longItemLayout" onClick={this.handleClick}>
                    <div class="posterBigger">{React.createElement('img', {
                        class: 'posterBigger', src: "https://image.tmdb.org/t/p/original/" + this.props.imgPath,
                        onError: (e) => { e.target.onerror = null; e.target.src = missingImgUrl }
                    })}</div>
                    <div class="filmText">
                        <p class="filmTitle">{this.props.text}</p>
                        <bdi class="filmDescription">{this.props.desc}</bdi>
                        <p class="basicDesc">popularity: <bdi class="filmPopularity">{this.props.popularity}</bdi></p>
                        <p class="basicDesc">release date: <bdi class="filmReleaseDate"> {this.props.first_air_date}</bdi></p>
                        <p class="basicDesc">origin country: <bdi class="filmOriginCountry">{this.props.origin_country}</bdi></p>
                        <p class="basicDesc">origin language: <bdi class="filmOriginCountry">{this.props.original_language}</bdi></p>
                    </div>
                </div>)
        }
    }
}

function GenerateItemWithQuery(input) {
    const final = [];
    try {
        let movieList = JSON.parse(input).results;
        for (let i = 0; i < movieList.length; i++) {

            let img = React.createElement('img', {
                class: 'poster', src: "https://image.tmdb.org/t/p/original/" + movieList[i].poster_path,
                onError: (e) => { e.target.onerror = null; e.target.src = missingImgUrl }
            });

            let title = movieList[i].name;
            if (title === undefined || title === "") {
                title = movieList[i].original_name;
            }

            let text = React.createElement('a', { class: 'poster_text' }, title);

            let container = React.createElement(itemLayout, {
                img: img,
                imgPath: movieList[i].poster_path,
                original_name: movieList[i].original_name,
                text: text,
                desc: movieList[i].overview,
                first_air_date: movieList[i].first_air_date,
                original_language: movieList[i].original_language,
                origin_country: movieList[i].origin_country,
                popularity: movieList[i].popularity,
            });

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
                {GenerateItemWithQuery(JSON.stringify(json))}
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