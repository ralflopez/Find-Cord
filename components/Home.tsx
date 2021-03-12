import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import Card from './Card';
import * as colors from '../styles/colors';

interface Badge {
    name: string,
    color: string
}

interface DATAObject {
    name: string,
    subtitle: string,
    badges: Badge[],
    question: string,
    key: string,
    impression?: number
}

function Home() {
    const [refreshing, setRefreshing] = useState<boolean>(false);

    const DATA: Array<DATAObject> = [
        {
            name: 'Name',
            subtitle: 'subtitle',
            badges: [
                {name: 'NSFW', color: 'red'},
                {name: 'PHILIPPINES', color: 'dodgerblue'}
            ],
            question: 'What is life?',
            key: 'sdf155'
        },
        {
            name: 'Name',
            subtitle: 'subtitle',
            badges: [
                {name: 'NSFW', color: 'red'}
            ],
            question: 'What is life?',
            key: 'sdf14'
        },
        {
            name: 'Name',
            subtitle: 'subtitle',
            badges: [
                {name: 'NSFW', color: 'red'}
            ],
            question: 'What is life?',
            key: 'sdf13'
        },
        {
            name: 'Name',
            subtitle: 'subtitle',
            badges: [
                {name: 'NSFW', color: 'red'}
            ],
            question: 'What is life?',
            key: 'sdf12'
        },
        {
            name: 'Name',
            subtitle: 'subtitle',
            badges: [
                {name: 'NSFW', color: 'red'},
                {name: 'PH', color: 'hotpink'}
            ],
            question: 'What is life?',
            key: 'sdf12c'
        },
        {
            name: 'Name',
            subtitle: 'subtitle',
            badges: [
                {name: 'NSFW', color: 'red'}
            ],
            question: 'this',
            key: 'sdf1'
        },

    ]

    const renderCard = ({ item }: any) => (
        <Card>
            <Card.Title>{item.name}</Card.Title>
            {
                item.badges.map((badge: Badge) => (
                    <Card.Badge name={badge.name} color={badge.color} key={`${badge.name}${item.key}`}/>
                    ))
            }
            <Card.SubTitle>{item.subtitle}</Card.SubTitle>
            <Card.Body>{item.question}</Card.Body>
        </Card>
    );

    const handleRefresh = () => {};

    return (
        <View style={styles.root}>
            <FlatList 
                data={DATA}
                renderItem={renderCard}
                style={styles.flatlist}
                contentContainerStyle={styles.flatlist}
                refreshing={refreshing}
                onRefresh={handleRefresh}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: colors.BG,
    },
    flatlist: {
        padding: 5,
    }
});

export default Home;