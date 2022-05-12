import express from 'express';

const app = express();
const port = 8080;

app.set('view engine', 'ejs');
// app.get('/',function(req,res){
//              res.send("hello world from about us");
//           })

const users = [
      {
            id : 1,
            name: 'Ali',
            username: 'Ali',
            email: 'ali@gmail.com',
      },

      {
            id : 2,
            name: 'Aliya',
            username: 'Aliya',
            email: 'aliya@gmail.com',
      },

      {
            id : 3,
            name: 'Aliza',
            username: 'Aliza',
            email: 'aliza@gmail.com',
      },

      {
            id : 4,
            name: 'Aliyan',
            username: 'Aliyan',
            email: 'aliyan@gmail.com',
      }

]
app.get('/register', (req, res) => {
    
      res.render('pages/register', {
          
      })
 })

app.get('/login', (req, res) => {
    
      res.render('pages/login', {
          
      })
 }) 

app.get('/user/:id', (req, res) => {
      //to check user id in params
      var user_id = req.params['id'];
      //console.log(user_id);
      //to find user id from user array object
      const user_in_id = users.find(user => user.id == user_id)
      //console.log(user_in_id);
      res.render('pages/user', {
          user : user_in_id
      })
 })

app.listen(port);