const express = require('express');
const bodyParser = require('body-parser');
const {Server} = require('socket.io')

const io = new Server(); // creating a socket server
const app = express();

app.use(bodyParser.json());
io.on("connection",(socket)=>{}); 

app.listen(8000,()=> console.log('http server running at port 8000'));
io.listen(8001);
 
