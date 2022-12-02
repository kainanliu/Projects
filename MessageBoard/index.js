const express = require('express');
const app = express();
const postRoutes = require('./routes/posts');
//This will require the posts.js file from the routes folder
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/posts', postRoutes);
//The first arguement will add posts to the end of routes.

app.get('/', (req, res) => {
    res.redirect('posts');
});
//This will take us to /posts because we used app.use('/posts', postRoutes);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});