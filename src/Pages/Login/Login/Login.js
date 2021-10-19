import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {
    const {singinGoogle} = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <form className="mx-5 ">
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control mx-auto w-50" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3 ">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control mx-auto w-50" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button> 
            </form>
            <br />
            <Link to='/register'><button type="submit" className="btn btn-primary">Create new Account</button></Link>
             <br /> <br /> 
            <button onClick={singinGoogle} className="btn btn-primary">Google Login</button>
            <Footer></Footer>
        </div>
    );
};

export default Login;