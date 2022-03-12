import React from 'react'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <div className={styles.NavBarDiv}>
        <a href="/"><h1>McMovies</h1></a>  {/* TODO links to log in and register */}
        <div className={styles.SubtitlesNavBar}>
            <a href='/'><h2>Log in</h2></a>
            <a href='/'><h2>Register</h2></a>
        </div>

    </div>
  )
}
