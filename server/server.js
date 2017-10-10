const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
var app = express();

app.use(express.static(__dirname + "./../public"));
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

var middleware = (req, res, next) => {
    console.log("kjører");
    next();
};

app.use(middleware); 

app.get("/", (req, res) => {
    console.log(req);
    res.sendFile('./pubic/index.html');
});

app.post("/", (req, res) => {
    let body = _.pick(req.body, ['nm_kundenummer']);
    console.log("body ", body);
    res.send({
        "data" : "Repsonsdata fra node"
    });
});



app.listen(3000, () => {
    console.log("3000");
});