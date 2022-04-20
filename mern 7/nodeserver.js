import http from 'http';

const createBody = (req,res) => {
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>Hello !! </h1>');
    res.end();
}

const server = http.createServer(createBody);
server.listen(8080);
