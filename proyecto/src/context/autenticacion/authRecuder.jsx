import {
    REGISTRO_EXITOSO, 
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CESSAR_SESION
} from '../../types/index';


export default (state, action) => {
    switch(action.type) {
        case REGISTRO_EXITOSO://Se guarda token en el LocalStorage
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                autenticado: true,
                mensaje:null//Mostrar mensaje de adventencia manejado con el state
            }

            //No hay state porque solo habra alerta en el Context
        case  LOGIN_ERROR://Realizan la mismo operacion, en caso de que haya un error reiniciar el token
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                mensaje: action.payload//se maneta con el authState
            }
        default:
            return state;
    }
}