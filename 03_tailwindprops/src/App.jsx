import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import Card from './components/Card'

function App() {
  let myobj = {
    name: "narendra",
    age: "26",
  }

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="Delba" btnText="Show more" />
      <Card username="Hena" btnText="Visit more" />
    </>
  )
}

export default App
