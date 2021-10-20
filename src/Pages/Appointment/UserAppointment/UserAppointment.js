import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, signOut,onAuthStateChanged } from "firebase/auth";
import useAuth from '../../../hooks/useAuth';
import initializeAuth from '../../Login/Firebase/firebase.init';
import Footer from '../../Shared/Footer/Footer';
import { useHistory, useLocation } from 'react-router';

initializeAuth()
const UserAppointment = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);
    const {singinGoogle,  } = useAuth();
    const auth = getAuth();



    const location = useLocation();
    
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    



    const emailandPasswordLogin = ()=>{
        isLogin()
        .then(result => {
            history.push(redirect_uri);
        });
    }

    
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
      }
    
      const handleNameChange = e => {
        setName(e.target.value);
      }
      const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }
    
      const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
          setError('Password Must be at least 6 characters long.')
          return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError('Password Must contain 2 upper case');
          return;
        }
    
        if (isLogin) {
          processLogin(email, password);
        }
        else {
          registerNewUser(email, password);
        }
    
      }
    
      const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
          })
          .catch(error => {
            setError(error.message);
          })
      }
    
      const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            verifyEmail();
            setUserName();
          })
          .catch(error => {
            setError(error.message);
          })
      }
    
      const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
      }
    
      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
          .then(result => {
            console.log(result);
          })
      }
    
      const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
          .then(result => { })
      }
    return (
        <div className="mx-5">
      <form onSubmit={handleRegistration}>
        <h3 className="text-primary mt-5">Please {isLogin ? 'Login' : 'Register'}</h3> <hr />
        {!isLogin && <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" required />
          </div>
        </div>}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input onChange={toggleLogin} className="form-check-input " type="checkbox" id="gridCheck1" />
              <label className="form-check-label" htmlFor="gridCheck1">
              Already Registered?
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger ">{error}</div>
        <button type="submit" className="btn btn-primary ">
          {emailandPasswordLogin ? 'Submit' : 'Register'}
        </button> <br /> <br />
        <button type="button" onClick={handleResetPassword} className="btn btn-primary">Reset Password</button>

      </form>
      <br />
      <button className="btn btn-outline-primary" onClick={singinGoogle}>Google Sign In</button> <br /><br />
    </div>
    );
};

export default UserAppointment;