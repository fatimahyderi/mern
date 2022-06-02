import express from "express";
const router = express.Router();


router.get('/add',function(req,res){
    res.render('add');
})

export {router}