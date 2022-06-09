import {dbConnection} from '../database/connection.js';
import pkg from 'mongodb';
const {Mongoclient,ObjectId} = pkg;


const view = (req,res) => {
    dbConnection().then((client) => {
        const usersCollection = client.db('mydb').collection('UsersCollection');
            usersCollection.find( { } ).toArray(function(err, result) {
                if (err) throw err;
                res.render('view',{
                        products : result
                    });
            
    })
    })
}

const addform = (req,res) => {
    res.render('add');
}
const add = (req,res) => {
    dbConnection().then((client) => {
        const usersCollection = client.db('mydb').collection('UsersCollection');
        usersCollection.insertOne(req.body, (err,result) => {
            if(err) throw err;
            res.redirect('/')
        })
    })
}

const editdata = (req,res) => {
    console.log('inside update');
    console.log(req.params.id)
    dbConnection().then(async(client) => {
        const productdata = await client.db('mydb').collection('UsersCollection').findOne({
            _id: new ObjectId(req.params.id)
        });
        console.log(productdata)
    res.render('../views/edit', { productdata })
    })
}

const updatedata = (req,res) => {
    console.log("inside update data")
    dbConnection().then((client) => {
        const usersCollection = client.db('mydb').collection('UsersCollection');
        usersCollection.updateOne(
            {_id: new ObjectId(req.params.id)},
            {$set : { "productname" : req.body.productname, "brand" : req.body.brand, "model" : req.body.model}},
            (err,result) => {
                if(err) throw err;
                    res.redirect('/')
            }
            )
    })
}

const deletedata = (req,res) => {
    console.log("inside delete");
    dbConnection().then((client) => {
        const usersCollection = client.db('mydb').collection("UsersCollection");
        usersCollection.deleteOne(
            {_id: new ObjectId(req.params.id)},
            (err,result) => {
                if(err) throw err;
                    res.redirect('/')
            }
        )
    })
}

export {view , add , addform , editdata , updatedata , deletedata }