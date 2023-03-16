const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    console.log("Post to create a post")
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    console.log("Tryint to update...")
    try {
        console.log("Trying to update the post")
        const [affectedRows] = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(400).end();
        }
        console.log(affectedRows);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const [affectedRows] = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(400).end()
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;