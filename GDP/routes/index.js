var express = require('express');
var fs = require('fs');
var createError = require('http-errors');
var router = express.Router();

/* GET home page. */
router.use('/:postId', function(req, res, next) {
  var id = req.params['postId'];
  fs.readFile('./pages/' + id + '.html', (err, data) => {
    if (err) {
      fs.stat('./views/' + id + '.hbs', function(err2, stat) {
        if(err2) {
          next(); 
        } else {
          res.render(id);
        }
      });
      return;
    }
    res.send(data.toString());
  })
});

router.use('/:view', function(req, res, next) {
  res.render(req.params['view']);
})

router.use('/', function(req, res, next) {
  res.render('blog');
})

router.use(function(err, req, res, next) {
  if(req.app.get('env') === 'development') {
    next();
    return;
  }
  res.render('404');
})

module.exports = router;
