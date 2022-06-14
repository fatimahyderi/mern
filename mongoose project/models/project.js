import mongoose from "mongoose";
import { dbConnection } from "../database/connection.js";

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type:String
    }
});

const productSchema = new mongoose.Schema({
  productname: {
    type: String
  },
  brand: {
    type: String
  },
  model: {
    type: String
  },
  imagePath: {
    type: String
  },
  price: {
    type: Number
  }
})

// The alternative to the export model pattern is the export schema pattern.
const userDB = mongoose.model('Users', userSchema);
const productDB = mongoose.model('Products' , productSchema)

const orderSchema = new mongoose.Schema({
    total:{
        type: Number
    },
    user_id:{
        type: mongoose.Schema.ObjectId,
        ref:userDB
    }
})
const orderDB = mongoose.model('Orders', orderSchema)

export { userDB , productDB , orderDB }