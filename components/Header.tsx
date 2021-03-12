import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Text from './Text';

function Header() {
    return (
        <View style={styles.titleBar}>
            <Image source={require('../assets/img/icon-nbg.png')} style={styles.logo}/>
            <Text style={styles.text}>Find Cord</Text>
            <Entypo name="menu" size={30} color="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    titleBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    logo: {
        width: 35,
        height: 35
    },
});

export default Header;