import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../color.css';
class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand><Link to="/" className="color-white">Jansen</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/about" className="color-white">About</Link></Nav.Link>
                    <Nav.Link><Link to="/projects" className="color-white">Projects</Link></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavigationBar;