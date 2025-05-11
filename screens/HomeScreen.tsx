import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import EventCard from '../components/EventCard';
import { useNavigation } from '@react-navigation/native';
import { useEventContext } from '../context/EventContext';

export default function HomeScreen() {
    const navigation = useNavigation<any>();
    const { events } = useEventContext();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Eventos Deportivos</Text>
            <FlatList
                data={events}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <EventCard
                        event={item}
                        onPress={() => navigation.navigate('DetalleEvento', { eventId: item.id })}
                    />
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});