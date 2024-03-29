const seedComment = require('./comment-seeds');
const seedPost = require('./post-seeds');
const seedUser = require('./user-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUser();
    console.log('\n----- User SEEDED -----\n');

    await seedPost();
    console.log('\n----- Posts SEEDED -----\n');

    await seedComment();
    console.log('\n----- Commments SEEDED -----\n');

    process.exit(0);
};

seedAll();