import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const port = 8080;

const urlencoded = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

// const city = [
//     {title: 'Sindh', first: 'Karachi' , second: 'Hyderabad' },
//     {title: 'Punjab', first: 'Lahore' , second: 'Islamabad' },
// ]

// app.get('/', (req, res) => {
//     res.render('pages/home', {
//         city : city
//     })
// })

// app.get('/about',function(req,res){
//         res.send("hello world from about us");
//      })

app.get('/register',function(req,res){
    res.render('pages/register', {

    })
    //console.log(req);
})

app.post('/postdata',urlencoded,function(req,res){
    console.log(req);
    res.send("hello from " +req.body.fname);

  
})

app.listen(port);