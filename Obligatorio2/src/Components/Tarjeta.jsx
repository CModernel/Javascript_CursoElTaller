import React from 'react';
import { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap';

class Tarjeta extends Component {
    render(props){
        return(
            <CardDeck>
                <Card>
                    <Card.Img variant="top" class="card-img-top" src={this.props.URL} />
                    <Card.Body>
                        <Card.Title>{this.props.Titulo}</Card.Title>
                        <Card.Text>
                            {this.props.TipoC}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        );

    }
}

export default Tarjeta;