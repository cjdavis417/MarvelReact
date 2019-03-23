import $ from 'jquery';

class API {

    constructor(arrChar) {
        this.arrChar = arrChar;
    }

    CharAPI(name) {
        var marvelAPI = 'https://gateway.marvel.com/v1/public/characters';
        var APIkey = '509dae0442a04443238ccd706605db14';
        var hash = '5bcfc1939107267c15cc5d863348fffd';
        var finalChar = [];

        $.getJSON(marvelAPI, {
            name: name,
            limit: 100,
            ts: '1',
            apikey: APIkey,
            hash: hash
        })
        .done(function(response) {
            var results = response.data.results;

            var img = "";
            var name = "";
            var description = "";

            results.forEach(element => {
                img = element.thumbnail.path + '.' + element.thumbnail.extension;
                name = element.name;

                if (element.description.length > 0) {
                    description = element.description;
                } else {
                    description = "Character description in API is blank"
                }
            })

            finalChar.push({
                img: img, 
                name: name,
                description: description
            });
            
        })
        return (
            finalChar
        )
    };

}

export default API;