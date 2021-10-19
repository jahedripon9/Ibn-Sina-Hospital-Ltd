import React from 'react';

import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';

const UserAppointment = () => {
    const {singinGoogle, handleNameChange, handleEmailChange, handlePasswordChange, handleRegistration, processLogin, registerNewUser, setUserName, verifyEmail, handleResetPassword, toggleLogin, isLogin, error} = useAuth();
    return (
        <div className="mx-5">
            <form onSubmit={handleRegistration}>
                <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
                {!isLogin && <div className="row mb-3">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
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
                    
                </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-primary">
                {isLogin ? 'Login' : 'Register'}
                </button>
                <button type="button" onClick={handleResetPassword} className="btn btn-info ms-2">Reset Password</button>

            </form>
            <br /><br /><br />
            
            
            <button className="btn btn-info" onClick={singinGoogle}>Google Sign In</button>
            <Footer></Footer>
            </div>
    );
};

export default UserAppointment;