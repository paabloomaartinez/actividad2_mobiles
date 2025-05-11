import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useEventContext } from '../context/EventContext';

type RootStackParamList = {
  DetalleEvento: { eventId: string };
};

type DetailRouteProp = RouteProp<RootStackParamList, 'DetalleEvento'>;

export default function EventDetailScreen() {
  const route = useRoute<DetailRouteProp>();
  const { eventId } = route.params;

  const { events } = useEventContext();

  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Evento no encontrado</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={typeof event.imageUrl === 'string' ? { uri: event.imageUrl } : event.imageUrl}
        style={styles.image}
      />
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.text}>📅 {event.date}</Text>
      <Text style={styles.text}>🏟️ {event.location}</Text>
      <Text style={styles.text}>🏀 {event.sport}</Text>
      <Text style={styles.description}>{event.description}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  image: { width: '100%', height: 200, marginBottom: 15, borderRadius: 8 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 5 },
  description: { fontSize: 14, marginTop: 10, color: '#333' },
});
