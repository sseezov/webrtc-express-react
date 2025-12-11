import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router';
import { RoomContext } from '../context/RoomContext';
import { useEffect } from 'react';
import { VideoPlayer } from '../components/VideoPlayer';


const Room = () => {
  const { id } = useParams()
  const { ws, me, stream } = useContext(RoomContext);
  useEffect(() => {
    if (me) ws.emit('join-room', { roomId: id, peerId: me._id })
  }, [id, me, ws])


  return (
    <div>
      {`Room ${id}`}
      <VideoPlayer stream={stream}/>
    </div>
  );
}

export default Room;
