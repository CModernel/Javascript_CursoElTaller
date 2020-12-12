import React,{useState} from 'react';

import  'firebase/auth';
import {useFirebaseApp,useUser} from  'reactfire';


export default  (props) => {

    //Instanciar variable 
    const [email , setEmail] = useState('');
    const [contra , setPassword] = useState('');

    //Iniciamos la app  
    const firebase = useFirebaseApp();
    const user = useUser();
    

    //Este metodo es el que crea a el usuario 
    const createUser = async ()=>{

        await firebase.auth().createUserWithEmailAndPassword(email,contra);

    }
    //Este metodo es el que hace el login
    const loginUser = async ()=>{
        await firebase.auth().signInWithEmailAndPassword(email,contra);
    }

    //Este metodo destruye el login
    const  closeSession =async()=>{
        await firebase.auth().signOut();
    }

    return (<div>
            { !user &&
            <div> 
             
                    <input type="text" placeholder="Nombre" onChange={(ev)=>setEmail(ev.target.value)}/>
                    <input type="text" placeholder="Contraseña" onChange={(ev)=>setPassword(ev.target.value)} />
                    <button onClick={loginUser}>Iniciar session</button>
                    <button onClick={createUser}>Crear usuario</button>
              
            </div>
            }   
            { user  && 

                <div>
                    <button onClick={closeSession}>Cerrar session</button>
                </div>


            }    
         

    </div>)


}