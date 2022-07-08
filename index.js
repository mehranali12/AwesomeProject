import React from 'react';
import { AppRegistry, Text, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import { AlreadyLogin } from './src/Store/Actions/userAction';


import store from './src/Store';


store.dispatch(AlreadyLogin())




const AppRedux = () => {
    return (
        <Provider {...{ store }}>
            <SafeAreaProvider>
                <App />
            </SafeAreaProvider>
        </Provider>
    )
};


// da code mu kala use kawoo. 
// sa kala mu app k text size mensionn karay ve.
//  i.e 20px. sa kala api call kigi ka agha k ya text size already ve nu da size bia double kigi. 
//  nu ade para mu da code kawoo sa agha text size dluble na she. da code sa issue handle kawee.

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => AppRedux);
