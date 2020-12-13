import React from 'react';
import { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap';

class Tarjeta extends Component {
    render(props){
        const styles={
            height:'50px'
        }
        return(
            <CardDeck>
                <Card >
                    <Card.Img variant="top" className="w-10 card-img-top" src={this.props.URL} />
                    <Card.Body>
                        <Card.Title>{this.props.nombre}</Card.Title>
                        <Card.Text>
                            {this.props.descripcion}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        );

    }
}

export default Tarjeta;