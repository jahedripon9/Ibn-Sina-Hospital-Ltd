import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';

const Physiotherapy = () => {
    return (
        <div>
            <Container fluid="md">
            <Row>
                <h2 className='mt-5'>Physiotherapy & Rehab</h2> <hr />
                <Col>
                    <img className="w-100 my-3" src="https://i.ibb.co/HP9GrQQ/physio-th.jpg" alt="" />
                </Col>
                <Col>
                <h5 className=" mt-5 text-start">Physiotherapy is the health care profession primarily concerned with the remediation of impairments and disabilities and the promotion of mobility, functional ability, quality of life and movement potential through examination, evaluation, diagnosis and physical intervention. It is carried out by physiotherapists and physiotherapy assistants.</h5>
                </Col>
            </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Physiotherapy;