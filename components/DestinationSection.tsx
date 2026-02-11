
import React from 'react';
import { DESTINATIONS } from '../constants';
import { Season } from '../types';

interface Props {
  activeSeason: Season | null;
}

const DestinationSection: React.FC<Props> = ({ activeSeason }) => {
  const filtered = activeSeason 
    ? DESTINATIONS.filter(d => d.seasons.includes(activeSeason))
    : DESTINATIONS.slice(0, 4);

  return (
    <section id="destinos" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-4 leading-tight">
              {activeSeason ? `Recomendados en ${activeSeason}` : 'Destinos Destacados'}
            </h2>
            <p className="text-slate-400">Selección exclusiva para viajes inteligentes en 2026.</p>
          </div>
          <button className="text-blue-400 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Ver todos los destinos
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((dest) => (
            <div key={dest.id} className="group bg-slate-900 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/30 hover:shadow-[0_20px_80px_-20px_rgba(59,130,246,0.2)] transition-all duration-700">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-6 left-6 flex gap-2">
                  {dest.seasons.map(s => (
                    <span key={s} className="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{dest.name}</h3>
                    <div className="flex items-center gap-1 text-blue-400 text-sm font-semibold">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {dest.province}
                    </div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 border border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {dest.description}
                </p>
                <div className="space-y-4 mb-8">
                   <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Puntos Clave 2026</p>
                   <div className="flex flex-wrap gap-2">
                     {dest.highlights.map(h => (
                       <span key={h} className="text-[10px] bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg text-slate-300 font-medium">
                         {h}
                       </span>
                     ))}
                   </div>
                </div>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="text-[10px] text-slate-400 max-w-[70%]">
                    <span className="font-bold text-blue-400 uppercase tracking-widest mr-2">Clima IA:</span> {dest.climate2026}
                  </div>
                  <button className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;