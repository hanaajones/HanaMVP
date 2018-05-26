const request = require('request');

let getCountriesByName = (country, callback) => {
    console.log("This is my country:", country)

    const restCountry = {
        url: `https://restcountries.eu/rest/v2/name/${country}`
    };

    request.get(restCountry, function(err, response, body) {
        if (err) {
            console.log("There was an error in the api")
        }

        console.log("This is body in request.get:")
        callback(null, body)
        
    });

}

module.exports.getCountriesByName = getCountriesByName;