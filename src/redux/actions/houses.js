import * as types from '../types/houses'
import { fetchAlternativo, postAlternativo } from 'react_native_app/src/webservices/webservices'

function updateHousesList(value) {
    return {
        type: types.HOUSES_UPDATE_LIST,
        value
    }
}
export function fetchHousesList() { // funcion que carga del WS el listado de casas
    return (dispatch, getState) => { 

        fetchAlternativo('/casas').then(response => {
            console.log("fetch response: ", response)
            const list = response.records
            dispatch(updateHousesList(list))
        }).catch(error => {
            console.log("error: ", error)
        })

        
    }

    
}