import dotenv from 'dotenv';
import express from 'express';
import pkg from 'mongodb';
import bodyParser from 'body-parser';
import {router} from './routes/route.js';
import { dbConnection } from './database/connection.js';

const {Mongoclient,ObjectId} = pkg;
dotenv.config();
const app = express();


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(router);
app.use(express.static('public'));
app.use('/static',express.static('public'));
app.use('/static',express.static('public/stylesheet'));

app.set('view engine','ejs');

dbConnection();
console.log(process.env.port);
app.listen(process.env.port);