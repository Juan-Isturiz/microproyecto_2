import React from 'react'
import Footer from '../Components/Footer/Footer'
import MovieBox from '../Components/MovieBox/MovieBox'
import NavBar from '../Components/NavBar/NavBar'

export default function HomePage() {
  

  return (
    
    <div>
        <MovieBox number = {8} url = {"https://api.themoviedb.org/3/discover/movie?api_key=bb291031d3efe288820c538284501bf9&page="} title="McMovies" home={true} />
        <Footer />
    </div>
  )
}
