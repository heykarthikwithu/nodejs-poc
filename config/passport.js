var JsonStrategy = require('passport-json').Strategy;
// var Users = {
//     "email": "admin",
//     "password": "admin"
// };

module.exports = function(passport) {
    passport.use(new JsonStrategy(
        {
            usernameProp: 'email',
            passwordProp: 'passwd',
            passReqToCallback: true
        },
        ocAuthenticate
    ));
};

function ocAuthenticate(req, email, password, done) {
    console.log(email);
    console.log(password);
    // User.findOne({ 'local.email':  email }, function(err, user) {
    //     if (err)
    //         return done(err);
    //     if (!user)
    //         return done(null, false, req.flash('loginMessage', 'No user found.'));
    //     if (!user.validPassword(password))
    //         return done(null, false, req.flash('loginMessage', 'Wrong password.'));
    //     return done(null, user);
    // });
}