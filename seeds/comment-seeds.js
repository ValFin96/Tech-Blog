const { Comment } = require('../models');

const commentData = [
    {
        description: 'Wow this is amazing!',
        user_id:1,
        post_id:1
    },
    {
        description: 'Great post!',
        user_id:2,
        post_id:2
    },
    {
        description: 'I wish this post had more details',
        user_id:3,
        post_id:3
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;