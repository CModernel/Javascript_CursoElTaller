import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { useFirebaseApp, useUser } from 'reactfire';
import Login from './Login';
import Register from './Register';

class Portal extends Component {

    
    render(props){
        return (
        <div>
            <h1>
                hola mundo
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