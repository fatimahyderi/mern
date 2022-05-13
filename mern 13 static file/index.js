import express from "express";
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';

const app = express();
const port = 8080;
// const __dirname = dirname(fileURLToPath(import.meta.url));
// console.log(__dirname);
app.use(express.static("public")); // Serves resources from public folder
app.use(express.static("/images"));
// app.use('/static', express.static('public'))
// const stat = express.static('/images');
// console.log(stat);
console.log("working on port 8080");

app.listen(port);
