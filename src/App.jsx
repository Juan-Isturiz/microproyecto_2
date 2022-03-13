import { useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage'
import MovieView from './Components/MovieView/MoviewView'
import LogPage from './Pages/LogPage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LogPage />
    </div>
  )
}

export default App
