const express = require("express");
var app = express();

var middleware = (req, res, next) => {
    console.log("kjører");
    next();
};

app.use(middleware);    

app.get("/", (req, res) => {
    res.sendFile('./pubic/index.html');
});

app.listen(3000, () => {
    console.log("3000");
});