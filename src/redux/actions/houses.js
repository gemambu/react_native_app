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

        dispatch(setHousesFetching(true))
        const fetchUrl= '/casas'
        fetchAlternativo(fetchUrl).then(response => {
            dispatch(setHousesFetching(false))
            console.log("fetch response: ", response)
            const list = response.records
            dispatch(updateHousesList(list))
        }).catch(error => {
            console.log("error: ", error)
            dispatch(setHousesFetching(false))
        })
    }
}

function setHousesFetching(value) {
    return{
        type: types.HOUSES_SET_FETCHING,
        value: value
    }
}

export function updateHouseSelected(value) {
    return {
        type: types.HOUSES_UPDATE_SELECTED,
        value
    }
}
