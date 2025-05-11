import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Event } from '../data/events';
import { events as initialEvents } from '../data/events';

interface EventContextType {
  events: Event[];
  addEvent: (event: Event) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<Event[]>(initialEvents);

  const addEvent = (newEvent: Event) => {
    setEvents((prev) => [...prev, newEvent]);
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = (): EventContextType => {
  const context = useContext(EventContext);
  if (!context) throw new Error('useEventContext must be used inside EventProvider');
  return context;
};
