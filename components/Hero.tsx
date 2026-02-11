
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589909202802-8f4aadce1849?q=80&w=2500&auto=format&fit=crop" 
          alt="Buenos Aires Night" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-blue-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
          Temporada 2026 • Argentina
        </div>
        
        <h1 className="text-5xl md:text-8xl font-montserrat font-extrabold mb-6 leading-tight text-white drop-shadow-md">
          TU PRÓXIMA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">GRAN AVENTURA</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Explora la inmensidad de Argentina con itinerarios inteligentes diseñados por nuestra IA para el año 2026.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="#destinos" 
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20"
          >
            Explorar Destinos
          </a>
          <a 
            href="#planificar" 
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-sm hover:bg-white/20 transition-all"
          >
            Asistente de Viaje
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
