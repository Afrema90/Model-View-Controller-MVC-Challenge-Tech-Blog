const { Comment } = require('../models');

const userseed = require('./user-seed.js');
const postseed = require('./post-seed.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const tech of postData) {
    await Tech.create({
      ...tech,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
