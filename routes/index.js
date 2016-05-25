var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Accurate Door Systems' });
});

router.get('/residential', function(req, res, next) {
  res.render('index', { title: 'Residential' });
});

router.get('/commercial', function(req, res, next) {
  res.render('index', { title: 'Commercial' });
});

router.get('/partsandservice', function(req, res, next) {
  res.render('index', { title: 'Parts & Service' });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

module.exports = router;
