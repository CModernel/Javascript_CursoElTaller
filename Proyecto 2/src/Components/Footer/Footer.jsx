import React, { Component } from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Footer extends Component {
    render(props){
        return(
            <footer>
                <div class="dfPadre">
                    <div class="dfLoren">
                        <h3>Supermercado del Pueblo</h3>
                    </div>
                </div>
                <div class="dfCopy">
                    <p>Copyright © - 2020 sea. todo los derechos -  Desarrollo by Christian -</p>
                </div>
            </footer>
        );
    }
}

export default Footer;