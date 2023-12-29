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
        <h1>Nigga this is a counter!!!</h1>
        <h2>counter value {counter}</h2>
        <button id='addbtn'
         onClick={addValue}>Add</button>
        <button id='decbtn' onClick={decvalue}>dec</button>
      </div>
      
    </>
  )
}

export default App
