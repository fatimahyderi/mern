import fs from 'fs';
import http from 'http';

http.createServer(function(req, res) {
  var writeStream = fs.createWriteStream('./output');

  req.pipe(writeStream);

  var readerStream = fs.createReadStream('registerform.html');
  // Set the encoding to be utf8. 

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
  var data = chunk;
   res.writeHead(200, {"content-type":"text/html"});
   res.end(data);
});
  

  writeStream.on('error', function (err) {
    console.log(err);
  });
}).listen(8080);