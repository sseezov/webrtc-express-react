const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:5173', // Allow only this origin
    methods: ['GET', 'POST'] // Allow specific methods if needed
  }
});

app.get('/', (req, res)=>{
  res.send('ok')
})

io.on('connection', (socket) => {
  console.log('A user connected');
});

httpServer.listen(3000, () => {
  console.log('Socket.IO server listening on port 3000');
});