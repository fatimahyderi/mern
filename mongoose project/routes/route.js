import express from "express";

const router = express.Router();
import {checkuser,register,saveuser,editproduct,update,addform,addproduct,deleteproduct,addtocart,checkout,orderpage} from '../controller/controller.js'

router.get('/' , register)
router.post('/login' , saveuser)
router.post('/shop', checkuser)

// Admin Routes for crud 
router.get('/admin/edit/:id',editproduct)
router.post('/admin/edit/:id' , update)
router.get('/admin/add' , addform)
router.post('/admin/add' , addproduct)
router.get('/admin/delete/:id' , deleteproduct)

// User Routes for order and checkout
router.get('/user/addtocart/:id',addtocart)
router.get('/user/checkout/:id' , checkout)
router.post('/user/checkout/:id' , orderpage)

export {router}