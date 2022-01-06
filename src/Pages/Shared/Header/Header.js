import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../Header/logo.jpg'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        
    <>
        <Navbar collapseOnSelect expand="lg" className="bg-info bg-gradient bg-opacity-50 "  >
        <Container> <Link to ='/home'>
        <Navbar.Brand  >
            <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand></Link> <Link to='/home'>
            <Navbar.Brand className="fs-3 fw-bold text-sm-start "> Ibn Sina Hospital Limited</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="fs-6" fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Link to='/home'> <Nav.Link >Home</Nav.Link> </Link> 
            </Nav.Item>
            <Nav.Item>
                <Link to='/about'> <Nav.Link  eventKey="link-1">About</Nav.Link> </Link>
            </Nav.Item>
            <Nav.Item>
                <Link to='/services'> <Nav.Link  eventKey="link-2">Services</Nav.Link></Link>
            </Nav.Item>
            <Nav.Item>
                <Link to='/allconsultant'> <Nav.Link  eventKey="link-3">Consultants</Nav.Link></Link>
            </Nav.Item>
            </Nav>  
            <Link to="/appointment" className='me-2'><button className="btn btn-info">Appointment</button></Link> 
            {user?.email ?
                <button onClick={logOut} className='btn btn-success'>log Out</button> :
                <Link to="/login" className='me-2'><button className="btn btn-info">Login</button></Link>}
            <Navbar.Text>
        Signed: <Link to="/login">{user?.displayName}</Link>
      </Navbar.Text>
      </Navbar.Collapse>
    </Container>
    
</Navbar>

    </>
        
    );
};

export default Header;