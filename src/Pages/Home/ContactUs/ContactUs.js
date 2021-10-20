import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <div>
            <Container> <hr />
            <h1 className="text-success"><span className='text-decoration-underline '>Contact</span>  Us</h1> <hr />
                <Row>
                    <Col>
                    <img className="w-75 rounded-1" src='https://i.ibb.co/NsX040S/Screenshot-2021-10-19-at-15-41-53.png' alt="" />
                    <h2 className='text-info fw-bold'>Ibn Sina Hospital Sylhet Limited</h2> <hr />
                        <p>Subhanighat Point  Sylhet, Bangladesh.</p>
                        <p>Phone:+880 821 727933-42 <br /> 
                        +880 1713301523 <br />
                            +880 1972832741</p>
                            <p>E-mail: info@ibnsinahospitalsylhet.com</p>
                    </Col>
                    <Col>
                            <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Ibn Sina Hospital Limited, Sylhet Branch</Accordion.Header>
                            <Accordion.Body>
                            Ibn Sina Hospital Sylhet Limited <br />
                            Subhanighat Point,  <br />
                            Sylhet, Bangladesh <br />
                            Hot Line: +880 9636-300300 <br />
                            PABX: 821 727933-42 <br />
                            Mobile: +880 1711405834 <br />
                            Email: info@ibnsinahospitalsylhet.com 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Ibn Sina Hospital Limited, Rikabi Bazar Branch </Accordion.Header>
                            <Accordion.Body>
                            Ibn Sina Hospital Limited, Rikabi Bazar <br />
                            Rikabi Bazar Point, <br />
                            Sylhet, Bangladesh <br />
                            Hot Line: +880 9636-300300 <br />
                            PABX: 821 727933-42 <br />
                            Mobile: +880 1711405834 <br />
                            Email: info@ibnsinahospitalsylhet.com
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Ibn Sina Diagnostic & Imaging Center, Dhanmondi</Accordion.Header>
                            <Accordion.Body>
                            Ibn Sina Diagnostic & Imaging Center, Dhanmondi <br />
                        House 48, Road 9/A, Dhanmondi, Dhaka-1209. <br />
                        Phone No. of Serial/ Information & Customer Service: +88 02 48115270-2, +88 02 48114040-1, +88 02 9101950-2, +88 02 9102024-5, +88 02 88111231, +88 02 88111234, +88 02 88111247, +88 02 88111152, +88 02 88111884, +88 09610010615
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Ibn Sina Medical College Hospital, Kallyanpur</Accordion.Header>
                            <Accordion.Body>
                            Ibn Sina Medical College Hospital, Kallyanpur <br />
                            Address:  1/1, Mirpur Road, Kallyanpur, Dhaka-1216. <br />
                            Phone No. of Serial/ Information & Customer Service: 02-8035905, 02-8091332; Doctor Serial /Information Mobile No. 01311-799593, 01844-141173, 01703-725590

                            ismchoffice@gmail.com
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Ibn Sina Diagnostic & Consultation Center, Uttara</Accordion.Header>
                            <Accordion.Body>
                            Ibn Sina Diagnostic & Consultation Center, Uttara <br />
                            House#52, Garib-E-Newaz Avenue, Sector#13, Uttara, Dhaka-1230. <br /> Hot Line: 09610009612. br
                             Email: istuttara@gmail.com
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
};

export default ContactUs;