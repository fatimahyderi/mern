import express from "express";
import {shoppagelogin , userregister , shopview , addproductform , productadd} from "../controllers/controller.js"

const router = express.Router();
// const products = [];


// //const uri = "mongodb+srv://codegirls:codegirls12345@cluster0.v34dklr.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(process.env.uri, { useNewUrlParser: true, useUnifiedTopology: true });

// user side routes
router.get('/', shoppagelogin)
router.post('/login', userregister)
router.post('/shop' , shopview)

// admin side routes
router.get('/admin/product' , addproductform)
router.post('/admin/shop' , productadd)



// router.get('/add',addform)

// router.post('/add', add);
// // router.post('/add',function(req,res){
// //    // console.log(req.body)
// //     // products.push({
// //     //     productname : req.body.productname,
// //     //     brand: req.body.brand,
// //     //     model: req.body.model
// //     // });
// //     //res.redirect('/')
// //     //console.log(products);
// // })



// router.get('/edit',function(req,res){
//     res.render('edit');
// })
// router.get('/edit/:id', editdata);
// router.post('/edit/:id',updatedata);
//  router.get('/delete/:id', deletedata);
// router.get('/edit',function(req,res){
//     res.render('edit');
// })

// router.post('/edit',function(req,res){
    
// })



export {router}