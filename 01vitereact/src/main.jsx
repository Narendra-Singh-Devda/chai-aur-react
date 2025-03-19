import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1>custom app</h1>
    </div>
  )
}

// objects not returns
// const ReactElement =  {
//   type : 'a',
//   props: {
//       href : 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anchorValue = 'Google pe jayega kay';
const anotherElement = (
  <a href="https://goggle.com" target="_blank">Visit Google</a>
)

const reactElement = React.createElement(
  'a',
   {href: 'https://google.com', target: '_blank'},
   anchorValue
)

createRoot(document.getElementById('root')).render(
  // <App/>
  reactElement
)