// import Express from 'express';
// import passport from 'passport';
// import session from 'express-session';


// import passportFacebook from 'passport-facebook';

// const app = Express();
// const port = 8001;
// var FacebookStrategy = passportFacebook.Strategy;
// console.log(`server running on ${port}`)


// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: true }
//   }))

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use('facebook',new FacebookStrategy({
//     clientID: 4911076705681262,
//     clientSecret: 'f4e9fd0e0be8afc4fe2b1fca70b132e3',
//     callbackURL: "http://localhost:8001/auth/facebook/callback",
//     profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified'],
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     console.log(profile);
//     return cb;
//   }
// ));


// app.get('/auth/facebook', passport.authenticate('facebook'));

// app.get('/auth/facebook/callback',
//   passport.authenticate('facebook', {scope:['email']}),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });



// app.listen(port);

import express from 'express';
import passport from 'passport';
import session from 'express-session';
import passportFacebook from 'passport-facebook';

const app =express();
const port =3000;

var FacebookStrategy = passportFacebook.Strategy;

app.use(session({
    secret: 'keyboard cat',
    resave: false, 
    saveUninitialized: false ,
    cookie: {secure: true}
  }))

app.use(passport.initialize());
app.use(passport.session());  

passport.use('facebook', new FacebookStrategy({
    clientID: 702230420991997,
    clientSecret: "433c8375c036c1c59d0d77543cb7102e",
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'email']
  },
  function(accessToken, refreshToken, profile, cb) {
      console.log(profile);
       return cb;
  }
));

app.get('/', (req,res)=> {
    res.write("Home page");
    res.send();
});

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', passport.authenticate('facebook', { scope: ['email']}), function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');   
  });

// // used to serialize the user for the session
// passport.serializeUser(function(user, done) {
//     done(null, user.id); 
//    // where is this user.id going? Are we supposed to access this anywhere?
// });

// // used to deserialize the user
// passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//         done(err, user);
//     });

app.listen(port, ()=>{
    console.log("server is running on port 3000");
})