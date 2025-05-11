import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEventContext } from '../context/EventContext';

export default function HomeScreen() {
    const navigation = useNavigation<any>();
    const { events } = useEventContext();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Eventos Deportivos</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});