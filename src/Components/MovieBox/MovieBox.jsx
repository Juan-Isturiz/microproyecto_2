import React from 'react'
import styles from './MovieBox.module.css'

export default function MovieBox() {
  return (
    <div className={styles.MovieBoxDiv}>
      <h1 className={styles.HomeTitle}>McMovies</h1>
      <div className={styles.MovieBox}> {/* Here will go 8 movies, brought from the API */}
        <div className={styles.BoxChild}>1</div>
        <div className={styles.BoxChild}>2</div>
        <div className={styles.BoxChild}>3</div>
        <div className={styles.BoxChild}>4</div>
        <div className={styles.BoxChild}>5</div>
        <div className={styles.BoxChild}>6</div>
        <div className={styles.BoxChild}>7</div>
        <div className={styles.BoxChild}>8</div>
      </div>

      <div>
        <button id={styles.HomePageMore}>MORE</button>
      </div>
    </div>
  )
}
