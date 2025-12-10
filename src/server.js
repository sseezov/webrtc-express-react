import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { roomHandler } from './room/index.js';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // Allow only this origin
    methods: ['GET', 'POST'] // Allow specific methods if needed
  }
});

app.get('/', (req, res) => {
  res.send('ok')
});

io.on('connection', (socket) => {
  console.log('a user connected');
  roomHandler(socket)
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});