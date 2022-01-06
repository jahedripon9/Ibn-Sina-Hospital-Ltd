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
        <Container>
        <Navbar.Brand  as={Link} to='/home'>
            <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
            <Navbar.Brand className="fs-3 fw-bold text-sm-start " as={Link} to='/home'>Ibn Sina Hospital Limited</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="fs-6" fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to='/about' eventKey="link-1">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/#services' eventKey="link-2">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  as={Link} to='/allconsultant' eventKey="link-3">Consultants</Nav.Link>
            </Nav.Item>
            </Nav>  
            <Link to="/appointment" className='me-2'><button className="btn btn-info">Appointment</button></Link> 
            {user?.email ?
                <button onClick={logOut} className='btn btn-success'>log Out</button> :
                <Link to="/login" className='me-2'><button className="btn btn-info">Login</button></Link>}
            <Navbar.Text>
        Signed: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
      </Navbar.Collapse>
    </Container>
    
</Navbar>

    </>
        
    );
};

export default Header;