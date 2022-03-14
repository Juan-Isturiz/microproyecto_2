import React, {useState, useEffect} from 'react'
import fire from '../utils/fire';
import Login from '../Components/LogIn/Login';
import Footer from '../Components/Footer/Footer'
import MovieBox from '../Components/MovieBox/MovieBox'
import NavBar from '../Components/NavBar/NavBar';
import LoggedNavBar from '../Components/LoggedNavBar/LoggedNavBar'


function LogPage() {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  
  const clearInput = () => {
    setEmail('');
    setPassword('');
  }
  
  const clearError = () => {
    setEmailError('');
    setPasswordError('');
  }
  
  const LogInUse = () => {
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }

    })
  }

  const RegisterInUse = () => {
    clearError();
    fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((err) => {
            switch(err.code){
                case "auth/email-already-exists":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
            }
        })
  }
  
  
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        clearInput();
        setUser(user);
      }else{
        setUser('');
      }
    })
  }
  useEffect(() => {
    authListener();
  }, []);
  
   const handleLogout = () => {
     fire.auth().signOut();
   }
  
  return (
    <div className="Log">
    {user ? (
      <div>
      <LoggedNavBar handleLogout={handleLogout}/>
      <MovieBox number = {8} />
      <Footer />
      </div>
      ) : (
        <div>
          <NavBar/>
          <Login 
          email = {email}
          setEmail = {setEmail}
          password = {password}
          setPassword = {setPassword}
          LogInUse = {LogInUse}
          RegisterInUse = {RegisterInUse}
          hasAccount = {hasAccount}
          setHasAccount = {setHasAccount}
          emailError = {emailError}
          passwordError ={ passwordError}
          />

        </div>
    )}
  </div>
  )
}

export default LogPage;