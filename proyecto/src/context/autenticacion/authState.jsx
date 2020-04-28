import React,{useReducer} from 'react';
import AuthContext from './authContext'
import AuthRecuder from './authRecuder'

import {
    REGISTRO_EXITOSO, 
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CESSAR_SESION
} from '../../types/index';

const AuthState = props => {
    const initialState = {
        //Iniciar el state con un token
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,//La informacion del usuario
        mensaje: null
    }

    const [state, dispatch] = useReducer(AuthRecuder,initialState);

    
    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje
            }}
        >
            {props.children}
        </AuthContext.Provider>
     )
}

export default AuthState;
