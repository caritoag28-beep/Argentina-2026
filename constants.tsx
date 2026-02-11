
import { Season, Destination, SeasonInfo } from './types';

export const SEASONS_DATA: SeasonInfo[] = [
  {
    id: Season.VERANO,
    months: 'Diciembre – Febrero',
    description: 'Playas atlánticas, lagos patagónicos y festivales bajo el sol.',
    color: 'text-orange-600',
    bgGradient: 'from-orange-400 to-yellow-200',
    borderColor: 'border-orange-400',
    activeBg: 'bg-orange-50'
  },
  {
    id: Season.OTONO,
    months: 'Marzo – Mayo',
    description: 'Colores ocres en los viñedos de Cuyo y clima templado ideal.',
    color: 'text-amber-800',
    bgGradient: 'from-amber-600 to-orange-300',
    borderColor: 'border-amber-600',
    activeBg: 'bg-amber-50'
  },
  {
    id: Season.INVIERNO,
    months: 'Junio – Agosto',
    description: 'Nieve en la Cordillera y el encanto del Norte Argentino.',
    color: 'text-blue-700',
    bgGradient: 'from-blue-600 to-cyan-300',
    borderColor: 'border-blue-500',
    activeBg: 'bg-blue-50'
  },
  {
    id: Season.PRIMAVERA,
    months: 'Septiembre – Noviembre',
    description: 'Jacarandás en flor, avistamiento de ballenas y vida al aire libre.',
    color: 'text-emerald-700',
    bgGradient: 'from-emerald-500 to-lime-300',
    borderColor: 'border-emerald-500',
    activeBg: 'bg-emerald-50'
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'bariloche',
    name: 'San Carlos de Bariloche',
    province: 'Río Negro',
    description: 'La capital de los lagos y el esquí. En 2026 se esperan infraestructuras renovadas en el Cerro Catedral.',
    image: 'https://picsum.photos/seed/bariloche/800/600',
    seasons: [Season.INVIERNO, Season.VERANO],
    highlights: ['Cerro Catedral', 'Circuito Chico', 'Chocolaterías'],
    climate2026: 'Temperaturas estables con nieve asegurada en Julio.'
  },
  {
    id: 'mendoza',
    name: 'Mendoza Capital & Valle de Uco',
    province: 'Mendoza',
    description: 'Tierra del sol y del buen vino. La Fiesta Nacional de la Vendimia 2026 será un evento tecnológico sin precedentes.',
    image: 'https://picsum.photos/seed/mendoza/800/600',
    seasons: [Season.OTONO, Season.PRIMAVERA],
    highlights: ['Ruta del Vino', 'Parque Aconcagua', 'Termas de Cacheuta'],
    climate2026: 'Otoño seco y despejado, ideal para la cosecha.'
  },
  {
    id: 'iguazu',
    name: 'Cataratas del Iguazú',
    province: 'Misiones',
    description: 'Una de las 7 Maravillas Naturales del Mundo. Selva exuberante y energía pura.',
    image: 'https://picsum.photos/seed/iguazu/800/600',
    seasons: [Season.PRIMAVERA, Season.INVIERNO],
    highlights: ['Garganta del Diablo', 'Paseos en lancha', 'Selva misionera'],
    climate2026: 'Humedad alta, se recomienda visitar en meses menos calurosos.'
  },
  {
    id: 'ushuaia',
    name: 'Ushuaia',
    province: 'Tierra del Fuego',
    description: 'La ciudad del fin del mundo. Cruceros a la Antártida y paisajes de ensueño.',
    image: 'https://zkzhrtyhrmmtawjipssp.supabase.co/storage/v1/object/public/Imagenes/Ushuaia.jpg',
    seasons: [Season.VERANO, Season.INVIERNO],
    highlights: ['Canal Beagle', 'Parque Nacional', 'Presidio de Ushuaia'],
    climate2026: 'Veranos frescos, perfectos para trekking austral.'
  },
  {
    id: 'purmamarca',
    name: 'Purmamarca',
    province: 'Jujuy',
    description: 'El corazón de la Quebrada de Humahuaca. Colores que parecen pintados a mano.',
    image: 'https://picsum.photos/seed/jujuy/800/600',
    seasons: [Season.INVIERNO, Season.PRIMAVERA],
    highlights: ['Cerro de los Siete Colores', 'Salinas Grandes', 'Cultura andina'],
    climate2026: 'Amplitud térmica marcada, cielos despejados garantizados.'
  },
  {
    id: 'madryn',
    name: 'Puerto Madryn',
    province: 'Chubut',
    description: 'La puerta de entrada a la fauna marina. Ballenas, pingüinos y lobos marinos.',
    image: 'https://picsum.photos/seed/madryn/800/600',
    seasons: [Season.PRIMAVERA],
    highlights: ['Península Valdés', 'Avistaje de ballenas', 'Buceo con lobos'],
    climate2026: 'Temporada alta de ballenas con alta tasa de avistamientos.'
  }
];
