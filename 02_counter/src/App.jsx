import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)

  const addvalue = () => {
    if(counter < 20) {
      setCounter(counter + 1);
    }
  }
  const removevalue = () => {
    if(counter > 0 ) {
     setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>Hello</h1>
      <h1>Check the counter: {counter}</h1>

      <div className='button-inline'>
        <button onClick={addvalue}>Add value : {counter}</button>
        <button onClick={removevalue}>Remove value: {counter}</button>
      </div>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
