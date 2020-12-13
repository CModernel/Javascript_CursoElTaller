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
                <Form className="my-auto mx-auto">

                    <Form.Group as={Col}>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control placeholder="Nombre" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control placeholder="Apellido" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese Email" />
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