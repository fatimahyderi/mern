import http from 'http';
import fs from 'fs';
import url from 'url';

http.createServer(function(req,res){
    
const address = 'https://geeksforgeeks.org/projects?sort=newest&lang=nodejs';
  
let urlObject = url.parse(address, true);
  
console.log('URL Object returned after parsing');
  
console.log(urlObject)

    //  if(req.url === '/about'){
    //      fs.readFile('./about.html','utf8',(err,data) =>{
    //          if(err) throw err;
    //          res.end(data);
    //      })
    //  }
}).listen(8080);