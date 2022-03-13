import React from 'react'
import { useState, useEffect,useContext } from 'react'
import axios from 'axios'
import styles from './MovieBox.module.css'
import { AppContext } from '../Context/AppContext'
import MovieBoxItem from '../MovieBoxItem/MovieBoxItem'


export default function MovieBox(props) {
  const { movieId, setMovieId } = useContext(AppContext)
  const onClickHandler =(movie)=>{
    
  }
  const [MovieList, setMovieList] = useState([{
    original_title: '',
    poster_path: null,
  }])

  const getMovieList = async (url) => {
    try {
      const data = await axios.get(url)
      setMovieList(data.data.results)
    } catch (error) {
      alert(error)
    }
  }
  useEffect(()=>{
    getMovieList("https://api.themoviedb.org/3/discover/movie?api_key=bb291031d3efe288820c538284501bf9")
  },[])
  
  
  console.log(MovieList)
  console.log(MovieList[0].title)
  
  const renderMovies = () => (
    MovieList.slice(0, props.number).map(movie => (
      <MovieBoxItem
      key = {Math.random()}
      id = {movie.id}
      poster ={movie.poster_path!=null ? "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + `${movie.poster_path}`: ''}
      title ={movie.title}
      />
    ))
  )

  
  return (
    
    <div className={styles.MovieBoxDiv}>
      <h1 className={styles.HomeTitle}>McMovies</h1>
      <div className={styles.MovieBox}> {/* Here will go 8 movies, brought from the API */}
      {renderMovies()}
        
      </div>
      <div>
        <button id={styles.HomePageMore}>MORE</button>
      </div>
    </div>
  )
}
