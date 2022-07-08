import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export default UserInputs = (props) => {
    return (
        <View style={{ marginTop: 20 }}>
            <TextInput
                placeholder='Enter username'
                style={styles.UserInputs}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    UserInputs: {
        margin: 5,
        paddingLeft: 20,
        marginHorizontal: 30,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        elevation: 5
    }
});