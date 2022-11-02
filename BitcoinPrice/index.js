//This will enable all the modules that we need
const express = require("express");
const app = express();
const request = require("request");
//We are setting the port to 3000
const port = process.env.PORT || 3000;
//This will let us use the styling from the public folder
app.use(express.static("public"));
//This will set the view engine to ejs so that we do not need to type .ejs at the end of ejs files
app.set("view engine", "ejs");
//This is our home route that take us to the index page
app.get("/", (req, res) => {
  res.render("index");
});
//This will take us to the /dollar page
app.get("/dollar", (req, res) => {
  //store API into a var that we can use
  let API = "https://api.coindesk.com/v1/bpi/currentprice.json";
  request(API, (error, response, body) => {
    //if nothing goes wrong, generate the price quote for USD
    if (!error && response.statusCode == 200) {
      //this will parse the body into JavaScript so that we can use the data from JSON
      let data = JSON.parse(body);
      //this will store code, description, and rate into varables
      let currency = data.bpi.USD.code;
      let currencyDescription = data.bpi.USD.description;
      let rate = data.bpi.USD.rate;
      //this will render the dollar.ejs file which contains the currency description, currency, and price
      res.render("dollar", {
        code: currency,
        description: currencyDescription,
        rate: rate,
      });
    }
  });
});
//Same concepts applied as in app.get for dollar
app.get("/pound", (req, res) => {
  let API = "https://api.coindesk.com/v1/bpi/currentprice.json";
  request(API, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      let data = JSON.parse(body);
      let currency = data.bpi.GBP.code;
      let currencyDescription = data.bpi.GBP.description;
      let rate = data.bpi.GBP.rate;
      res.render("pound", {
        code: currency,
        description: currencyDescription,
        rate: rate,
      });
    }
  });
});
//Same concepts applied as in app.get for dollar
app.get("/eur", (req, res) => {
  let API = "https://api.coindesk.com/v1/bpi/currentprice.json";
  request(API, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      let data = JSON.parse(body);
      let currency = data.bpi.EUR.code;
      let currencyDescription = data.bpi.EUR.description;
      let rate = data.bpi.EUR.rate;
      res.render("eur", {
        code: currency,
        description: currencyDescription,
        rate: rate,
      });
    }
  });
});
//This will get us back to the home page
app.get("/index", (req, res) => {
  res.render("index");
});
//this will tell us which port the app is running on
app.listen(port, () => {
  console.log(`Bitcoin Price APP listen on port ${port}`);
});
