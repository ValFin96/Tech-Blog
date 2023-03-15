const { Post } = require('../models');

const postData = [
    {
        title: "How to become successful",
        content: "This is a post on how to become successful without any effort",
        user_id:1,
        post_id:1
    },
    {
        title: "Five ways to get a job in IT",
        content: "This is a post on how to get a job in IT very quick",
        user_id:2,
        post_id:2
    },
    {
        title: "Bring the best out of you without burning out",
        content: "This is a post on how to bring the best out of yourself without burning out",
        user_id:3,
        post_id:3
    },
]
const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;