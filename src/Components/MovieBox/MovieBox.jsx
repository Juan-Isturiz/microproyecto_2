import React from 'react'
import { useState, useEffect,useContext } from 'react'
import axios from 'axios'
import styles from './MovieBox.module.css'
import { AppContext } from '../Context/AppContext'
import MovieBoxItem from '../MovieBoxItem/MovieBoxItem'
import MovieBoxList from '../MovieBoxList/MovieBoxList'


export default function MovieBox(props) {
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
  

  //
  //const renderMovies = () => (
  //  MovieList.slice(0, props.number).map(movie => (
  //    <MovieBoxItem
  //    key = {Math.random()}
  //    id = {movie.id}
  //    poster ={movie.poster_path!=null ? "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + `${movie.poster_path}`: ''}
  //    title ={movie.title}
  //    onMovie ={onClickHandler}
  //    />
  //  ))
  //)
//
  
  return (
    
    <div className={styles.MovieBoxDiv}>
      <h1 className={styles.HomeTitle}>McMovies</h1>
      <MovieBoxList  number={props.number} MovieList={MovieList}className={styles.MovieBox}/>
      <div>
        <button id={styles.HomePageMore}>MORE</button>
      </div>
    </div>
  )
}
