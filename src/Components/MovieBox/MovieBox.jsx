import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './MovieBox.module.css'


export default function MovieBox(props) {
  const urlAPI = "https://api.themoviedb.org/3/discover/movie?api_key=bb291031d3efe288820c538284501bf9";
  const keyAPI = "bb291031d3efe288820c538284501bf9";

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
      <div className={styles.BoxChild} key = {Math.random()}>
        <a href=""> {/* TODO poner links que lleven al MovieDetails */}
        {movie.poster_path!=null && <img src= {"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + `${movie.poster_path}`} alt="" className={styles.PosterBoxChild} />}
        
        </a>
        {movie.title}
      </div>
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
