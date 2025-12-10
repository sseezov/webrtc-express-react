import { useContext } from 'react'
import '../App.css'
import { RoomContext } from '../context/RoomContext'

const WS = 'http://localhost:3000'

function Home() {
  const { ws } = useContext(RoomContext)
  const joinRoom = () => {
    ws.emit('create-room')
  }

  return (
    <>
      <button onClick={()=>joinRoom()}>Start meeting</button>
    </>
  )
}

export default Home
