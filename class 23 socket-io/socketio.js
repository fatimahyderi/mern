import express from 'express';
import http from 'http';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import {Server} from 'socket.io';



const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const server = http.createServer(app);
const io = new Server(server);



app.get('/', (req, res) => {
  //res.send('<h1>Hello world</h1>');
  res.sendFile(__dirname + '/chat.html');
});

io.on('connection', (socket) => {
    //console.log(socket.client.conn.server);
    //console.log('a user connected');
    let connectedUsersCount =  socket.client.conn.server.clientsCount;
    //let oneUserLeft = connectedUsersCount - 1;
    // socket.on('onlineuser' , (connectedUsersCount) => { 
    //     io.emit('onlineuser' ,connectedUsersCount)
    // })
    socket.emit("counter", connectedUsersCount);
    socket.emit("typing","User is Typing");
    // socket.on('counter',(connectedUsersCount)=>{
    //   console.log( socket.client.conn.server.clientsCount + " users connected" );
    //   io.emit('counter' , connectedUsersCount)
    // });
    //console.log( socket.client.conn.server.clientsCount + " users connected" );
    socket.on('chat message', (msg) => {
        socket.broadcast.emit('chat message', msg);
      });


  });
  

server.listen(3000, () => {
  console.log('listening on *:3000');
});