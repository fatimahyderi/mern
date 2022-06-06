
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import bodyParser from 'body-parser';
import 'dotenv/config';
//import {router} from './routes/route.js';

const uri = "mongodb+srv://codegirls:codegirls12345@cluster0.v34dklr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const app = express();


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 
//app.use(router);
app.use(express.static('public'));
app.use('/static',express.static('public'));
app.use('/static',express.static('public/stylesheet'));

app.set('view engine','ejs');

app.get('/',(req,res) => {
    console.log('index');
        client.connect(async (err) => {
            if(err) throw err;
            const usersCollection = client.db('mydb').collection('UsersCollection');
            res.render('view',{
                products : products
            });
    })
})


app.get('/add',(req,res) => {
    res.render('add');
})
app.post('/add',(req,res) => {
    console.log('add form');
    client.connect(async (err) => {
        if(err) throw err;
        const usersCollection = client.db('mydb').collection('UsersCollection');
        await usersCollection.insertOne(req.body, (err,result) => {
            if(err) throw err;
            res.redirect('/')
        })
    })
})
console.log(process.env.port);
app.listen(process.env.port);