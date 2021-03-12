import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import * as colors from '../styles/colors';
import { Entypo } from '@expo/vector-icons'; 
import Text from '../components/Text';
import { TextInput } from 'react-native-gesture-handler';
import Button from './Button';
import Animated, { color, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Emoji from 'react-native-emoji';

function Card(props: any) {
    const title = React.Children.map(props.children, child => child.type.displayName === 'Title' ? child : null);
    const subtitle = React.Children.map(props.children, child => child.type.displayName === 'SubTitle' ? child : null);
    const badge = React.Children.map(props.children, child => child.type.displayName === 'Badge' ? child : null);
    const body = React.Children.map(props.children, child => child.type.displayName === 'Body' ? child : null);

    const [expanded, setExpanded] = useState<boolean>(false);

    const cardHeight = useSharedValue(125);
    const subtitleOpacity = useSharedValue(1);

    const cardAnimatedStyles = useAnimatedStyle(() => {
        return {
            height: cardHeight.value
        }
    });

    const subtitleAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: subtitleOpacity.value,
        }
    });

    const toggleDropDown = () => {
        setExpanded(ex => {
            subtitleOpacity.value = withSpring(ex ? 1 : 0);
            cardHeight.value = withSpring(ex ? 125 : 380, {damping: 15, mass: 0.5});
            return !ex
        });
    }

    return (
        <Animated.View style={[styles.root, expanded && styles.active, cardAnimatedStyles]}>
            <TouchableOpacity onPress={toggleDropDown} activeOpacity={0.85}>
                <View style={styles.heading}>
                    <View>
                        {title}
                        <Animated.View style={subtitleAnimatedStyle}>
                            {subtitle}
                        </Animated.View>
                        <View>
                            {/* badge conta */}
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                {badge}
                            </View>
                        </View>
                    </View>
                    <Entypo 
                        name="chevron-thin-down" 
                        size={24} 
                        color="white"
                        style={{
                            transform: !expanded ? [] : ([{rotate: '180deg'}]),
                            paddingTop: 30,
                            paddingBottom: 30
                        }}
                    />
                </View>
            </TouchableOpacity>
            <Animated.View>
                {subtitle}
                {body}
            </Animated.View>
        </Animated.View>
    );
}

const Title = ({ children }: any) => {
    return(
        <Text variant="medium" style={{
            color: 'white',
            marginBottom: 3,
            fontSize: 20,
        }}>{ children }</Text>
    );
}
Title.displayName = 'Title';
Card.Title = Title;

const SubTitle = ({ children }: any) => {
    return (
        <Text variant="light" style={{
            color: 'white',
            marginBottom: 10,
            opacity: 0.8,
            maxWidth: 200,
            maxHeight: 40,
        }}>{ children }</Text>
    );
}
SubTitle.displayName = 'SubTitle';
Card.SubTitle = SubTitle;

const Badge = ({name, color}: any) => {
    return(
        <View style={{
            backgroundColor: color,
            padding: 8,
            paddingTop: 4,
            paddingBottom: 4,
            borderRadius: 20,
            alignItems: 'center',
            marginRight: 10,
        }}>
            <Text style={{color: 'white', fontSize: 9}}>{name}</Text>
        </View>
    );
}
Badge.displayName = 'Badge';
Card.Badge = Badge;

const Body = ({children}: any) => {
    return(
        <>
        <Text style={{
            marginBottom: 10,
            marginTop: 10,
            fontSize: 15
        }}>{children}</Text>
        <TextInput
        style={{
            backgroundColor: colors.DARK, 
            borderRadius: 10,
            padding: 12,
            marginBottom: 20,
            color: colors.WHITE
        }} 
        multiline
        numberOfLines={4}
        />
        <Button 
        title="Ask for Invite" 
        color={colors.PRIMARY}
        />
        </>
    );
}
Body.displayName = 'Body';
Card.Body = Body;

// style
const styles = StyleSheet.create({
    root: {
        backgroundColor: colors.DARK_LIGHTER,
        alignSelf: 'stretch',
        borderRadius: 10,
        padding: 15,
        marginBottom: 30,
        overflow: 'hidden'
    },
    active: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 100,
        },
        shadowOpacity: 0.8,
        shadowRadius: 100,
        elevation: 2,
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    text: {
        color: 'white',
        fontSize: 23,
        fontWeight: '200'
    },
});

export default Card;