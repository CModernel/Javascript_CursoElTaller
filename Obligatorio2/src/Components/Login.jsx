import React, { Component } from 'react';

class Login extends Component {


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

    render(){
        return (<div>
            <form action="">
                <input type="text" placeholder="Ingrese el nombre" onChange={this.handleNombre}/>
                <input type="text" placeholder="Ingrese su contraseña" onChange={this.handleContra}/>
                <input type="submit"/>
            </form>
            <p>El nombre es: {this.state.nombreUser}</p>
            <p>La contraseña es: {this.state.contraUser}</p>

        </div>);
    }
}

export default Login;