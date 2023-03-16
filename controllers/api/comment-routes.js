const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        console.log("++++++++++++++++++++++++++++++")
        console.log(req.body)
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            post_id: req.body.postId
        });
        res.json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;