import React, { Component } from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render(props){
        return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/Inicio">Inicio</Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link to="/Catalogo">Catalogo</Link>
                    </Nav.Link>
                    <Nav.Link>
                    <Link to="/Contacto">Contacto</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;