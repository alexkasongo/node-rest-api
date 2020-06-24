const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

/**
 * get posts from DB
 */
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({message: error});
    }
});
/**
 * make a post
 */
router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    post.save()
        .then(data => {
            res.json(data);
        })  
        .catch(err => {
            res.json({message: err});
        })
});

module.exports = router;