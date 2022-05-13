import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';


const app = express();
const port = 8888;
// const __dirname = dirname(fileURLToPath(import.meta.url));
// const urlencoded = bodyParser.urlencoded({ extended: false });

// app.get('/register',function(req,res){
//     res.sendFile(__dirname + '/register.html',function(err,text){
//         res.send(text);
//     })
// })

// app.post('/postdata',urlencoded,function(req,res){
//     console.log(req.body);
//     if(req.body.fname=='fatima'){
//         res.send(`hello from ${req.body.fname}`);
//     }
//     else{
//         res.send(`sorry ${req.body.fname} , you r not allowed`);
//     }
    

  
// })
const a = "function";
const b = "testing";

const use = (a) => {
   return a;
};

const callback = () => {
   console.log(`${use(a)} js`) ;

}

console.log(callback());




app.listen(port);