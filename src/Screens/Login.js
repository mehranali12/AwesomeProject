import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Userlogin } from '../Store/Actions/userAction';
import { connect } from 'react-redux';
import UserButton from '../Components/UserButton';
import UserInputs from '../Components/UserInputs';


function  Login (props)  {

    const [username, setusername] = useState(null)
    const [password, setpassword] = useState(null)

    console.log('text.........', username);

    return (
        <View style={{ flex: 1, backgroundColor: '#FAFFFB' }}>

            <View style={{ alignItems: 'center', marginTop: '30%', }}>
                <Text style={styles.Textstyle}>Hello Again!</Text>
                <Text style={styles.Textstyle2}>Chance to get your life better</Text>
                <Text style={styles.Textstyle2}>life better</Text>
            </View>

            <TextInput
                placeholder="username"
                style={styles.UserInputs}
                onChangeText={(text) => setusername(text)}
            />

            <TextInput
                style={styles.UserInputs}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => setpassword(text)}
            />


            <View style={{ flexDirection: 'row-reverse', marginTop: 10 }}>
                <Text style={{ marginRight: 30, fontSize: 14, fontWeight: 'bold' }}>Recover Password</Text>
            </View>


            <UserButton
                onpress={() => props?.Userlogin(username , password)}
            //onPress={() => props.ckeck(username, password)}
            />


            <Text style={{ marginRight: 30, fontSize: 14, fontWeight: 'bold', textAlign: 'center', top: 10 }}>or continue with</Text>

            <View style={{ top: 20, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <AntDesign name='google' size={30} color='#FF6666' />

                <AntDesign name='apple1' size={30} color='#000'
                    style={{}} />
                <EvilIcons name='sc-facebook' size={30} color='blue' />
            </View>

            <View style={{ top: '10%', flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ fontSize: 12, fontWeight: 'bold', }}>Not a member?</Text>
                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#02B14B' }}> Register now</Text>
            </View>
        </View>
    );
}

const mapStateToProps = ({ }) => ({

})


export default connect(mapStateToProps, {
    Userlogin

})(Login)

const styles = StyleSheet.create({
    Textstyle: {
        fontSize: 28,
        color: '#000'
    },
    Textstyle2: {
        fontSize: 12,
        color: '#000',
        marginTop: 5,
        fontWeight: 'bold'
    },
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