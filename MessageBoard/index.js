const { application } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const postRoutes = require('./routes/posts');
//This will require the posts.js file from the routes folder
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/message_board', {useNewUrlParser: true, useUnifiedTopology: true});
//This will connect us the the mongo database

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
//this will allow us to read from req.body
app.use(methodOverride('_method'));
app.use('/posts', postRoutes);
//The first arguement will add posts to the end of routes.

app.get('/', (req, res) => {
    res.redirect('posts');
});
//This will take us to /posts because we used app.use('/posts', postRoutes);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});