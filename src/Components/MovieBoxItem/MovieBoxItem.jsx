import styles from "./MovieBoxItem.module.css"
import { AppContext } from '../Context/AppContext'
import { Link } from "react-router-dom"
import { createRef,useEffect, useContext, useState } from "react"
const MovieBoxItem = (props) => {
    const refe = createRef()
    console.log(refe.current)
    const { id, poster, title } = props
    const { movieId, setMovieId } = useContext(AppContext)
    let viewer

    const view = ()=>{
        document.getElementById(title)
        
    }
    return (
        <div className={styles.BoxChild} key={id}>
            {console.log(id)}
            {props.poster != null ? <img src={poster} className={styles.PosterBoxChild} /> : ''}
            <a  className={styles.BoxChildText} onClick={() => view()}>{props.title}</a>
        </div>
    )
}
export default MovieBoxItem