import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';


const Login = () => {
    const {singinGoogle,isLogin } = useAuth();
    const location = useLocation();
    
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/home'

    
    const loginGoogle = ()=>{
        singinGoogle()
        .then(result => {
            navigate.push(redirect_uri);
        });
    }


    const locationEmail = useLocation();
    
    const navigateEmail = useNavigate();
    const redirect_urid = locationEmail.state?.from || '/home'

    



    const emailandPasswordLogin = ()=>{
        isLogin()
        .then(result => {
            navigateEmail.push(redirect_urid);
        });
    }



    return (
        <div className=' bg-info bg-opacity-10'>
        <Container>
        <Row>
          <Col>
          <h2 className='mt-5'>Please <span className='text-decoration-underline'>Login</span></h2>  <hr />

            <form className="mx-auto">
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control mx-auto w-50" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3 ">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control mx-auto w-50" id="exampleInputPassword1"/>
            </div>
            <button onClick={emailandPasswordLogin} type="submit" className="btn btn-primary">Login</button> 
            </form>
            <br />
            <Link to='/register'><button type="submit" className="btn btn-primary">Create new Account</button></Link>
            <br /> <br /> 
            <button onClick={loginGoogle} className="btn btn-primary">Google Login</button>         
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
        </div>
    );
};

export default Login;



