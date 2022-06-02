import Express  from "express";
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import LocalStrategy from 'passport-local';
LocalStrategy.Strategy


const app = Express();
const port = 8080;
const users = [];

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use('local' , new LocalStrategy({ usernameField: 'email' }))

app.set('view engine', 'ejs');

app.get('/register',function(req,res){
    res.render('register');
})

app.post('/register' , function(req,res){
    users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    res.redirect('/login')
    // var name = req.body.name;
    // console.log(req.body.email);
})

app.get('/login' , function(req,res){
    res.render('login');
})

app.post('/login' , function(req,res){
    const user_email = req.body.email;
    const userEmail = users.find(user => user.email == user_email)
    //console.log(userEmail.name);
    console.log(req.session)
    res.render('user', {name : userEmail})

})


app.listen(port , () => {
    console.log(`Server running on Port ${port}`)
})