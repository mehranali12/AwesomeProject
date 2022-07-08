import Toast from 'react-native-toast-message';


export function emailValidation(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true
    }
    else {
        return false
    }
}

export function otherStatus(res, dispatch) {
    console.log('otherstatus' , res.meta.status)
    if (res.meta.status == 400) {
        Toast.show({
            type: 'error',
            text1: 'Sorry!',
            text2: res.meta.message

        });
    }
    else if (res.meta.status == 401) {
        Toast.show({
            type: 'error',
            text1: 'Sorry!',
            text2: res.meta.message

        });
    }
    else if (res.meta.status == 404) {
        Toast.show({
            type: 'error',
            text1: 'Sorry!',
            text2: res.meta.message

        });
    }

}
export function rejection(error, dispatch) {
    if (error.message === 'Network request failed') {
        Toast.show({
            type: 'error',
            text1: 'Internet!',
            text2: "Kindly Check Your Internet Connection"

        });
    }
}