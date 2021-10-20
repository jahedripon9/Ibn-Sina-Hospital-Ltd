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
                    <img className="w-50 my-3 rounded shadow" src="https://i.ibb.co/pZXR0gT/dental-care.jpg" alt="" />
                    <h4 className='mt-4'>Dental Care</h4> <hr />

                <p className=" mt-3 mx-auto px-2 text-break text-center">Ibn Sina Dental Center is one of the most modern dental centers in Sylhet. Ibn Sina Dental center ensures experienced Dental Surgeon, modern and disinfected equipment, trained dentist for Children. All possible investigation including OPG and dental x-ray are performing at same center. We are open from 9 am to 9 pm (Except Friday) to solve the all possible dental problems.</p> 
                <br />
                <footer className="blockquote-footer fs-6 "><cite title="Source Title">Ibn Sina Hospital Sylhet Limited</cite></footer>
                <br /><br /><br /><br />
                </Col>
            </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default DentalCare;