import { useState } from 'react'
import { useCallback,useEffect,useRef } from 'react'
import './App.css' 
import React from 'react'

function App() {

  const [length,setLength] = useState(8)
  const [numallowed,setNumallowed] = useState(false)
  const [charallowed,setCharallowed] = useState(false)
  const [password,setPassword] =  useState("")

 const passwordGenrator = useCallback(() =>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numallowed){
    str += "0123456789"
  }
  if(charallowed){
    str += "!@#$%^&*(){}"
  }
    
 for(let i = 0 ; i<=length;i++){
  let char = Math.floor(Math.random() * str.length + 1)
  pass += str.charAt(char)
 }
 setPassword(pass)

 },[length,numallowed,charallowed,setPassword])

 useEffect(() =>{passwordGenrator()},[length,numallowed,charallowed,passwordGenrator])

  return (
    <>
    <div className='pass'>
       <h1>Password generator</h1>
      <div className='innerdiv'>
        <input type="text"
        value={password}
        placeholder='password'
        readOnly />
        <button className='btn'>copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={8}
          max={100}
          value={length}
          className='cursor-pointer' 
          onChange={(e)=> {
           setLength(e.target.value)
          }}/>
          <label>Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numallowed}
          id='numberInput'
          onChange={() =>{
            setNumallowed((prev) => !prev);
          }} />
          <label htmlFor="numberInput">Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={charallowed}
          id='charInput'
          onChange={() =>{
            setCharallowed((prev) => !prev);
          }} />
          <label htmlFor="charInput">character</label>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default App