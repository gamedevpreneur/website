var express = require('express');
var md5 = require('md5');
var hbs = require('hbs');
var fs = require('fs');
var createError = require('http-errors');
const Database = require('better-sqlite3');
const db = new Database('posts.db');
const commentsDB = new Database('comments.db');
var router = express.Router();

router.post('/comment', function(req, res, next) {
  var { comment, author, email, url, slug, parentID } = req.body;
  var imageUrl = md5(email.trim().toLowerCase());
  var info = commentsDB.prepare('INSERT INTO comments VALUES(?, ?, ?, ?, ?, ?, ?)')
    .run(comment, author, imageUrl, url, (new Date()).toString(), slug, parentID)
  
  fs.readFile('./views/partials/single-comment.hbs', (err, data) => {
    var template = hbs.handlebars.compile(data.toString());

    var ID = info.lastInsertROWID;
    res.json({
      ID,
      html : template({
        comment,
        author,
        imageUrl,
        url,
        slug,
        parentID,
        ID,
      })
    })

    next();
  })
})

router.use('/sitemap.xml', function(req, res, next) {
  fs.readFile('views/sitemap.xml', function(err, data) {
    res.set('Content-Type', 'text/xml');
    res.send(data.toString());
  })
})

router.use('/:slug', function(req, res, next) {
  var slug = req.params['slug'];
  var pages = [
    'blog',
    'secret-resources',
    'why-signup',
    'one-more-thing-to-do',
  ];

  var post = db.prepare('SELECT * from posts where slug = ?').get(slug);

  if (slug.match(new RegExp(pages.join('|')))) {
    res.render('page', post);
  } else {
    var comments = commentsDB.prepare('SELECT rowid as ID, * from comments where slug = ?').all(slug);
    post.comments = orderComments(comments);

    if(post) {
      res.render('content', post);
    } else {
      next();
    }
  }
});

function orderComments(comments) {
  var result = [];
  var indexTable = {};
  for(var i = 0; i < comments.length; i++) {
    if (comments[i].parentID == 0) {
      result.push(comments[i]);
      indexTable[comments[i].ID] = result.length - 1;
    } else {
      var pi = indexTable[comments[i].parentID]; // pi: parent index
      result[pi].children = result[pi].children ? result[pi].children : [];
      result[pi].children.push(comments[i]);
    }
  }

  return result;
}

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
