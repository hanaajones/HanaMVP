const express = require('express');
const parser = require('body-parser');
const path = require('path');
const Promise = require('bluebird');

let app = express();
let port = 3000;


app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname ,'../static')));

app.post('/map', function (req, res) {

})

app.get('/map', function (req, res) {

});

app.listen(port, function () {
    console.log(`listening on port ${port}`);
})