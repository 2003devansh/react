import { useState } from 'react' 
import './App.css'
import Input from './components/input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text'>hi i am devnash</h1>
      <Input/>
    </>
  )
}

export default App
