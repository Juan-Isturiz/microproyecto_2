import { useEffect } from "react"
const getMovie =(url)=>{
    fetch(url)
    .then((data)=>{
        const moviedata =data.genre
        console.log({})
    })
    .catch((error)=>{
        console.log({error})
    })
}
const MovieView =(props)=>{
    const api_key = "bb291031d3efe288820c538284501bf9"
    const movie_id =  634649//props.movie_id
    const gral_link = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}`
    useEffect(()=>{
        getMovie(gral_link)
    },[])
    return(
        <>
        </>
    )
}
export default MovieView