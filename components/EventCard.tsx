import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Event } from '../data/events';

interface Props {
    event: Event;
    onPress: () => void;
}

const EventCard: React.FC<Props> = ({ event, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image
                source={typeof event.imageUrl === 'string' ? { uri: event.imageUrl } : event.imageUrl}
                style={styles.image}
            />
            <View style={styles.info}>
                <Text style={styles.title}>{event.title}</Text>
                <Text>{event.date}</Text>
                <Text>{event.sport}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        marginVertical: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: 100,
        height: 80,
    },
    info: {
        padding: 10,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default EventCard;
