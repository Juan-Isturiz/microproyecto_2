import React from 'react'
import styles from './Hero.module.css'

function Hero({handleLogout}) {
  return (
    <section className={styles.Hero}>
        <nav>
            <h2>McMovies</h2>
            <div className={styles.HeroDiv}>
                <button onClick={handleLogout}> Logout </button>
            </div>
        </nav> 
    </section>
    )
}

export default Hero;
