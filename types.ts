
export enum Season {
  VERANO = 'Verano',
  OTONO = 'Otoño',
  INVIERNO = 'Invierno',
  PRIMAVERA = 'Primavera'
}

export interface Destination {
  id: string;
  name: string;
  province: string;
  description: string;
  image: string;
  seasons: Season[];
  highlights: string[];
  climate2026: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  links?: { title: string; uri: string }[];
}

export interface SeasonInfo {
  id: Season;
  months: string;
  description: string;
  color: string;
  bgGradient: string;
  borderColor: string;
  activeBg: string;
}
