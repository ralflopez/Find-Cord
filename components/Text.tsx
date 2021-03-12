import React from 'react';
import { StyleSheet, Text as TextRN } from 'react-native';
import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
} from '@expo-google-fonts/poppins';

function Text({variant, style, ...rest}: any) {
    let [fontsLoaded] = useFonts({
        'regular': Poppins_400Regular,
        'light': Poppins_300Light,
        'medium': Poppins_500Medium,
        'bold': Poppins_700Bold
    });

    if(!fontsLoaded) {
        return <TextRN>...</TextRN>
    }

    return (
        <TextRN {...rest} style={[
            styles.root,
            {
                fontFamily: variant
            },
            style
        ]}>
        </TextRN>
    );
}

const styles = StyleSheet.create({
    root: {
        color: 'white'
    }
});

export default Text;