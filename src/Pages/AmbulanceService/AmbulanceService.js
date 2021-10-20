
import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';

const AmbulanceService = () => {
    return (
        <div>
            <Container fluid>
            <Row>
                <Col>
                <h1 className="mt-5 mb-4"> Call For <span className='text-decoration-underline '>Ambulance</span> </h1>
                <CardGroup className="mx-auto">
                    <Card>
                        <Card.Img className="w-100" variant="top" src="https://i.ibb.co/mSdVzbm/callforambulance.png" />
                        <Card.Body>
                        <Card.Title>Ibn Sina Hospital Ambulance Service</Card.Title>
                        <Card.Text>
                        Emergency Ambulance Call Service:
                        +880 1925616778
                        </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    <Card>
                        <Card.Img className="w-100" variant="top" src="https://i.ibb.co/mSdVzbm/callforambulance.png" />
                        <Card.Body>
                        <Card.Title>Sylhet Ambulance Service</Card.Title>
                        <Card.Text>
                            Emergency Ambulance Call Service:
                        01721-520585{' '}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img className="w-100" variant="top" src="https://i.ibb.co/mSdVzbm/callforambulance.png" />
                        <Card.Body>
                        <Card.Title>Ambulance Services Sylhet</Card.Title>
                        <Card.Text>
                        Emergency Ambulance Call Service:
                        01715-778689
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardGroup>
                </Col>
            </Row>
            </Container>
            
        </div>
    );
};

export default AmbulanceService;
