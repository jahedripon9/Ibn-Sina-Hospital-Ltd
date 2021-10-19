import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';

const DentalCare = () => {
    return (
        <div>
            <Container fluid="md">
            <Row>
                <h2 className='mt-5'>Dental Care</h2> <hr />
                <Col>
                    <img className="w-100 my-3" src="https://i.ibb.co/pZXR0gT/dental-care.jpg" alt="" />
                </Col>
                <Col>
                <p className=" mt-5 text-start">Ibn Sina Dental Center is one of the most modern dental centers in Sylhet. Ibn Sina Dental center ensures experienced Dental Surgeon, modern and disinfected equipment, trained dentist for Children. All possible investigation including OPG and dental x-ray are performing at same center. We are open from 9 am to 9 pm (Except Friday) to solve the all possible dental problems.</p>
                </Col>
            </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default DentalCare;