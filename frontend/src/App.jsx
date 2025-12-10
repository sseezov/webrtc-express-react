import { useContext } from 'react'
import './App.css'
import { useEffect } from 'react'
import { RoomContext } from './context/RoomContext'

const WS = 'http://localhost:3000'

function App() {
  const { ws } = useContext(RoomContext)
  const joinRoom = () => {
    ws.emit('join-room')
  }
  useEffect(() => {

  }, [])

  return (
    <>
      <button onClick={()=>joinRoom()}>Start meeting</button>
    </>
  )
}

export default App
