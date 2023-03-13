const { Post } = require('../models');

const postData = [
    {
        title: "How to become successful",
        content: "This is a post on how to become successful without any effort"
    },
    {
        title: "Five ways to get a job in IT",
        content: "This is a post on how to get a job in IT very quick"
    },
    {
        title: "Bring the best out of you without burning out",
        content: "This is a post on how to bring the best out of yourself without burning out"
    },
]
const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;