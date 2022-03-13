import React from 'react'
import styles from './Login.module.css'
import fire from "../../utils/fire"
import firebase from 'firebase';

export default function Login(props) {

    const {email, setEmail, password, setPassword, LogInUse, RegisterInUse, hasAccount, setHasAccount, emailError, passwordError} = props;
  
    const SignInWithFirebase = () =>{
        var google_provider = new firebase.auth.GoogleAuthProvider();
        fire.auth().signInWithPopup(google_provider)
        .then((re) =>{

        })
        .catch((err) =>{
            console.log(err)
        })
    } 


    return (
        <section className = {styles.login}>
            <div className={styles.loginContainer}>
                <label>Introduce your mail</label>
                <input 
                type='text'
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <p className={styles.errorMsg}>{emailError}</p>
                <label>Introduce your Password</label>
                <input
                type='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <p className={styles.errorMsg}>{passwordError}</p>
                <div className={styles.btnContainer}>
                    {hasAccount ? (
                    <>
                        <button onClick={LogInUse}>Sign in</button>
                        <p>Don't have an account? 
                            <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                        </p>
                        <div className={styles.googlesign}>
                            <button onClick={SignInWithFirebase}>Sign In with Google</button>
                        </div>
                    </>
                ) : (
                    <>
                        <button onClick={RegisterInUse}>Sign up</button>
                        <p>Have an account?
                            <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                        </p>
                    </>
                )}
                </div>
            </div>
    </section>

    )
}


