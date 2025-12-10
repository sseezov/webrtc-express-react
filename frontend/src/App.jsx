import socketIO from 'socket.io-client'
import './App.css'
import { useEffect } from 'react'

const WS = 'http://localhost:3000'

function App() {
  useEffect(()=>{
    socketIO(WS)
  }, [])

  return (
    <>
s
    </>
  )
}

export default App
