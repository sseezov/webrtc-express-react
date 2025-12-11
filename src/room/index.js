import { v4 as uuidv4 } from 'uuid';

const rooms = {}

export const roomHandler = (socket) => {
  const roomId = uuidv4();
  socket.on('create-room', () => {
    rooms[roomId] = [];

    socket.emit('room-created', { roomId })
    console.log('room-created');
  })
  socket.on('disconnect', () => {
    console.log('a user disconnected');
  })
  socket.on('join-room', ({ roomId, peerId }) => {
    if (rooms[roomId]) {
      console.log('user jas joined a room ', roomId);
      rooms[roomId].push(peerId)
      socket.join(roomId);
      socket.emit('get_users', { roomId, participants: rooms[roomId] })
    }

    socket.on('disconnect', () => {
      rooms[roomId] = rooms[roomId].filter((id) => id !== peerId)
      socket.to(roomId).emit('user-disconnected', peerId)
    })
  })
}
