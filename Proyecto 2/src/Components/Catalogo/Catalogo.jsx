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

        const items = this.state.listaTarjeta.map((item,keyV)=> {
            return(
                <div className="col-md-4">
                    <div className="card rounded">
                        <Tarjeta key={keyV} nombre={item.Nombre} TipoC={item.Tipo} URL={item.URL} descripcion={item.Descripcion} />
                    </div>
                </div>
            )
        })
        return (
            <div style={divStyle}>
                <div className="container">
                    <div className=" row mt-5">
                        {items}
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;