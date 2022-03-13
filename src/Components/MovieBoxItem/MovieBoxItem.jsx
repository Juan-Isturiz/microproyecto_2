import styles from "./MovieBoxItem.module.css"
import { AppContext } from '../Context/AppContext'
import { Link } from "react-router-dom"
import { createRef,useEffect, useContext, useState } from "react"
const MovieBoxItem = (props) => {
    const { id, poster, title } = props

    const view = ()=>{
        props.onMovie(id)   
    }
    return (
        <div className={styles.BoxChild} key={id}>
            {props.poster != null ? <img src={poster} className={styles.PosterBoxChild} /> : ''}
            <Link to="/MovieView"  className={styles.BoxChildText} onClick={view}>{props.title}</Link>
            {console.log(id)}
        </div>
    )
}
export default MovieBoxItem