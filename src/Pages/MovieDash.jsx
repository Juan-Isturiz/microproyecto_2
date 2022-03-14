import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development'
import MovieBox from '../Components/MovieBox/MovieBox'
import NavBar from '../Components/NavBar/NavBar'

import Search from '../Components/Search/Search'

export default function MovieDash() {

  let url = "https://api.themoviedb.org/3/discover/movie?api_key=bb291031d3efe288820c538284501bf9&page="

  // const [Page, setPage] = useState(0)

  // function seeNextPage() {
  //   setPage((Page) => Page + 1)
  //   console.log(Page)
  // }

  // useEffect(() => {
  //   url += `${Page}`  
  // }, [Page])


  return (
    <div>
      <NavBar />
      {/* <Search />  */}
      <MovieBox number={20} url={url} title="Dash" home = {false}/>
    </div>
  )
}
