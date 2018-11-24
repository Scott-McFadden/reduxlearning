import axios from 'axios';
import {debugLog} from "./GeneralSevices";

const SERVERURL = 'http://localhost:3015';

export function getSquawks()
{
    return axios.get(SERVERURL + '/squawk' )
        .then(handleErrors);
}


function handleErrors(response) {
    if (!(response.statusText==='OK')) {
        debugLog(response);
        throw Error(response.statusText);
    }
    return response.data;
}


export function addSquawks( item )
{
    return axios.post(SERVERURL + '/squawk', item )
        .then(handleErrors);
}

export function updateSquawks(key, item) {
    return axios.put(SERVERURL + '/squawk/' + key, item)
        .then(handleErrors);
}

export function deleteSquawks(key) {
    return axios.delete(SERVERURL + '/squawk/' + key)
        .then(handleErrors);
}
