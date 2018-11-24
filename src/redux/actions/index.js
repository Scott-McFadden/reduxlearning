import {
/*    INVALIDATE_SQUAWK,
    ADD_SQUAWK,
    UPDATE_SQUAWK,
    DELETE_SQUAWK,
    GET_SQUAWK,
    SEARCH_FOR_ONE_SQUAWK,
    SEARCH_FOR_MANY_SQUAWK,

    LOAD_SQUAWKS, */
    SELECT_SQUAWK,
    FETCH_SQUAWKS_BEGIN,
    FETCH_SQUAWKS_SUCCESS,
    FETCH_SQUAWKS_FAIL

} from '../types';
import {getSquawks} from "../../services/squawkOperations";
import axios from "axios";

import { debugLog} from "../../services/GeneralSevices";

export const fetchSquawksBegin = () => ({
    type: FETCH_SQUAWKS_BEGIN
});

export const fetchSquawksSuccess = products => {
    debugLog("products: ", products);
   return  ({
        type: FETCH_SQUAWKS_SUCCESS,
        payload: products
    });
}

export const fetchSquawkFail = error => ({
    type: FETCH_SQUAWKS_FAIL,
    payload:  error
});


export function getAllSquawks()
{
    return dispatch => {
        dispatch(fetchSquawksBegin());
        return getSquawks()
            .then(data => {
                debugLog("after call:" , data);
                dispatch(fetchSquawksSuccess(data));
                return;
            })
            .catch(error =>
            {
                console.log(error);
                dispatch(fetchSquawkFail(error));
            });
    };
}


export function addSquawk( item )
{
    try {
        const ret = axios.put("http://localhost:3015/squawk", item);
        return ret;
    }
    catch (err) {
        debugLog("error=>", err);
    }
}


export const selectSquawk = squawk => {
    debugLog("currentsquawk: ", squawk);
    return  ({
        type: SELECT_SQUAWK,
        payload: squawk
    });
}
