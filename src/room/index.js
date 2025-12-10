import { v4 as uuidv4 } from 'uuid';

export const roomHandler = (socket) => {
  const roomId = uuidv4();
  socket.on('create-room', () => {
    socket.emit('room-created', { roomId })
    console.log('room-created');
  })
  socket.on('disconnect', () => {
    console.log('a user disconnected');
  })
  socket.on('join-room', ({ roomId }) => {
    console.log('join-room', roomId);
    socket.join(roomId);
  })
}
