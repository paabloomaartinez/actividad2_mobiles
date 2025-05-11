export interface Event {
    id: string;
    title: string;
    date: string;
    sport: string;
    imageUrl: any;
    description: string;
    location: string;
  }
  
  export const events: Event[] = [
    {
      id: '1',
      title: 'Maratón Ciudad',
      date: '2025-05-10',
      sport: 'Atletismo',
      imageUrl: require('../assets/images/maraton.jpg'),
      description: 'Carrera anual de 10km en el centro de la ciudad.',
      location: 'Plaza Mayor Madrid',
    },
    {
      id: '2',
      title: 'Partido de Baloncesto',
      date: '2025-05-12',
      sport: 'Baloncesto',
      imageUrl: require('../assets/images/baloncesto.jpg'),
      description: 'Partido amistoso entre equipos locales.',
      location: 'Pabellón Municipal Irun',
    },
    {
      id: '3',
      title: 'Evento de League Of Legends',
      date: '2025-05-15',
      sport: 'eSports',
      imageUrl: require('../assets/images/movistar_koi.jpeg'),
      description: 'Jornada de LEC de League of Legends en el Madrid Arena.',
      location: 'Madrid Arena',
    }
  ];
  