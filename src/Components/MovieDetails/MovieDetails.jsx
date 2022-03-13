import styles from "./MovieDetails.module.css"

const MovieDetails = (props) => {

    return (
        <div>
            <h3 className={styles.title}>General Details</h3>
            <ul className={styles.miscContainer}>
                {props.movieMisc.map(item=>(
                    <li className={styles.miscItem} key={Math.random()}>
                        <p className={styles.miscItem__title}>{item.title}: </p>
                        <p> {item.value}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default MovieDetails