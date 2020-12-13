import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';


export default(props) => {
    const firebase = useFirebaseApp();
    const user = useUser();

    const closeSession = async ()=>{
        console.log("CloseSession");
        await firebase.auth().signOut();
    }

    return(<div>
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
