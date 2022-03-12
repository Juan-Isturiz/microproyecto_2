import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import HomePage from './Components/HomePage/HomePage'
import NavBar from './Components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      {/* <HomePage /> */}
    
    </div>
  )
}

export default App
