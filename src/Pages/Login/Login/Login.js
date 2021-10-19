import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {
    const {singinGoogle} = useAuth();
    const location = useLocation();
    
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    
    const loginGoogle = ()=>{
        singinGoogle()
        .then(result => {
            history.push(redirect_uri);
        });
    }

    return (
        <div className=' bg-info bg-opacity-10'>
        <Container>
        <Row>
          <Col>
          <h2 className='mt-5'>Please Login</h2>
            <form className="mx-auto">
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
            <button onClick={loginGoogle} className="btn btn-primary">Google Login</button>         
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
        </div>
    );
};

export default Login;



