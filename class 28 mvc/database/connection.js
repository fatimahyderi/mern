//import dotenv from 'dotenv';
import pkg from 'mongodb';
const {MongoClient} = pkg;

//dotenv.config();
const dbConnection = async () => {
    const client = new MongoClient(process.env.uri);
    try{
        console.log('server connected')
        await client.connect();
    }
    catch(err){
        console.log(err)
    }
    return client;
}


export {dbConnection}