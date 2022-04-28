import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';


const app = express();
const port = 8080;
const __dirname = dirname(fileURLToPath(import.meta.url));
const urlencoded = bodyParser.urlencoded({ extended: false });

app.get('/register',function(req,res){
    res.sendFile(__dirname + '/register.html',function(err,text){
        res.send(text);
    })
})

app.post('/postdata',urlencoded,function(req,res){
    console.log(req);
    res.send("hello from " +req.body.fname);

  
})

app.listen(port);