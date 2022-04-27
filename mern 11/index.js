import express from 'express';
import path from 'path';
const app = express();
const port = 8080

// app.get('/',function(req,res){
//     res.send("hello world");
// })

// app.get('/about',function(req,res){
//     res.send("hello world from about us");
// })

// app.get('/about/:id(\\d+)',function(req,res){
//     res.send("hello world from id");
// })

// app.get('/about/ab?cd',function(req,res){
//     res.send("hello world from abcds");
// })

// app.get('/about/:id/book/:id',function(req,res){
//     res.send("hello world from users");
// })

// app.get('/about/:id/form',function(req,res){
//          res.send("<form> <input type='text'><input type='submit' value='Submit'></form>");
//      })

app.get('/about/:id/form',function(req,res){
    res.sendFile(path.join('C:\Users\thinclient-142\Desktop\fatima\mern\mern 11\registerform.html'));
})

app.listen(port);