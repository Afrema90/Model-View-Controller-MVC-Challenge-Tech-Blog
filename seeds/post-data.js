const { Post } = require('../models');

const postData = [
  {
    title: "Wired",
   Post_description: "Wired is a massively popular publication, good at capturing real insights into the tech world, no stranger to topics like technology, entertainment, science, culture, politics, and social media."
  },
  {
    title: "TechCrunch",
    Post_description: "The blog publishes content on businesses related to tech, analysis of emerging trends in tech, technology news, and listings of new tech products in the market. It is one of the first publications to report broadly on tech startups."
  },
  {
    Title: "Recode",
    Post_description: "Recode is uncovering and explaining how our tech world is changing by focusing on the businesses of Silicon Valley."
  }
]
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;