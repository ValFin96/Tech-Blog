const { Comment } = require('../models');

const commentData = [
    {
        description: 'Wow this is amazing!',
    },
    {
        description: 'Great post!',
    },
    {
        description: 'I wish this post had more details',
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;