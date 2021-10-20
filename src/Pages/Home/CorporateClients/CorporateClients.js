import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CorporateClients = () => {
    return (
        <div>
            <Container fluid="md">
            <Row>
                <Col><hr />
                <h2><span className='text-decoration-underline'>Corporate </span> Clients</h2> 
                <CardGroup>
                        <Card>
                            <Card.Img className='w-75 mx-auto' variant="top" src="https://i.ibb.co/Sv6JYJ9/adsl.jpg" />
                        </Card>
                        <Card>
                            <Card.Img className='w-75' variant="top" src="https://i.ibb.co/6DJLnSg/airtel.jpg" />
                        </Card>
                        <Card>
                            <Card.Img className='w-75' variant="top" src="https://i.ibb.co/LdjNMHS/alico.jpg" />
                        </Card>
                        <Card>
                            <Card.Img className='w-75' variant="top" src="https://i.ibb.co/LrB5g44/amingroup.jpg" />
                        </Card>
                        <Card>
                            <Card.Img className='w-75' variant="top" src="https://i.ibb.co/fq9ydNr/atn.jpg" />
                        </Card>
                        <Card>
                            <Card.Img className='w-75' variant="top" src="https://i.ibb.co/TDX77VJ/basundhara.jpg" />
                        </Card>
                        <Card>
                            <Card.Img className='w-75' variant="top" src="https://i.ibb.co/zswNNrw/bdcom.jpg" />
                        </Card>
                        <Card>
                            <Card.Img className='w-75' variant="top" src="https://i.ibb.co/Dw80tR2/bio.jpg" />
                        </Card>
                        <Card>
                            <Card.Img className='w-75' variant="top" src="https://i.ibb.co/tXxVt5B/delta.jpg" />
                        </Card>
                        </CardGroup>
                </Col>
                <Link to='/ambulanceservice'><button className="btn btn-primary">Call For Ambulance</button></Link>
            </Row>
            </Container>
        </div>
    );
};

export default CorporateClients;