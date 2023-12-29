import { useState } from 'react';
import './App.css'

function App() {

  // let counter = 5

   let [counter,setCounter] = useState(5)

   const addValue = () => {
    console.log("value added");
    counter = counter + 1;
    setCounter(counter)
   }

   const decvalue = () => {
    setCounter(counter - 1)
   }
  return (
    <>
      <div>
        <h1> hi i am a student</h1>
        <h2>counter value {counter}</h2>
        <button
         onClick={addValue}>Add</button>
        <br></br>
        <button onClick={decvalue}>dec</button>
      </div>
      
    </>
  )
}

export default App
