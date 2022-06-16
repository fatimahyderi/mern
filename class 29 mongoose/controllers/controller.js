import {dbConnection} from '../database/connection.js';
// import pkg from 'mongodb';
// const {Mongoclient,ObjectId} = pkg;
import mongoose from "mongoose";
import { userDB , productDB } from '../models/usercollection.js'


const shoppagelogin = (req,res) => {
    res.send('register')
}

const userregister = (req , res ) => {
    console.log(req.body)
    const user = new userDB({
        username: req.body.username,
        dateofbirth: req.body.dateofbirth,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password
    })
    console.log(user)
    user.save().then(() => {
        //res.send("data")
        res.render('login');
    });

}

const checkusername = (req,res) => {
    if(req.body.username == "admin"){
        res.send("u r admin")
    }
    else{
        res.send("u r user")
    }
}

const shopview = (req , res ) => {
    console.log(req.body)
    productDB.find().then(products => { 
       // res.render('../views/shop' , {products} )
       res.send(products)
    })
}

const addproductform = (req,res) => {
    res.render('productform')
}

const productadd = (req,res) =>{
        const productlist = new productDB({
            productname: req.body.productname,
            brand: req.body.brand,
            model: req.body.model,
            price: req.body.price,
            imagePath: req.body.imagePath
        })
        productlist.save().then(() => {
            res.send(`${productlist.productname} saved in db`)
        });
    
    
}

// const view = (req,res) => {
//     dbConnection().then((client) => {
//         const usersCollection = client.db('mydb').collection('UsersCollection');
//             usersCollection.find( { } ).toArray(function(err, result) {
//                 if (err) throw err;
//                 res.render('view',{
//                         products : result
//                     });
            
//     })
//     })
// }

// const addform = (req,res) => {
//     res.render('add');
// }
// const add = (req,res) => {
//     dbConnection().then((client) => {
//         const usersCollection = client.db('mydb').collection('UsersCollection');
//         usersCollection.insertOne(req.body, (err,result) => {
//             if(err) throw err;
//             res.redirect('/')
//         })
//     })
// }

// const editdata = (req,res) => {
//     console.log('inside update');
//     console.log(req.params.id)
//     dbConnection().then(async(client) => {
//         const productdata = await client.db('mydb').collection('UsersCollection').findOne({
//             _id: new ObjectId(req.params.id)
//         });
//         console.log(productdata)
//     res.render('../views/edit', { productdata })
//     })
// }

// const updatedata = (req,res) => {
//     console.log("inside update data")
//     dbConnection().then((client) => {
//         const usersCollection = client.db('mydb').collection('UsersCollection');
//         usersCollection.updateOne(
//             {_id: new ObjectId(req.params.id)},
//             {$set : { "productname" : req.body.productname, "brand" : req.body.brand, "model" : req.body.model}},
//             (err,result) => {
//                 if(err) throw err;
//                     res.redirect('/')
//             }
//             )
//     })
// }

// const deletedata = (req,res) => {
//     console.log("inside delete");
//     dbConnection().then((client) => {
//         const usersCollection = client.db('mydb').collection("UsersCollection");
//         usersCollection.deleteOne(
//             {_id: new ObjectId(req.params.id)},
//             (err,result) => {
//                 if(err) throw err;
//                     res.redirect('/')
//             }
//         )
//     })
// }

export {shoppagelogin , userregister , shopview , addproductform , productadd , checkusername}