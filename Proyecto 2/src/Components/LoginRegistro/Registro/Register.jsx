import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';

export default(props) => {
    
    const [email, setEmail] = useState('');
    const [contra, setPassword] = useState('');
    const firebase = useFirebaseApp();
    const user = useUser();

    const createUser = async ()=>{
        await firebase.auth().createUserWithEmailAndPassword(email, contra);
    }

    return (<div> {  user &&
            <Form className="register">
                <h2>Registrarse</h2>

                <div class="form-group">
                    <label for="exampleInputEmail1">Correo Electronico</label>
                    <input type="email" class="form-control" id="CorreoInput" aria-describedby="emailHelp"  placeholder="ejemplo@dominio.com"></input>
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input type="password" class="form-control" id="Password1Input" placeholder="Ingrese contraseña"></input>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Repita Contraseña</label>
                    <input type="password" class="form-control" id="Password2Input" placeholder="Repita contraseña"></input>
                </div>

                <Button variant="primary" onClick={createUser}>
                    Crear Usuario
                </Button>
            </Form>
            }
        </div>
    );
}