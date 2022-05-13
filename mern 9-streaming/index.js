import fs from 'fs';
import http from 'http';

http.createServer(function(req, res) {
  var writeStream = fs.createWriteStream('./output');

  req.pipe(writeStream);

  var readerStream = fs.createReadStream('registerform.html');
  

readerStream.on('data', function(chunk) {
  var data = chunk;
   res.writeHead(200, {"content-type":"text/html"});
   res.end(data);
});
  

  writeStream.on('error', function (err) {
    console.log(err);
  });
}).listen(8080);