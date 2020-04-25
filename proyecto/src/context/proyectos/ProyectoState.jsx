import React,{ useReducer} from 'react';
import { v4 as uuidv4} from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS, 
    AGRERGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO } from '../../types';

//Para cambiar el state del form para habilitar el formulario
const ProyectoState = props => {

    const proyectos = [
        {id: 1,nombre: 'Tienda Virtual'},
        {id: 2,nombre: 'Intrannet'},
        {id: 3,nombre: 'Diesno de Sitios Web'},
        {id: 4,nombre: 'MEARN'}
    ]    

    const initialState = {
        proyectos : [],
        formulario : false,
        errorformulario: false,
        proyecto: null
    }

    //Dispatch para ejecutar las acciones.
    //useReducer es el remplazo de redux

    //dispath va a ejecutar los diferentestes type para ejecutarlo en el proyectoReducer
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //Serie de funciones para el CRUD del proyecto
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        });
    }

    //Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
            //El payload siempre es lo que toma de parametro 
        });
    }


    //Agregar nuevo proyecto
    const agrergarProyecto = proyecto => {
        proyecto.id = uuidv4();

        //Insertar el proyecto en el state
        dispatch({
            type: AGRERGAR_PROYECTO,
            payload: proyecto
        });
    }

    //Validar el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    //Selecciona el proyecto que el suario dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    //Elimina un proyecto
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        });
    }

    //Creamos el provider para importarlo en el APP
    return (
        <proyectoContext.Provider 
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario, 
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agrergarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
} 

export default ProyectoState;