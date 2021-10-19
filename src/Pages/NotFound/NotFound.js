import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="py-5">
           
            <h1 className="text-danger display-1 fst-italic fw-bolder   oops">Oops!</h1>
            <h3 className="text-danger display-1">404</h3>
            <h3 className="text-danger pb-5">Page Not Found</h3>
            <p className="fw-bold pb-5 fs-4">The page you are looking for might have been removed <br /> had its name changed or is temporarily unavailable.</p>
            <Link className='ps-4 text-decoration-none text-black fs-5 fw-bold p-3 bg-primary rounded-pill text-white' to='/home'> Go to Homepage</Link>
        </div>
    );
};

export default NotFound;