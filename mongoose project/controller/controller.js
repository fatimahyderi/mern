import {dbConnection} from '../database/connection.js';
// import pkg from 'mongodb';
// const {Mongoclient,ObjectId} = pkg;
import mongoose from "mongoose";
import { userDB , productDB , orderDB} from '../models/project.js'

const register = (req,res) => {
    res.render('register')
}

const saveuser = (req , res ) => {
    console.log(req.body)
    const user = new userDB({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    console.log(user)
    user.save().then(() => {
        //res.send("data")
        res.render('login');
    });

}


const checkuser = (req,res) => {
    console.log(req.body.username)
    if(req.body.username === "admin"){
        userDB.find({ username: 'admin'}, function (err, docs) {
            if (docs[0].password == req.body.password){
                productDB.find().then(products => { 
                    res.render('../views/adminview' , {products} )
                })
            }
            else{
                res.send("Password in correct");
            }
        });
        
    }
    else{
        const userdetails = userDB.find({ username: req.body.username},function(err,userdetails) {
             console.log(userdetails[0].username)
        });
        
        productDB.find().then((products,userdetails) => { 
            console.log(userdetails)
            //res.render('../views/userview' , {products , userdetails} )
        })
    }
}

const editproduct = (req,res) => {
    console.log(req.params.id)
    productDB.findById(req.params.id,(err,productData) => {
        if(err) throw err;
        res.render('../views/editproduct' , {productData})
    });
    //console.log(productData)
    //res.render('../views/editproduct' , {productData})

}

const update = (req, res) => {
    const id = req.params.id;
    productDB.findByIdAndUpdate(id, req.body);
    productDB.find().then(products => { 
        res.render('../views/adminview' , {products} )
    })
}

const addform = (req,res) => {
    res.render('addproduct')
}

const addproduct = (req,res) => {
    const productlist = new productDB({
        productname: req.body.productname,
        brand: req.body.brand,
        model: req.body.model,
        price: req.body.price,
        imagePath: req.body.imagePath
    })
    productlist.save().then((productDB.find().then(products => {
        res.render('../views/adminview' , {products})
    })));
}

const deleteproduct = (req,res) => {
    productDB.findOneAndDelete({_id:req.params.id}).then((productDB.find().then(products => {
        res.render('../views/adminview' , {products})
    })));
}

// User Controller

const addtocart = (req,res) => {
    console.log(req.params.id)
    productDB.findById(req.params.id , (err,productData) => {
        res.render('../views/addtocart page', {productData})
    })
}

const checkout = (req,res) => {
    const order = new orderDB
    res.render('checkout')
}

const orderpage = (req,res) => {
    orderDB.findById(req.res)
}

export { checkuser , register , saveuser , editproduct , update , addform , addproduct , deleteproduct , addtocart , checkout , orderpage}