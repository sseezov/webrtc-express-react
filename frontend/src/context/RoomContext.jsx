import { createContext } from 'react'
import socketIO from 'socket.io-client'
const WS = 'http://localhost:3000'

export const RoomContext = createContext(null);

const ws = socketIO(WS);

export const RoomProvider = ({ children }) => {
  return <RoomContext.Provider value={{ ws }}>{children}</RoomContext.Provider>
}