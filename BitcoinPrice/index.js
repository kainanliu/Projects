const express = require('express');
const app = express();
const request = require('request');

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/dollar', (req, res) =>{
    res.render('dollar');
});

app.get('/pound', (req, res) =>{
    res.render('pound');
});

app.get('/eur', (req, res) =>{
    res.render('eur');
});

app.get('/index', (req, res) =>{
    res.render('index');
});

app.listen(port, () =>{
    console.log(`Bitcoin Price APP listen on port ${port}`);
});