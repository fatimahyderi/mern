import express from "express";
import bodyParser from 'body-parser';
const router = express.Router();
const products = [];


router.get('/add',function(req,res){
    res.render('add');
})

router.post('/add',function(req,res){
   // console.log(req.body)
    products.push({
        productname : req.body.productname,
        brand: req.body.brand,
        model: req.body.model
    });
    res.redirect('/')
    //console.log(products);
})

router.get('/edit',function(req,res){
    res.render('edit');
})

router.post('/edit',function(req,res){
    //console.log(req.body);
})

router.get('/',function(req,res){
    //console.log(products)
    res.render('view',{
        products : products
    });
});

export {router}