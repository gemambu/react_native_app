import * as types from '../types/houses'

const initalState = {
    isFetching: false,
    list: [],
    item: null
}

export default function reducer(state = initalState, action = {}){
    
    switch(action.type){
    
        case types.HOUSES_UPDATE_LIST:
            return {
                ...state,
                list: action.value
            };
        case types.HOUSES_UPDATE_SELECTED:
            return {
                ...state,
                item: action.value
            };
        default:
            return state;  
    }
}