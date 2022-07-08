import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Logout } from '../Store/Actions/userAction';
import { connect } from 'react-redux';
import { homedata, otherData } from '../Store/Actions/homeAction';


import AntDesign from 'react-native-vector-icons/AntDesign';


function HomeScreen(props) {

    const renderItem = () => {
        return (
            <View style={{ borderWidth: 1, }}>
                <Text>aaaaaa</Text>
            </View>
        )
    }

    useEffect(() => {
        // props?.homedata(),
        props?.otherData()
    }, [])
    
    console.log("my data ==========", props.otherData);

    return (
        <View style={{ flex: 1 }}>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, }}>
                <Text style={{ fontSize: 18, color: '#000' }}>Home Screen</Text>

                <FlatList
                    data={otherData}
                    keyExtractor={(item, id) => item.id.toString()}
                    renderItem={renderItem}
                />

            </View>

            <TouchableOpacity
                onPress={() => props?.Logout()}
                style={{ marginHorizontal: 50, justifyContent: 'center', }}
            >
                <View style={{ flexDirection: 'row', borderWidth: 2, justifyContent: 'flex-end', }}>
                    <AntDesign name='logout' size={30} color='red' />
                    <Text style={{ fontSize: 18, color: '#000', alignSelf: 'center', paddingLeft: 10 }}>logout</Text>

                </View>
            </TouchableOpacity>
        </View>
    );
}

const mapStateToProps = ({ home }) => ({
    home
})


export default connect(mapStateToProps, {
    Logout,
    homedata,
    otherData,

})(HomeScreen)

const styles = StyleSheet.create({

});