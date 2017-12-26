import * as types from '../types/characters'
import { fetchAlternativo, postAlternativo, remove, post } from 'react_native_app/src/webservices/webservices'
import { Actions } from 'react-native-router-flux'

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

export function updateCharacterSelected(character) {
    return {
        type: types.CHARACTERS_UPDATE_SELECTED,
        character
    }
}

export function postCharacter(data) {
    return (dispatch, getState) => {
        console.log('postCharacter response: ', data)
        dispatch(setCharactersFetching(true))
        const state = getState()
        const house = state.houses.item

        const fetchUrl = '/personajes'
        post(fetchUrl, data).then( response => {

            dispatch(setCharactersFetching(false))
            console.log("postCharacter response: ", response)

            if (response.record) {
                dispatch(fetchCharactersList(house.id))
                dispatch(updateCharacterSelected(null))
                Actions.pop()
            }

        }).catch( error => {
            dispatch(setCharactersFetching(false))
            console.log("postCharacter error: ", error)
        })
    }
}

export function fetchCharactersList(houseId) { // funcion que carga del WS el listado de casas
    return (dispatch, getState) => { 

        dispatch(setCharactersFetching(true))
        dispatch(updateCharactersList([])) // con esto vaciamos la lista con la información anterior en caso de que la nueva casa no tenga personajes
        // alternativa: const stahouseIdte = getState().houses.item.id
        
        const fetchUrl= '/personajes?casa=' + houseId
        fetchAlternativo(fetchUrl).then(response => {

            console.log("fetch response: ", response)

            dispatch(setCharactersFetching(false))
            dispatch(updateCharactersList(response.records))
        }).catch(error => {

            console.log("fetchCharactersList error: ", error)

            dispatch(setCharactersFetching(false))
        })
    }
}

export function deleteCharacter(character) {
    return  (dispatch, getState) => {
        
        
        dispatch(setCharactersFetching(true))
        const state = getState()
        const house = state.houses.item

        const fetchUrl = '/personajes/' + character.id
        remove(fetchUrl).then( response => {
            
            dispatch(setCharactersFetching(false))
            console.log("deleteCharacter response: ", response)

            if(response.status && response.status == "ok"){

                dispatch(fetchCharactersList(house.id))
                dispatch(updateCharacterSelected(null))
                Actions.pop()
            }
        }).catch( error => {

            dispatch(setCharactersFetching(false))
            console.log("deleteCharacter error: ", error)
        })

    }
}