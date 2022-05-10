import express from 'express';

const app = express();
const port = 8080;

app.set('view engine', 'ejs');
// app.get('/',function(req,res){
//              res.send("hello world from about us");
//           })

app.get('/register', (req, res) => {
    
      res.render('pages/register', {
          
      })
 })

app.listen(port);