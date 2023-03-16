const router = require('express').Router();
const { Post, Comment, User } = require('../models');

// get all posts for homepage
router.get('/', async (req, res) => {
    try {
        // console.log(req.session.logged_in);
        const postData = await Post.findAll({
            include: [User],
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('all-posts', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    console.log(req.session.logged_in, "check logged in");
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});


// get single post
// router.get('/:id', async (req, res) => {
//     try {
//         const postData = await Post.findByPk(req.params.id, {
//             include: [
//                 User,
//                 {
//                     model: Comment,
//                     include: [User],
//                 },
//             ],
//         });
//         res.render('single-post', {
//             layout: 'main',
//             postData,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        const commentData = await Comment.findAll({
            where: {
                id: req.params.id
            },
            include: [{model: User}],
        })
        const comments = commentData.map((post) => post.get({plain: true}));
        const singlePost = postData.get({ plain: true})
        res.render('single-post', {
            ...singlePost,
            comments,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;