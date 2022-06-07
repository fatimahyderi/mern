import dotenv from 'dotenv';
import {MongoClient} from 'mongodb';

dotenv.config();
const client = new MongoClient(process.env.uri, { useNewUrlParser: true, useUnifiedTopology: true });
const mydb =()=> {client.connect((err) => {if(err) throw err;})
    return mydb;
}

export {mydb}