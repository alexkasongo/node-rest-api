const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/posts', (req, res) => {
    res.send('We are posts Aleko');
});
router.get('/specific', (req, res) => {
    res.send('We are specific Aleko');
});

router.post('/', (req, res) => {
    // const post = new Post({
    //     title: req.body.title,
    //     description: req.body.description
    // })

    console.log(`posts.js - 18`, req.body.title);

    // post.save()
    //     .then(data => {
    //         res.json(data);
    //     })  
    //     .catch(err => {
    //         res.json({message: err});
    //     })
});

module.exports = router;