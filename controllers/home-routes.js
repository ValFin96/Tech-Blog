const router = require('express').Router();
const { Post, Comment, User } = require('../models');

// get all posts for homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User],
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('all-posts', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
});

// get single post
router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment,
                    include: [User],
                },
            ],
        });
        // chec with mini project 
        res.render('single-post', {
            layout: 'main',
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;