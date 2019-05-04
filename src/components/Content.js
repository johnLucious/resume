import React from 'react';
import logo from '../me.jpg';
import '../App.css';
import '../color.css';
import { Row, Col, Image, Container } from 'react-bootstrap';

class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: "Test",
            content: ""
        }
    }

    render() {
        return (
            <div className="content-background">
                <Container style={{padding: 50}}>
                    <Row>
                        <Col>
                            <Image style={{width: 250, height: 'auto'}} src={logo} roundedCircle />
                        </Col>
                    </Row>
                    <Row style={{margin: 50}}>
                        <Col>
                            <div className="banner-text">
                                <h1 className="color-white">Jansen</h1>
                                <hr/>
                                <p className="color-white">HTML | CSS | JavaScript | Bootstrap | Express | ReactJS | NodeJS</p>
                                <div className="social-links">
                                    <Container>
                                        <Row>
                                            <Col>
                                                <a href="https://linkedin.com/in/jansen528" target="_blank">
                                                    <i className="fab fa-linkedin color-white" aria-hidden="true" />
                                                </a>
                                            </Col>
                                            <Col>
                                                <a href="https://github.com/johnLucious" target="_blank">
                                                    <i className="fab fa-github color-white" aria-hidden="true" />
                                                </a>
                                            </Col>
                                            <Col>
                                                <a href="https://gitlab.com/johnLucious" target="_blank">
                                                    <i className="fab fa-gitlab color-white" aria-hidden="true" />
                                                </a>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Content;