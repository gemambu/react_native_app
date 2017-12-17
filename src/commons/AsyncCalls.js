import axios from 'axios'

export function fetchHousesList() {
    
    const fetchUrl = '/casas'
    return axios.get(fetchUrl)        
    .then((response) => {

        console.log("axios get response: ", response);
        return response.data && response.data.records ? response.data.records : []
    })
    .catch((error) => {

        console.log("axios get error: ", error);
        return []
    });
}