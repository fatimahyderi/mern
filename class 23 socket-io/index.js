//var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
// var ip = require("ip");
import express from 'express';
import http from 'http';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import {Server} from 'socket.io';
import ip from 'ip';



const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const server = http.createServer(app);
const io = new Server(server);
//const ip = ip();

var clients = [];
var incr = 1;

function getUsersList(){
  var usersList = [];
    for (var i = 0; i < clients.length; i++){
      usersList[i] = clients[i].n;
    }
  return usersList;
}

function setUserTyping(index){
  var usersList = [];
    for (var i = 0; i < clients.length; i++){
      usersList[i] = clients[i].n; 
    }
  usersList[index] = "💬 " + clients[index].n;
  return usersList;
}

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    console.log("testing")
  clients.push(socket);

  socket.on('start', function(){
      console.log('testing1')
    socket.emit('nick', "guest"+incr);
    clients[clients.indexOf(socket)].n = "guest"+incr;
    incr++;
    io.emit('users list', getUsersList());
  });

  socket.on('send chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('set nick', function(nick){
    io.emit('info', "New user: " + nick); 
    console.log(nick);
    clients[clients.indexOf(socket)].n = nick; 
    console.log(clients[clients.indexOf(socket)].n);
    io.emit('users list', getUsersList()); 
    console.log(getUsersList());
  });

  socket.on('typing', function(){
    io.emit('typing signal', setUserTyping(clients.indexOf(socket))); //console.log(setUserTyping(clients.indexOf(socket)));
  });

  socket.on('not typing', function(){
    io.emit('typing signal', getUsersList()); //console.log(getUsersList());
  });

  socket.on('disconnect', function() {
    if( clients[clients.indexOf(socket)].n == null ){
      //console.log('Guest disconnect!');
    }
    else{
      //console.log(clients[clients.indexOf(socket)].n +' disconnect!');
      io.emit('info', "User " + clients[clients.indexOf(socket)].n + " disconnected.");
    }
    clients.splice(clients.indexOf(socket),1);//clientIndex, 1);
    io.emit('users list', getUsersList());
   });
});

server.listen(3000, function(){
  console.log("listening on localhost:3000 and "+ip.address()+":3000");
});