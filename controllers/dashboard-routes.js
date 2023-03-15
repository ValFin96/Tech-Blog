const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require ('../utils/auth');

router.get('/', async (req, res) =>{
    try{
        console.log("Hello from dashboard routes");
        const postData = await Post.findAll({
            where:{
                user_id:req.session.user_id,
            },
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        
        res.render('all-posts-admin', {
            // layout: 'dashboard',
            posts,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/new', withAuth, (req, res) => {
    res.render('new-post', {
        layout: 'dashboard',
    });
});

router.get('/edit/:id', withAuth, async (req,res) => {
    try{
        const postData = await Post.finbByPK({
            where:{
                postId: req.params.id,
            },
            });

        if(postData){
            const postData = postData.get ({ plain: true });

            res.render('edit-post', {
                layout: 'dashboard',
                post,
            });
        } else {
            res.status(400).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;