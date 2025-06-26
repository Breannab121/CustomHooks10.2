import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrentCounter from './components/CurrentCounter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1>Counter</h1>
          <CurrentCounter />
          <p>Use ArrowUp to increment and ArrowDown to decrement.</p>
      </div> 
    </>
  )
}

export default App

