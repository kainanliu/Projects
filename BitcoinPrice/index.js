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
    let API = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    request(API, (error, response, body) =>{
        if (!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            let currency = data.bpi.USD.code;
            let currencySymbol = data.bpi.USD.symbol;
            let rate = data.bpi.USD.rate;
            res.render('dollar', { code: currency, symbol: currencySymbol, rate: rate });
        }
    });
});

app.get('/pound', (req, res) =>{
    let API = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    request(API, (error, response, body) =>{
        if (!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            let currency = data.bpi.GBP.code;
            let currencySymbol = data.bpi.GBP.symbol;
            let rate = data.bpi.GBP.rate;
            res.render('pound', { code: currency, symbol: currencySymbol, rate: rate });
        }
    });
});

app.get('/eur', (req, res) =>{
    let API = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    request(API, (error, response, body) =>{
        if (!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            let currency = data.bpi.EUR.code;
            let currencySymbol = data.bpi.EUR.symbol;
            let rate = data.bpi.EUR.rate;
            res.render('eur', { code: currency, symbol: currencySymbol, rate: rate });
        }
    });
});

app.get('/index', (req, res) =>{
    res.render('index');
});

app.listen(port, () =>{
    console.log(`Bitcoin Price APP listen on port ${port}`);
});