import Toast from 'react-native-toast-message';
import { baseUrl } from '../../Confiq/confiq';
import { emailValidation } from '../../Confiq/helper';
import { otherStatus, rejection } from '../../Confiq/helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    HOME_DATA,
    OTHER_DATA
} from './type'

export const homedata = (email, password) => {
    return async dispatch => {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };

        fetch("https://jsonplaceholder.typicode.com/Posts", requestOptions)
            .then(response => response.json())
            .then(result => {

                // console.log(result.status)
                // console.log(result)

                dispatch({ type: HOME_DATA, payload: result })
            })
            .catch(error => console.log('error', error));
    }
}


export const otherData = () => {
    return async dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://jsonplaceholder.typicode.com/todos", requestOptions)
            .then(response => response.json())
            .then(data => {

                console.log("data ===========", data)

                dispatch({ type: OTHER_DATA, payload: data })
            })
            .catch(error => console.log('error', error));
    }
}