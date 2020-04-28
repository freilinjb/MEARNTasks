import React,{useReducer} from 'react';
import AuthContext from './authContext'
import AuthRecuder from './authRecuder'

import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token'

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

    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos);
            console.log(respuesta);

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data 
            });

            //Obtener el usuario
            usuarioAutenticado();
            
        } catch (error) { 
            //Mostrando el error del backend el Ej: Usuario ya existe
            // console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            });
        }
    }

    //Retorna el usuario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('toke n');
        if(token) {
            //TODO: Funcion para enviar el token por headers
            tokenAuth(token);
        }
        try {
            const respuesta = await clienteAxios.get('/api/auth');
            console.log(respuesta);
            
        } catch (error) {   
            console.log(error.response);
            
            dispatch({
                type:LOGIN_ERROR
            });
        }
    }

    //Cuando el usuario inicia sesion
    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos);
            console.log(respuesta);
            dispatch({
                type:   LOGIN_EXITOSO,
                payload: respuesta.data//Enviamos cuando el usuario se registra enviamos 
                //El token en usuarioController
            });

            //obtener el usuario autenticado
            usuarioAutenticado();
            
        } catch (error) {
            console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: LOGIN_ERROR, 
                payload: alerta
            });
        }
    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario,
                iniciarSesion
            }}
        >
            {props.children}
        </AuthContext.Provider>
     )
}

export default AuthState;
