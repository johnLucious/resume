import React from 'react';
import logo from '../me.jpg';
import { Row, Col, Image, Container } from 'react-bootstrap';
import MaterialIcon from 'material-icons-react';

class About extends React.Component {
    render() {
        return (
            <div className="contact-body">
                <Container className="contact-container">  
                    <Row>
                        <Col>
                            <h1>Jansen</h1>
                            <Image style={{width: 250, height: 'auto'}} src={logo} rounded />
                            <div style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                                <h5>Undergraduate Informatics Student</h5>
                                <p>Jansen excels in Software Engineers and Graphic Design. Experienced working in a project. A third-year Informatics students at Bandung Institute of Technology.</p>
                            </div>
                        </Col>
                        <Col>
                            <h1>About Me</h1>
                            <hr/>
                            <div className="about-info">
                                <Container>
                                    <Row className="justify-content-md-center" style={{paddingBottom: '20px'}}>
                                        <Col xs={1} className="material-design"><MaterialIcon icon="account_circle" size="large"/></Col>
                                        <Col xs={6} className="material-props">Jansen</Col>
                                    </Row>
                                    <Row className="justify-content-md-center" style={{paddingBottom: '20px'}}>
                                        <Col xs={1} className="material-design"><MaterialIcon icon="school" size="large"/></Col>
                                        <Col xs={6} className="material-props">Bandung Institute of Technology</Col>
                                    </Row>
                                    <Row className="justify-content-md-center" style={{paddingBottom: '20px'}}>
                                        <Col xs={1} className="material-design"><MaterialIcon icon="email" size="large"/></Col>
                                        <Col xs={6} className="material-props">jansen_wu648@yahoo.com</Col>
                                    </Row>
                                    <Row className="justify-content-md-center">
                                        <Col xs={1} className="material-design"><MaterialIcon icon="home" size="large"/></Col>
                                        <Col xs={6} className="material-props">Jalan Suryani 33, Bandung</Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;