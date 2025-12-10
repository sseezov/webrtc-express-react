import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';
import cors from 'cors'

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // Allow only this origin
    methods: ['GET', 'POST'] // Allow specific methods if needed
  }
});

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors({
  origin: 'http://localhost:5173' // This should match your frontend URL
}));

app.get('/', (req, res) => {
  res.send('ok')
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});