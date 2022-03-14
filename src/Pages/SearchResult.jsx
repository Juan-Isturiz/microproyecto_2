import React from 'react'
import MovieBox from '../Components/MovieBox/MovieBox'

export default function SearchResult() {
    

  return (
    <div>SearchResult
        <Search />
        <MovieBox title="Search results..." home={false} url = {url} />
    </div> 
  )
}
