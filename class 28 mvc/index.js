
import express from 'express';
import 'dotenv/config';
import {router} from './routes/route.js'
const app = express();

app.use(router);

app.set('view engine','ejs');

app.listen(process.env.port);