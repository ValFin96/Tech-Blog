const { User } = require('../models');
const bcrypt = require('bcrypt');


const userData = [
    {
        username: 'Alex',
        password: `${bcrypt.hashSync("Alex12345", 10)}`,
    },
    {
        username: 'Peter',
        password: `${bcrypt.hashSync("Peter12345", 10)}`,
    },
    {
        username: 'Rahat',
        password: `${bcrypt.hashSync('Rahat12345', 10)}`,
    },
    {
        username: 'AAA',
        password: `${bcrypt.hashSync('AAA12345', 10)}`,
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;