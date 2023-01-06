const { Comment } = require('../models');

const userSeeds = require('./user-seed.js');
const postseed = require('./post-seed.js');
const { post } = require('../controllers');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeeds, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postseed) {
    await post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
