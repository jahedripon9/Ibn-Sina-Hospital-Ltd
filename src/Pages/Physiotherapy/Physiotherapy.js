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
                    <img className="w-50 my-3 rounded shadow" src="https://i.ibb.co/HP9GrQQ/physio-th.jpg" alt="" />
                    <h4 className='mt-4'>Physiotherapy & Rehab</h4> < hr className='bg-primary'/>
                <p className=" mt-3 mx-auto px-2 text-break text-center">Physiotherapy is the health care profession primarily concerned with the remediation of impairments and disabilities and the promotion of mobility, functional ability, quality of life and movement potential through examination, evaluation, diagnosis and physical intervention. It is carried out by physiotherapists and physiotherapy assistants.</p> 
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

export default Physiotherapy;


