import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789" 
    if(charAllowed) str += "!@#$%^&*_+={}[]~`"
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)

  }
  , [length, setPassword, charAllowed, setPassword])

  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange bg-gray-800'>
       <h1 className='text-center text-white mb-3'>Password generator</h1>
       <div className='flex overflow-hidden shadow rounded-lg mb-4'>
        <input type="text" className='outline-none font-semibold bg-white w-full py-1 px-3' placeholder='Password'value={password} />
        <button type='button' className='bg-blue-700  text-white py-1 px-3 shadow shrink-0'>Copy</button>
       </div>

       <div className='flex text-sm gap-x-2 text-orange-400'>
        <div className="flex items-center gap-x-1">
          <input type="range" min={6} max={12} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}} />
          <label htmlFor="">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultValue={numberAllowed} className='cursor-pointer' onChange={() => {setNumberAllowed((prev) => !prev)}} />
          <label htmlFor="">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultValue={charAllowed} className='cursor-pointer' onChange={(e) => {setCharAllowed((prev)=> !prev)}} />
          <label htmlFor="">Characters</label>
        </div>
       </div>
    </div>
    </>
  )
}

export default App
