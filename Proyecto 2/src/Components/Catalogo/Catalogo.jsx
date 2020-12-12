import { Component } from 'react';
import Tarjeta from '../Cards/Tarjeta';

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
        const divStyle = {
            marginTop: '56px',
        };

        return (
            <div style={divStyle}>
                {this.state.listaTarjeta.map((item,keyV)=> 
                {
                    return(
                        <Tarjeta key={keyV} Titulo={item.nombre} TipoC={item.Tipo} URL={item.URL} />
                        )
                })}

            </div>
        );
    }

}

export default Home;