import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className='my-5'>
            <Container className="border-end "> 
            <h1 className='text-danger'> <span className='text-decoration-underline'>About</span>  Us</h1> <hr />
                <Row>
                    <Col className="border-end "> 
                            <p className='text-start'>The Ibn Sina Hospital Sylhet Ltd. (A Concern of The Ibn Sina Trust) was established in 10th April 2009, Keeping in Pace with continuous development of medical technologies, Ibn Sina hospital has been rendering its services in the field of Medicine (Internal, Neuro, Nephro, Gastro-liver, Cardiac, Onco, Endocrine etc.), Surgery, Gynae, Neuro surgery, Spine Surgery, colorectal Surgery, Orthopedics Surgery, urology etc. It provides tertiary level of medical care in those fields. Besides it has opened a new horizon in Laparoscopic Abdominal and colorectal Surgery. With affordable cost it gives services to the ever increasing number of kidney patients through its dialysis unit equipped with most modern equipment and backed by a dedicated medical team.

                            IBN SINA Hospital is proud of its ICU unit for rendering round the clock intensive care services with the help of most modern and sophisticated equipments supported by a very dedicated, skilled, and efficient team of doctors, nurses and other staffs. Ibn Sina Hospital has 4 well equipped operation theater where C-Arm, Operating Microscope available to make operation more effective</p>
                    </Col>
                    <Col> <br /><br />
                    <img className="" src='https://i.ibb.co/12kY1hy/logo.jpg' alt="" />
                    <h2 className='text-info fw-bold'>Ibn Sina Hospital Sylhet Limited</h2> <hr />
                        <p>Subhanighat PointSylhet, Bangladesh.</p>
                        <p>Phone:+880 821 727933-42 <br /> 
                        +880 1713301523 <br />
                            +880 1972832741</p>
                            <p>E-mail: info@ibnsinahospitalsylhet.com</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;