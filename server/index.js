const express = require("express");
const cors = require('cors')
const app = express();
require('dotenv').config()

const season = require("./src/season")

const PORT = process.env.PORT || 3001

app.use(express.json())

app.listen(PORT, () => {
    console.log('========================================================');
    console.log(`Server is running at port ${PORT}`)
});


// set CORS policy 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});


app.get("/api/season", (req, res) => {
    season.read()
        .then(result => {
            season.lastUpdate(result) 
            return result
        })
        .then(result => res.json(result))
        .catch((err) => {
            console.error(err)
        });
});

