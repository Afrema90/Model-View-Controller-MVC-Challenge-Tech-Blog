const { Comment } = require('../models');

const commentData = [
  {
      user_id: 1,
      post_id: 5,
      comment_text: "This is amazing!"
  },
  {
      user_id: 4,
      post_id: 4,
      comment_text: "Wow, awesom work!"
  },
  {
      user_id: 1,
      post_id: 4,
      comment_text: "Big! kudos to everyone who have contributed"
  },
  {
      user_id: 3,
      post_id: 5,
      comment_text: "We just reached a million subscribers! Fantastic!"
  },
  {
      user_id: 3,
      post_id: 2,
      comment_text: "This is Amazing news!"
  },
  {
      user_id: 3,
      post_id: 4,
      comment_text: "This is one of our biggest and the most awaited feature. Keep up the good work!"
  },
  {
      user_id: 5,
      post_id: 3,
      comment_text: "Very userfriendly tool!"
  },
  {
      user_id: 2,
      post_id: 1,
      comment_text: "Nice tool!"
  }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;

// const userSeeds = require('./user-seeds');
// const postseed = require('./post-data');
// const { post } = require('../controllers');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userSeeds, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const post of postseed) {
//     await post.create({
//       ...post,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   process.exit(0);
// };

// const seedComments = () => Comment.bulkCreate(commentData);

// module.exports = seedComments;
