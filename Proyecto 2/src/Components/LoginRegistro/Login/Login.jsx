import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';


export default(props) => {
    const srcImg = require('./icon_login.svg');

    const [email, setEmail] = useState('');
    const [contra, setPassword] = useState('');
    const firebase = useFirebaseApp();
    const user = useUser();

    const createUser = async ()=>{
        await firebase.auth().createUserWithEmailAndPassword(email, contra);
    }

    const loginUser = async ()=>{
        console.log(email);
        await firebase.auth().signInWithEmailAndPassword(email, contra);
    }

    const closeSession = async ()=>{
        await firebase.auth().signOut();
    }

    return(<div> { user &&
            <Form className="login">
                <h2>Ingrese al sistema</h2>

                <div class="login-icon">
                    <img src={srcImg}></img>
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Correo Electronico</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="ejemplo@dominio.com"></input>
                </div>
                    
                <div class="form-group">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Ingrese contraseña"></input>
                </div>
                <hr></hr>

                <Button variant="primary" onClick={loginUser}>
                    Iniciar Sesion
                </Button>
            </Form>
            }
            {
                user &&
                <div>
                    <Button variant="primary" onClick={closeSession}>
                        Cerrar Session
                    </Button>
                </div>
            }
        </div>
        );
}
