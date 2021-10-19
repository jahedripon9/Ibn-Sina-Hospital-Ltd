import React from 'react';
import { Card, CardGroup,} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Services = () => {
    return (
        <div className="mx-5 my-5" id="services">
            <h1>Our Services</h1>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/HH9M9hL/findurconsultants.jpg" />
                    
                    <Card.Footer>
                    <Link to='/allconsultant'><button className="btn btn-primary" >Find Consiltant</button></Link>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/HP9GrQQ/physio-th.jpg" />
                    
                    <Card.Footer>
                    <button className="btn btn-primary">Physiotherapy & Rehab</button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/pZXR0gT/dental-care.jpg" />
                    
                    <Card.Footer>
                    <button className="btn btn-primary">Dental Care</button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/5xSVB5S/health-checkup.jpg" />
                    
                    <Card.Footer>
                    <button className="btn btn-primary">Health Checkup</button>
                    </Card.Footer>
                </Card>
                </CardGroup>
        </div>
    );
};

export default Services;