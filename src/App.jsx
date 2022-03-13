import { useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage'
import MovieView from './Components/MovieView/MoviewView'
import Routering from "./Routering"
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar'
import LogPage from './Pages/LogPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routering />
      </div>
    </Router >


  )
}

export default App
