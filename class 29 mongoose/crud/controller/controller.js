import { itemsDB } from '../model/items.js'
import mongoose from "mongoose";


/*================== Render Route Views ========================*/
const createView = (req, res) => {
    res.render('../views/adduser.ejs')
}
const updateView = (req, res) => {
    
    const userData = itemsDB.findOne({
            _id: "62a01f1b30844a41b9b55796"
        });
        console.log(userData)
    res.render('../views/updateuser', { userData })
}

/*================== Route API For Crud Opr  ========================*/
const create = (req, res) => {
    const item = new itemsDB({
        name: req.body.item,
        color: req.body.color,
        brand: req.body.brand
    })
    item.save(item).then(data => {
        //res.send(data)
        res.redirect('/items');
    });
}

const update = (req, res) => {
    const id = req.params.id;
    itemsDB.findByIdAndUpdate(id, req.body).
        then(userData => {
            //res.send(data);
            res.render('../views/updateuser', { userData })
        });
}

const homeView = (req, res) => {
    itemsDB.find().
        then(userData => {
            res.render('index', { userData })
        });
}

export { create, update, createView, homeView, updateView }