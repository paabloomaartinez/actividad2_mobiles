import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import EventDetailScreen from '../screens/EventDetailScreen';
import AddEventScreen from '../screens/AddEventScreen';
import { Ionicons } from '@expo/vector-icons';

// Define las rutas de cada stack
export type RootStackParamList = {
  Eventos: undefined;
  DetalleEvento: { eventId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Eventos" component={HomeScreen} />
      <Stack.Screen name="DetalleEvento" component={EventDetailScreen} options={{ title: 'Detalle del Evento' }} />
    </Stack.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'list';

          if (route.name === 'Inicio') {
            iconName = 'calendar';
          } else if (route.name === 'Añadir Evento') {
            iconName = 'add-circle';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Inicio" component={HomeStack} />
      <Tab.Screen name="Añadir Evento" component={AddEventScreen} />
    </Tab.Navigator>
  );
}
