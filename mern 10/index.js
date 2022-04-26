import http from 'http';
import fs from 'fs';

http.createServer(function(req,res){
    let filename = req.url;
    let folderarray = fs.readdir('.',(files));
    for(let i =0; i<folderarray.length;i++){
        if (folderarray[i] === filename){
            fs.readFile('./about.html','utf8',(err,data) =>{
                         if(err) throw err;
                         res.end(data);
                    })
        }
    }
    
    // if(req.url === '/about'){
    //     fs.readFile('./about.html','utf8',(err,data) =>{
    //         if(err) throw err;
    //         res.end(data);
    //     })
    // }
}).listen(8080);