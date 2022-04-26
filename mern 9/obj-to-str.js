import fs from 'fs';
import http from 'http';

http.createServer(function(req, res) {
  

  var readerStream = fs.createReadStream('package.json');
  
readerStream.on('data', function(chunk) {
  var data = chunk;
   res.writeHead(200, {"content-type":"text/html"});
   res.end(JSON.stringify(data));
});
  

 
}).listen(8807);