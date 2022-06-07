import dotenv from 'dotenv';
import express from "express";
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';

dotenv.config();
const router = express.Router();
const products = [];


//const uri = "mongodb+srv://codegirls:codegirls12345@cluster0.v34dklr.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(process.env.uri, { useNewUrlParser: true, useUnifiedTopology: true });


router.get('/add',function(req,res){
    res.render('add');
})

// router.post('/add',function(req,res){
//    // console.log(req.body)
//     // products.push({
//     //     productname : req.body.productname,
//     //     brand: req.body.brand,
//     //     model: req.body.model
//     // });
//     //res.redirect('/')
//     //console.log(products);
// })

router.post('/add',(req,res) => {
    console.log('add form');
    console.log(req.body);
    client.connect(async (err) => {
        if(err) throw err;
        const usersCollection = client.db('mydb').collection('UsersCollection');
        await usersCollection.insertOne(req.body, (err,result) => {
            if(err) throw err;
            res.redirect('/')
        })
    })
})

router.get('/edit',function(req,res){
    res.render('edit');
})

router.post('/edit',function(req,res){
    
})

router.get('/',(req,res) => {
    console.log('index');
        client.connect(async (err) => {
            if(err) throw err;
            const usersCollection = client.db('mydb').collection('UsersCollection');
            var  url = "mongodb://localhost:8080/mydb";
            await usersCollection.find( { } ).toArray(function(err, result) {
                if (err) throw err;
                res.render('view',{
                        products : result
                    });
            
    })
})
})

export {router}