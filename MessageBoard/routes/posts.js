const express = require('express');
const router = express.Router();
//When we use a different route that is not in the index.js file, we need router() method to help us create separate route

router.get('/', (req, res) =>{
    const threads = [{
        topic: 'fake data',
        message: 'I added fake data so that I can practice it',
        name: 'Kainan'
    }];
    res.render('index', {posts: threads});
    //posts(posts route): threads(const threads which is the fake data)
});
//This will render index.ejs

module.exports = router;
//The module.exports is going to let us read this file when we require it in the index.js