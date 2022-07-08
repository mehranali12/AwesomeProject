// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { connect } from 'react-redux';
import Toast from 'react-native-toast-message';

import LoginScreen from './src/Screens/Login';
import HomeScreen from './src/Screens/Home';

const Stack = createNativeStackNavigator();

function App(props) {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          {props?.user?.userData == null ? (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
            </>
          ) :
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
            </>
          }


        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </View>
  );
}

const mapStateToProps = ({ user }) => ({
  user
})


export default connect(mapStateToProps, {


})(App)