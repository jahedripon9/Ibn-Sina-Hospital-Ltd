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
                    <img className="w-50 my-3 rounded shadow" src="https://i.ibb.co/5xSVB5S/health-checkup.jpg" alt="" />
                <h4 className='mt-4'>Health Checkup</h4> <hr />
                <p className=" mt-3 mx-auto px-2 text-break text-center">
                Ibn Sina Hospital Sylhet Ltd offers a comprehensive range of healthcare services. Some of these are listed below. Please contact the hospital if the service you require is not listed.

                Ibn Sina Hospital Sylhet Ltd Incorporating a team of highly experienced and qualified doctors, world class diagnostic equipment, research laboratories, 24 hour pharmacy, on site catering and a range of accommodation, Ibn Sina Hospital Sylhet Ltd has set a new standard of healthcare in Sylhet.</p> <br />
                <footer className="blockquote-footer fs-6 "><cite title="Source Title">Ibn Sina Hospital Sylhet Limited</cite></footer>
                <br /><br /><br /><br />
                </Col>
            </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default HealthCheckup;