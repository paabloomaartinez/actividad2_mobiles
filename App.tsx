import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import { EventProvider } from './context/EventContext';

export default function App() {
  return (
    <EventProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </EventProvider>
  );
}
