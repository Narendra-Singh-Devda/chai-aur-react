import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("red")

  return (
    <div className='w-full h-screen duration-400' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 align-middle inset-x-0 px-2'>
        <div className='flex flex-wrap bg-white justify-center px-5 py-3 rounded-full gap-3'>
          <button onClick={() => setColor("red")} className='flex align-middle justify-center text-white py-2 px-5 rounded-3xl cursor-pointer shadow-2xl font-medium' style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("green")} className='flex align-middle justify-center text-white py-2 px-5 rounded-3xl cursor-pointer shadow-2xl font-medium' style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("blue")} className='flex align-middle justify-center text-white py-2 px-5 rounded-3xl cursor-pointer shadow-2xl font-medium' style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("olive")} className='flex align-middle justify-center text-white py-2 px-5 rounded-3xl cursor-pointer shadow-2xl font-medium' style={{backgroundColor: "olive"}}>Olive</button>
          <button onClick={() => setColor("gray")} className='flex align-middle justify-center text-white py-2 px-5 rounded-3xl cursor-pointer shadow-2xl font-medium' style={{backgroundColor: "gray"}}>Gray</button>
          <button onClick={() => setColor("yellow")} className='flex align-middle justify-center text-white py-2 px-5 rounded-3xl cursor-pointer shadow-2xl font-medium' style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setColor("pink")} className='flex align-middle justify-center text-white py-2 px-5 rounded-3xl cursor-pointer shadow-2xl font-medium' style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={() => setColor("purple")} className='flex align-middle justify-center text-white py-2 px-5 rounded-3xl cursor-pointer shadow-2xl font-medium' style={{backgroundColor: "purple"}}>Purple</button>
          <button onClick={() => setColor("lavender")} className='flex align-middle justify-center text-white py-2 px-5 rounded-3xl cursor-pointer shadow-2xl font-medium' style={{backgroundColor: "lavender"}}>Lavender</button>
          <button onClick={() => setColor("white")} className='flex align-middle justify-center text-white py-2 px-5 rounded-3xl cursor-pointer shadow-2xl font-medium' style={{backgroundColor: "white"}}>White</button>
          <button onClick={() => setColor("black")} className='flex align-middle justify-center text-white py-2 px-5 rounded-3xl cursor-pointer shadow-2xl font-medium' style={{backgroundColor: "black"}}>Black</button>
        </div>
        {/* hello */}
      </div>
    </div>
  )
}

export default App
