const axios = require('axios');
const express = require('express');
const { connectDb } = require("./helpers/db");
const { port, db, apiURL} = require("./configuration");

const app = express();

const startServer = () => {
    app.listen(port, () => {
        console.log(`Started auth service on port: ${port}`);
        console.log(`Our database: ${db}`);
    });
};

app.get('/test', (req, res) => {
    res.send('Our auth server is working correctly');
});

app.get('/testwithapidata', (req, res) => {
    axios.get(apiURL + `/testapidata`)
        .then((response) => {
            res.json({
                testapidata: response.data.testwithapi
            });
        });
});

app.get('/api/currentUser', (req, res) => {
    res.json({
        id: "1234",
        email: "foo@gmail.com"
    })
});

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer);