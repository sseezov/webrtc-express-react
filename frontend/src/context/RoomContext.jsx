import { createContext } from 'react'
import socketIO from 'socket.io-client'
import { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Peer from 'peerjs'

const WS = 'http://localhost:3000'

export const RoomContext = createContext(null);

const ws = socketIO(WS);

export const RoomProvider = ({ children }) => {
  const [me, setMe] = useState(null);
  const [stream, setStream] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const meId = uuidv4()

    const peer = new Peer(meId);
    setMe(peer);

    try {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => setStream(stream))
    } catch (error) {
      console.log(error);
    }

    ws.on('room-created', ({ roomId }) => {
      navigate(`/room/${roomId}`)
    })
    ws.on('get_users', ({ participants }) => {
      console.log(participants);
    })
  }, [])

  return <RoomContext.Provider value={{ ws, me, stream }}>{children}</RoomContext.Provider>
}