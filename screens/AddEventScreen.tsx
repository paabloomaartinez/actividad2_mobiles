import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, Button, StyleSheet,
  SafeAreaView, Alert, ScrollView, Image, TouchableOpacity
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useEventContext } from '../context/EventContext';
import uuid from 'react-native-uuid';

export default function AddEventScreen() {
  const { addEvent } = useEventContext();

  const [title, setTitle] = useState('');
  const [sport, setSport] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Verificar que todos los campos estén llenos
    if (title && sport && date && location && description && imageUri) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [title, sport, date, location, description, imageUri]);

  const handleSubmit = () => {
    if (!isFormValid) {
      Alert.alert('Error', 'Completa todos los campos.');
      return;
    }

    addEvent({
      id: uuid.v4() as string,
      title,
      sport,
      date,
      location,
      imageUrl: imageUri!, // Imagen del dispositivo
      description,
    });

    Alert.alert('Éxito', 'Evento añadido correctamente.');
    // Resetear formulario
    setTitle('');
    setSport('');
    setDate('');
    setLocation('');
    setDescription('');
    setImageUri(null);
  };

  const pickImage = async () => {
    // Pedir permisos
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'Se necesita acceso a las fotos.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Añadir Evento Deportivo</Text>

        <TextInput
          style={styles.input}
          placeholder="Título"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Deporte"
          value={sport}
          onChangeText={setSport}
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha (YYYY-MM-DD)"
          value={date}
          onChangeText={setDate}
        />
        <TextInput
          style={styles.input}
          placeholder="Lugar"
          value={location}
          onChangeText={setLocation}
        />
        <TextInput
          style={styles.input}
          placeholder="Descripción"
          value={description}
          onChangeText={setDescription}
          multiline
        />

        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          <Text style={styles.imagePickerText}>Seleccionar Imagen</Text>
        </TouchableOpacity>

        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.previewImage} />
        )}

        <Button title="Agregar Evento" onPress={handleSubmit} disabled={!isFormValid} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
  scrollContainer: { paddingTop: 40, paddingBottom: 20 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  imagePicker: {
    backgroundColor: '#007AFF',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  imagePickerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
});