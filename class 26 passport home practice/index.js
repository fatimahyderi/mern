import  Express  from "express";
import expressSession from 'express-session';
import passport from 'passport';
import FacebookStrategy from 'passport-facebook';

const app = Express();
const port = 8080;

console.log(`Server running on port ${port}`);

app.use(expressSession({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

passport.use(new FacebookStrategy({
    clientID: 4911076705681262,
    clientSecret: 'f4e9fd0e0be8afc4fe2b1fca70b132e3',
    callbackURL: "http://localhost:8080/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

// app.get('/',(req,res,next) => {
//     // res.send('Session Started')
//     console.log(req.session)
//    console.log(req.session.views = (req.session.views || 0) + 1); 

//     // Write response
//     res.end(req.session.views + ' views')
// })

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.listen(port);