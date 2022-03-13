import React from 'react'
import { useState, useEffect,useContext } from 'react'
import axios from 'axios'
import styles from './MovieBox.module.css'
import { AppContext } from '../Context/AppContext'
import MovieBoxItem from '../MovieBoxItem/MovieBoxItem'
import MovieBoxList from '../MovieBoxList/MovieBoxList'
import { Link } from 'react-router-dom'


export default function MovieBox(props) {
  // const [MovieList, setMovieList] = useState([{
  //   original_title: '',
  //   poster_path: null,
  // }])
  // const getMovieList = async (url) => {
  //   try {
  //     const data = await axios.get(url)
  //     setMovieList(data.data.results)
  //     console.log(data.data)
  //   } catch (error) {
  //     alert(error)
  //   }
  // }

  // const [Page, setPage] = useState(1)

  // const [Url, setUrl] = useState(props.url)

  // useEffect(()=>{
  //   setUrl(props.url + `${Page}`)
  //   getMovieList(Url)
  // },[Page])
  
  // function seeNextPage() {
  //   setPage(Page+1)
  //   console.log(Page)
  // }
// -------------------------------
  const [counter, setCounter] = useState(1)
  const url = "https://api.themoviedb.org/3/discover/movie?api_key=bb291031d3efe288820c538284501bf9&page="
  const [MovieList, setMovieList] = useState([{
      original_title: '',
      poster_path: null,
  }])
  const getMovieList = async (url) => {
      try {
        const data = await axios.get(`${url}${counter}`)
        setMovieList(data.data.results)
        console.log(data.data.page)
      } catch (error) {
        alert(error)
      }
    }
    useEffect(()=>{
      getMovieList(url)
    },[counter])
  const submitHandlerNextPage = (event) => {
      event.preventDefault()
      setCounter((counter) => counter + 1)

  }
  const submitHandlerPrevPage = (event) => {
    event.preventDefault()
    setCounter((counter) => counter - 1)
  }
// ---------------------------


  return (
    
    <div className={styles.MovieBoxDiv}>
      <h1 className={styles.HomeTitle}>{props.title}</h1>
      <MovieBoxList  number={props.number} MovieList={MovieList}className={styles.MovieBox}/>
      <div>
        {}
        <div className={styles.LinkToDash}>
            <Link to="/MovieDash">MORE</Link>
        </div>
        <div className={styles.PrevNextButtons}>
          <button type='submit' onClick={submitHandlerPrevPage}>prev page</button>
          you are on page {counter}
          <button type='submit' onClick={submitHandlerNextPage}>next page</button>
        </div>
      </div>
    </div>
  )
}
