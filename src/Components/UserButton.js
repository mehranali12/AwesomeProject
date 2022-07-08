import * as React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default UserButton = ({onpress, usernamer, password}) => {
    return (
        <TouchableOpacity
        onPress={onpress}
        style={styles.UserButton}>
            <Text style={{color: '#FFFFFF',}}>Login</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    UserButton: {
        marginHorizontal: 30,
        marginTop: 25,
        fontSize: 22,
        fontWeight: 'bold',
        backgroundColor: '#01B145',
        borderRadius: 10,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    }
});