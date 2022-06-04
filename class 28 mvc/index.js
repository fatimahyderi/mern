
import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import {router} from './routes/route.js'
const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(router);
app.use(express.static('public'));
app.use('/static',express.static('public'));
app.use('/static',express.static('public/stylesheet'));

app.set('view engine','ejs');

console.log(process.env.port);
app.listen(process.env.port);