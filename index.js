require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(cors());
const url = process.env.APP_URL;
const Port = process.env.port || 5000;

app.get("/", (req, res) => {
    try {
        res.send({ Status: "The App is running fine!" });
    }
    catch (error) {
        console.log(error);
    }
})


app.get("/movieflix", async (req, res) => {
    try {
        const search = req.query.s || "The%20Proposal";
        // let movies = [];
        const response = await axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=371aaeec&s=" + search);
        // console.log();
        res.send(response.data);
    }
    catch(error){
        console.log(error);
    }

})


app.listen(Port, (req, res) => {
    console.log("[Status] Server Listening On Port: " + Port)
})