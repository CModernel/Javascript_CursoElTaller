import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFirebaseApp, useUser } from 'reactfire';

class Login extends Component {
    
/*
    constructor(props)
    {
        super(props);
        this.state = {
            nombreUser:'',
            contraUser:''
        }

        this.handleNombre = this.handleNombre.bind(this);
        this.handleContra = this.handleContra.bind(this);
    }

    // Metodo para asignar lo que se ingresa dentro de el campo nombre
    // a la variable state nombreUser
    handleNombre(event){
        this.setState({
            nombreUser:event.target.value
        });
    }

    // Metodo para asignar lo que se ingresa dentro de el campo contraseña
    // a la variable state contraUser
    handleContra(event){
        this.setState({
            contraUser:event.target.value
        });
    }
*/
    render(){
        return(
            <Form className="mt-4 mx-auto">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            );
    }

    /*render(){
        return (
        <div>
            <form action="">
                <input type="text" placeholder="Ingrese el nombre" onChange={this.handleNombre}/>
                <input type="text" placeholder="Ingrese su contraseña" onChange={this.handleContra}/>
                <input type="submit"/>
            </form>
            <p>El nombre es: {this.state.nombreUser}</p>
            <p>La contraseña es: {this.state.contraUser}</p>

        </div>
        );
    }*/
}

export default Login;