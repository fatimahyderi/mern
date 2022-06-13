import mongoose from "mongoose";
import { dbConnection } from "../database/connection.js";

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    dateofbirth: {
        type: String
    },
    address: {
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
  }
})

// The alternative to the export model pattern is the export schema pattern.
const userDB = mongoose.model('Users', userSchema);
const productDB = mongoose.model('Products' , productSchema)

export { userDB , productDB}