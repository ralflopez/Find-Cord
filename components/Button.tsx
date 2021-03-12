import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Text from '../components/Text';

function Button(props: any) {
    return (
        <TouchableOpacity 
        activeOpacity={0.8}
        style={[{
            backgroundColor: props.color
        }, styles.root]}
        {...props}>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    root: {
        padding: 10,
        borderRadius: 10,
        alignItems: 'center'
    }
});

export default Button;