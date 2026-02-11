
import React from 'react';
import { SEASONS_DATA } from '../constants';
import { Season } from '../types';

interface Props {
  activeSeason: Season | null;
  setActiveSeason: (s: Season) => void;
}

const SeasonGrid: React.FC<Props> = ({ activeSeason, setActiveSeason }) => {
  return (
    <section id="temporadas" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/20 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Planifica tu Viaje</span>
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-4">Elige tu Temporada</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Cada estación ofrece un país diferente. Selecciona tu época favorita para ver recomendaciones específicas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {SEASONS_DATA.map((season) => {
            const isActive = activeSeason === season.id;
            return (
              <button 
                key={season.id}
                onClick={() => setActiveSeason(season.id)}
                className={`relative group h-72 rounded-[2rem] overflow-hidden transition-all duration-500 text-left p-8 flex flex-col justify-end border-2 backdrop-blur-sm 
                  ${isActive 
                    ? `border-blue-500/50 bg-white/5 scale-105 shadow-[0_20px_50px_rgba(59,130,246,0.1)] z-10` 
                    : `bg-white/5 border-white/5 hover:border-white/20 hover:scale-[1.02]`
                  }`}
              >
                {/* Visual seasonal gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${season.bgGradient} transition-opacity duration-500
                  ${isActive ? 'opacity-20' : 'opacity-5 group-hover:opacity-15'}
                `}></div>
                
                <div className="relative z-10">
                  <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${season.color} mb-2 block`}>
                    {season.months}
                  </span>
                  <h3 className={`text-2xl font-bold mb-3 transition-colors text-white`}>
                    {season.id}
                  </h3>
                  <p className={`text-xs leading-relaxed transition-all duration-500 text-slate-400
                    ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}
                  `}>
                    {season.description}
                  </p>
                </div>
                
                <div className={`absolute top-6 right-6 transition-all duration-500
                  ${isActive ? 'opacity-100 scale-110' : 'opacity-20 group-hover:opacity-60 scale-100'}
                `}>
                   <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md shadow-md`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${season.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                   </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SeasonGrid;