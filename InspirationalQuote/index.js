//required modules that we are going to use
const express = require("express");
const app = express();
const request = require("request");
//setting port to local host 3000
const port = process.env.PORT || 3000;
//this will let the index.js use the style sheet from public folder
app.use(express.static("public"));

//set the view engine to ejs so that we do not need to type .ejs anymore
app.set("view engine", "ejs");
//root route will render the index.ejs file
app.get("/", (req, res) => {
  res.render("index");
});
//this is the /quote route
app.get("/quote", (req, res) => {
  //store the API url into a variable
  let API = "https://type.fit/api/quotes";
  request(API, (error, response, body) => {
    //if nothing is wrong we generate a quote
    if (!error && response.statusCode == 200) {
      //this will parse the body into JavaScript so that we can use the data from JSON
      let quoteArray = JSON.parse(body);
      //this will generate a random number base on the length of the data array so from 0 to whatever the data array length is
      let randomNum = Math.floor(Math.random() * quoteArray.length);
      //this will store the random quote text
      let txt = quoteArray[randomNum].text;
      //this will store the random quote author
      let auth = quoteArray[randomNum].author;
      //this will render the quote.ejs file which contains the quote text and author
      res.render("quote", { text: txt, author: auth });
    }
  });
});
//this will tell us which port the app is running on
app.listen(port, () => {
  console.log(`Inspirational Quote app listen on port ${port}`);
});
