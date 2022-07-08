import Toast from 'react-native-toast-message';
import { baseUrl } from '../../Confiq/confiq';
import { emailValidation } from '../../Confiq/helper';
import { otherStatus, rejection } from '../../Confiq/helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    USER_DATA
} from './type'

export const Userlogin = (email, password) => {
    return async dispatch => {
        if (
            email == null ||
            password == null
        ) {
            Toast.show({
                type: 'error',
                text1: 'Empty!',
                text2: 'Kindly enter email and password'
            });
        }
        else {
            try {
                if (!emailValidation(email)) {
                    Toast.show({
                        type: 'error',
                        text1: 'Incorrect',
                        text2: 'Incorrect Email Address'

                    });
                    // dispatch({ type: CHANGE_LOADER, payload: false })
                    return
                }
                var formdata = new FormData();
                formdata.append("email", email);
                formdata.append("password", password);
                formdata.append("device_token", "zasdcvgtghnkiuhgfde345tewasdfghjkm");

                var requestOptions = {
                    method: 'POST',
                    // headers: myHeaders,
                    body: formdata,
                    redirect: 'follow'
                };

                fetch(baseUrl + "api/login", requestOptions)
                    .then(response => response.json())
                    .then(async (result) => {
                        console.log("Resultttttt", result)
                        console.log(result?.meta?.status)
                        console.log(result?.meta)
                        if (result?.meta?.status == 200) {
                            dispatch({ type: USER_DATA, payload: result.data })
                            await AsyncStorage.setItem('StoreUser', JSON.stringify(result.data))

                        } else {
                            otherStatus(result)
                        }

                    })
                    .catch(error => { console.log(error), rejection(error) });



            } catch (error) {
                console.log("errrrrrrrrrrrrrrrrrr", error)

            }
        }

    }
}

// da code mu azaka lyku sa kala musa yu user already login ve.. nu agha ba nia auth ta na see balky direct ba main routh ta see.
export const AlreadyLogin = () => {
    return async dispatch => {
        const userData = await AsyncStorage.getItem('StoreUser')
        const userDataParse = JSON.parse(userData)
        dispatch({ type: USER_DATA, payload: userDataParse })
    }
}

//aw sa kala mu seasion hatam kawoo. nu bia da code walyku. sa kala user logout she nu bs agha data hum null she. ow user redirect she auth pages ta.
export const Logout = () => {
    return async dispatch => {
        const userData = await AsyncStorage.removeItem('StoreUser')

        dispatch({ type: USER_DATA, payload: null })
    }
}