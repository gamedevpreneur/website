var express = require('express');
var fs = require('fs');
var createError = require('http-errors');
const Database = require('better-sqlite3');
const db = new Database('posts.db');
var router = express.Router();

/* GET home page. */
router.use('/:slug', function(req, res, next) {
  var slug = req.params['postId'];
  var post = db.prepare('SELECT * from posts where slug = ?').get(slug);

  if(post) {
    res.render('content', post);
  } else {
    next();
  }
});

router.use('/:view', function(req, res, next) {
  res.render(req.params['view']);
})

router.use('/', function(req, res, next) {
  res.render('index');
})

router.use(function(err, req, res, next) {
  if(req.app.get('env') === 'development') {
    next();
    return;
  }
  res.render('404');
})

module.exports = router;
