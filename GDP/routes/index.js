var express = require('express');
var fs = require('fs');
var createError = require('http-errors');
const Database = require('better-sqlite3');
const db = new Database('posts.db');
const commentsDB = new Database('comments.db');
var router = express.Router();

router.post('/comment', function(req, res, next) {
  var { comment, author, email, url, slug, parentID } = req.body;
  commentsDB.prepare('INSERT INTO comments VALUES(?, ?, ?, ?, ?, ?, ?)')
    .run(comment, author, email, url, (new Date()).toString(), slug, parentID)
})


router.use('/:slug', function(req, res, next) {
  var slug = req.params['slug'];
  var post = db.prepare('SELECT * from posts where slug = ?').get(slug);
  var comments = commentsDB.prepare('SELECT * from comments where slug = ?').all(slug);
  post.comments = comments;

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
