import React from 'react';
import faceRecognition from '../face-recognition.jpg';
import visualStudio from '../visual-studio.png';
import { Button, Card,Row, Col, Image, Container } from 'react-bootstrap'
import '../App.css';

class Projects extends React.Component {
    render() {
        return (
            <div className="project-card">
                <Container>
                    <Row>
                        <Col>
                            <Card style={{height: '500px'}}>
                                <Card.Img variant="top" src={visualStudio} style={{height: '250px'}}/>
                                <Card.Body>
                                    <Card.Title>Business Transaction Apps</Card.Title>
                                    <Card.Text>
                                        An application that records every transactions in a business. The transaction is consist of stock entry, expenditure, transaction between customers, and also suppliers.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{height: '500px'}}>
                                <Card.Img variant="top" src={faceRecognition} style={{height: '250px'}}/>
                                <Card.Body>
                                    <Card.Title>Image Processing and Face Recognition</Card.Title>
                                    <Card.Text>
                                        A project assigned in Interpreted and Image Processing course at Bandung Institute of Technology. This course consist of image processing (equalization, specification, contrast stretching), character recognition and face recognition using skin map detection and sobel operator.
                                    </Card.Text>
                                    <Button variant="primary" href="https://cupercupu.github.io/pengolahan-citra-course/">View Project</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Projects;