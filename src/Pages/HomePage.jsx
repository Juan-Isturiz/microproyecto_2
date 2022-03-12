import React from 'react'
import Footer from '../Components/Footer/Footer'
import MovieBox from '../Components/MovieBox/MovieBox'
import NavBar from '../Components/NavBar/NavBar'

export default function HomePage() {
  return (
    <div>
        <NavBar />
        <MovieBox />
        <Footer />
    </div>
  )
}
