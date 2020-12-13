import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Login from './Login/Login';
import Login2 from '../Login2';
import Register from './Registro/Register';

class Portal extends Component {
    render(props){
        const divStyle = {
            marginTop: '56px',
        };

        return (
        <div style={divStyle}>
            <h1>
                Bienvenido
            </h1>
            <Container fluid="sm" className="d-sm-flex flex-sm-row flex-wrap justify-content-center">
                <Login />
                <Register />
                
            </Container>
        </div>
        );
    }
}

export default Portal;