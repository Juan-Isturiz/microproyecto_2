import React from 'react'
import styles from './LoggedNavBar.module.css'

function LoggedNavBar({handleLogout}) {
  return (
    <section className={styles.LoggedNavBarDiv}>
            <a href="/"><h2>McMovies</h2></a>
            <div className={styles.LoggedDiv}>
                <button onClick={handleLogout}> Logout </button>
            </div>
    </section>
    )
}

export default LoggedNavBar;
