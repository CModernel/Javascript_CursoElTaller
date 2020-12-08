import { Component } from 'react';
import Tarjeta from '../Tarjeta';

class Home extends Component{

    // El constructor siempre va primero
    constructor(props){
        super(props);
        this.state ={
            listaTarjeta:[]
        }
    }

    // Accionar todo antes que se muestre el componente con render
    componentDidMount(){
        fetch('https://restapitalleragustin.firebaseio.com/ProductoSuper/-MN3YD38_EiC_pgC1pmN.json').
        then(response => response.json()).
        then(respSuc => this.setState(
            {listaTarjeta:respSuc}
        ));
    }

    render(){


        return (
            <div>
                {this.state.listaTarjeta.map((item,keyV)=> 
                {
                    return(<Tarjeta Titulo={item.nombre} TipoC={item.Tipo} URL={item.URL} />)
                })}

            </div>
        );
    }

}

export default Home;