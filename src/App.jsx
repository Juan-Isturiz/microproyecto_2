import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import HomePage from './Pages/HomePage'
import MovieView from './Components/MovieView/MoviewView'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <MovieView />
    </div>
  )
}

export default App
