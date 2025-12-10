import { createContext } from 'react'
import socketIO from 'socket.io-client'
import { useEffect } from 'react'
import { useNavigate } from 'react-router';

const WS = 'http://localhost:3000'

export const RoomContext = createContext(null);

const ws = socketIO(WS);

export const RoomProvider = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    ws.on('room-created', ({roomId}) => {
      navigate(`/room/${roomId}`)
    })

  }, [])

  return <RoomContext.Provider value={{ ws }}>{children}</RoomContext.Provider>
}