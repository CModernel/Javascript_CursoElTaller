import React, { Component } from 'react';
import { Button, Col, Form } from 'react-bootstrap';


class Contacto extends Component {
    render(props){
        const divStyle = {
            marginTop: '56px',
        };
    
        return(
            <div style={divStyle}>
                <h1>
                    Contacto
                </h1>
                <p>Si desea contactarnos, por favor llene el formulario debajo:</p>
                <Form>

                    <Form.Group as={Col}>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control placeholder="John" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control placeholder="Doe" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Consulta</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Ingrese la consulta que desea hacer" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Contacto;