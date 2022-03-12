import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import HomePage from './Components/HomePage/HomePage'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Footer />
    
    </div>
  )
}

export default App
