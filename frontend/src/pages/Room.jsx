import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router';
import { RoomContext } from '../context/RoomContext';
import { useEffect } from 'react';


const Room = () => {
  const { id } = useParams()
  const { ws, me } = useContext(RoomContext);
  useEffect(() => {
    if (me) ws.emit('join-room', { roomId: id, peerId: me._id })
  }, [id])


  return (
    <div>
      {`Room ${id}`}
    </div>
  );
}

export default Room;
