import fs from 'fs';
import http from 'http';

http.createServer(function(req, res) {
  

  var readerStream = fs.createReadStream('object.json');
  
readerStream.on('data', function(chunk) {
  var data = chunk;
   res.writeHead(200, {"content-type":"json"});
   res.end(data.toString());
});
  

 
}).listen(8807);