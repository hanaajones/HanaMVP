const express = require('express');
const parser = require('body-parser');
const path = require('path');
const Promise = require('bluebird');
const request = require('request')

const { getCountriesByName } = require('./controllers/index.js')

let app = express();
let port = 3000;


app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../static')));

app.post('/katan', function (req, res) {
    console.log("A post request was made", req.body)
    let country = req.body.name
    getCountriesByName(country, function (err, response) {
        console.log("returned to getCountriesByName", response)
    });



})

app.get('/katan', function (req, res) {
    console.log("req.query:", req.query.name)
    let country = req.query.name;
    const restCountry = {
        url: `https://restcountries.eu/rest/v2/name/${country}`
    };
    
    if (country) {
        request.get(restCountry, (err, response, body) => {
        if (err) {
            console.log("There was an error in the api")
            res.send("error").status(404)
        }else{

        let allResources = ['wheat', 'clay', 'rock', 'wood', 'sheep'];
        let allNumbers = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];
        let resources = [];
        let numbers = []

        for (let i = 0; i < 3; i++) {
            let item = allResources[Math.floor(Math.random() * allResources.length)];
            resources.push(item)
        }
        while (numbers.length < 3) {
            let item = allNumbers[Math.floor(Math.random() * allNumbers.length)];
            if (numbers.indexOf(item) === -1) {
                numbers.push(item)
            }
        }

        let parsed = JSON.parse(body)
        let obj = parsed[0];
        let newObj = obj;
        console.log("obj:", obj);

        if (obj) {
            obj.resources = resources;
            obj.numbers = numbers;
            console.log("obj in conditional:", obj)
        }

        res.status(200).send(obj);
        }

    });

    }



});

app.listen(port, function () {
    console.log(`listening on port ${port}`);
})