import { useState } from 'react'
import './App.css'
import Routering from "./Routering"
import { BrowserRouter as Router } from "react-router-dom";
import  ContextProvider from './Components/Context/AppContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <ContextProvider>
      <div className="App">
        <Routering />
      </div>
      </ContextProvider>
    </Router >


  )
}

export default App
