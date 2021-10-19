import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';

const HealthCheckup = () => {
    return (
        <div>
            <Container fluid="md">
            <Row>
                <h2 className='mt-5'>Health Checkup</h2> <hr />
                <Col>
                    <img className="w-100 my-3" src="https://i.ibb.co/5xSVB5S/health-checkup.jpg" alt="" />
                </Col>
                <Col>
                <p className=" mt-5 text-start">
                Ibn Sina Hospital Sylhet Ltd offers a comprehensive range of healthcare services. Some of these are listed below. Please contact the hospital if the service you require is not listed.

                Ibn Sina Hospital Sylhet Ltd Incorporating a team of highly experienced and qualified doctors, world class diagnostic equipment, research laboratories, 24 hour pharmacy, on site catering and a range of accommodation, Ibn Sina Hospital Sylhet Ltd has set a new standard of healthcare in Sylhet.</p>
                </Col>
            </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default HealthCheckup;