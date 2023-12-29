import { useState } from 'react'

import './App.css'

function App() {
   const [color,setColor] = useState("olive")

  return (
    <>
      <div className ="w-screen h-screen" 
      style={{background: color}}
      
      >hi this is color changer</div>
    </>
  )
}

export default App
