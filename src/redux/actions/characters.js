import * as types from '../types/characters'
import { fetchAlternativo, postAlternativo } from 'react_native_app/src/webservices/webservices'

function updateCharactersList(value) {
    return {
        type: types.CHARACTERS_UPDATE_LIST,
        value
    }
}

function setCharactersFetching(value) {
    return{
        type: types.CHARACTERS_SET_FETCHING,
        value: value
    }
}

export function updateCharacterSelected(value) {
    return {
        type: types.CHARACTERS_UPDATE_SELECTED,
        value
    }
}

export function fetchCharactersList(houseId) { // funcion que carga del WS el listado de casas
    return (dispatch, getState) => { 

        dispatch(setCharactersFetching(true))
        dispatch(updateCharactersList([])) // con esto vaciamos la lista con la información anterior en caso de que la nueva casa no tenga personajes
        // alternativa: const stahouseIdte = getState().houses.item.id
        
        const fetchUrl= '/personajes?casa=' + houseId
        fetchAlternativo(fetchUrl).then(response => {
            dispatch(setCharactersFetching(false))
            console.log("fetch response: ", response)
            dispatch(updateCharactersList(response.records))
        }).catch(error => {
            console.log("error: ", error)
            dispatch(setCharactersFetching(false))
        })
    }
}