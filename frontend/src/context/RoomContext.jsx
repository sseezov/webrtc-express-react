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
  const navigate = useNavigate();

  useEffect(() => {
    const meId = uuidv4()

    const peer = new Peer(meId);
    setMe(peer);
    ws.on('room-created', ({ roomId }) => {
      navigate(`/room/${roomId}`)
    })
    ws.on('get_users', ({ participants }) => {
      console.log(participants);
    })
  }, [])

  return <RoomContext.Provider value={{ ws, me }}>{children}</RoomContext.Provider>
}