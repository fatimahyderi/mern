import express from 'express';
import path from 'path';

const app = express();
const port = "8080";

console.log("working on port 8080")
app.use(express.static('public'));
app.use('/static',express.static('public'));
app.use('/static',express.static('public/css'));
app.set('view engine', 'ejs');

app.get('/login',function(req,res){
    console.log("login page")
    res.render('loginpage');
    
})
app.listen(port);