const router = require('express').Router();
//const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');


//const { Tech, User } = require('../models');
//const withAuth = require('../utils/auth');

router.get('/',(req, res) => {
  console.log(req.session);

  Post.findAll({
   // include: [
     // 'id',
      //'title',
     // 'created_at',
      //'post_content'
     //User
    //],
  //try {
    // Get all techs and JOIN with user data
    //const techData = await Tech.findAll({
      // include: [
      //   {
      //     model: Comment,
      //     attributes: ['id','comment_text', 'post_id', 'user_id', 'created_at'],
      //     include: {
      //       model: User,
      //       attributes: ['username', 'twitter', 'github']
      //     }
      //   },
      //   {
      //     model: User,
      //     attributes: ['username', 'twitter', 'github']
      //   }
      // ]
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        console.log(posts)
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

  router.get('/post/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'created_at',
        'post_content'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username', 'twitter', 'github']
          }
        },
        {
          model: User,
          attributes: ['username', 'twitter', 'github']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
  
        // serialize the data
        const post = dbPostData.get({ plain: true });
  
        // pass data to template
        res.render('single-post', {
            post,
            logged_in: req.session.logged_in
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;