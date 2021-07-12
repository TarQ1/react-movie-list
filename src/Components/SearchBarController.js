



class SearchEvent {
    constructor({changeValue }) {

        this.xhr = new XMLHttpRequest()
        // get a callback when the server responds
        this.xhr.addEventListener('load', () => {
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
            // send the request
        this.xhr.open('GET', 'https://api.themoviedb.org/3/search/tv?api_key=35de243596d137d3604891a6794187a6&language=en-US&query=' + input + '&page=1&include_adult=false');
        var res = this.xhr.send()
        return res;
    }
}

export default SearchEvent;