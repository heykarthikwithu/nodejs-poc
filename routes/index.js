var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
    res.render('login.ejs', { message: req.flash('loginMessage') });
});

router.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile.ejs', { user: req.user });
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.post(
    '/login',
    passport.authenticate('json', { failureRedirect: '/wronghere' }),
    function(req, res) {
        res.redirect('/');
    }
);

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}
