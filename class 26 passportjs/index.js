import session from 'express-session';
import Express from 'express';
import passport from 'passport';
import passportFacebook from 'passport-facebook';
var FacebookStrategy = passportFacebook.Strategy;
const app = Express();
const port = 8000;

console.log(`server running on ${port}`)


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))


app.use(passport.session());

passport.use(new FacebookStrategy({
    clientID: 4911076705681262,
    clientSecret: 'f4e9fd0e0be8afc4fe2b1fca70b132e3',
    callbackURL: "http://localhost:8000/auth/facebook/callback",
    //profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified'],
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
        return cb(err, user);
      });
  }
));


app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {scope:['email']}),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });



app.listen(port);