import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                    <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                className="d-inline w-75"
                                src="https://i.ibb.co/7KFvVjW/ibnslide01.jpg"
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-inline w-75"
                                src="https://i.ibb.co/9bWqpH9/ibnslide02.jpg"
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-inline w-75"
                                src="https://i.ibb.co/k2bLLq5/ibnslide03.jpg"
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-inline w-75"
                                src="https://i.ibb.co/8bkk5s7/ibnslide06.jpg"
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-inline w-75"
                                src="https://i.ibb.co/6H9vMvn/ibnslide07.jpg"
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-inline w-75"
                                src="https://i.ibb.co/7vrvr86/ibnslide08.jpg"
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;

