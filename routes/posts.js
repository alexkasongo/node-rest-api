const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

/**
 * GET BACK ALL THE POSTS
 */
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});
/**
 * GET BACK SPECIFIC POST
 * postID is dynamic: anythinga added after post will be retrieved
 */
router.get('/:postID', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});
/**
 * MAKE A POST
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
            res.json({ message: err });
        })
});
/**
 * DELETE A POST
 */
router.delete('/:postID', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postID});
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err });
    }
});
/**
 * UPDATE A POST
 */
router.patch('/:postID', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postID}, 
            { $set: {title: req.body.title}}
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;