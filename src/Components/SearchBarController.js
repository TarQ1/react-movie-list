import React from 'react';
import MovieList from './MovieList';


// get a callback when the server responds


// open the request with the verb and the url
// send the request
class SearchEvent {
    constructor({changeValue }) {
        this.xhr = new XMLHttpRequest()
        this.xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            let res = this.xhr.responseText
            if (res.length > 0) {
                changeValue(res);
            }
        })
    }


    sendRequest(input) {
        console.log("====Input====", input);
        if (input === "")
            return;
        this.xhr.open('GET', 'https://api.themoviedb.org/3/search/tv?api_key=35de243596d137d3604891a6794187a6&language=en-US&query=' + input + '&page=1&include_adult=false');
        var res = this.xhr.send()
        return res;
    }
}

export default SearchEvent;