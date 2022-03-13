import MovieBoxItem from "../MovieBoxItem/MovieBoxItem";
import styles from "./MovieBoxList.module.css"
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const MovieBoxList = (props) => {
    const { movieId, setMovieId } = useContext(AppContext)
    const { MovieList, number } = props
    console.log(props)
    const onClickHandler = (id) => {
        setMovieId(id)
        console.log(id)
    }
    return (
        <div className={styles.MovieBox} >
            {MovieList.slice(0, number).map(movie => (
                <MovieBoxItem
                    key={Math.random()}
                    id={movie.id}
                    poster={movie.poster_path != null ? "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + `${movie.poster_path}` : ''}
                    title={movie.title}
                    onMovie={onClickHandler}
                />))}

        </div>
    )
}

export default MovieBoxList