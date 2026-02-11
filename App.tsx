
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SeasonGrid from './components/SeasonGrid';
import DestinationSection from './components/DestinationSection';
import SpiritOfArgentina from './components/SpiritOfArgentina';
import ResearchInsights from './components/ResearchInsights';
import VideoShowcase from './components/VideoShowcase';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import { Season } from './types';

const App: React.FC = () => {
  const [activeSeason, setActiveSeason] = useState<Season | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 selection:bg-blue-500/30">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Nueva sección visual con la imagen Argentina.png */}
        <SpiritOfArgentina />
        
        <SeasonGrid 
          activeSeason={activeSeason} 
          setActiveSeason={setActiveSeason} 
        />
        
        <DestinationSection 
          activeSeason={activeSeason} 
        />

        {/* Sección de Investigación basada en PDF */}
        <ResearchInsights />

        {/* Call to Action Section */}
        <section id="planificar" className="py-32 bg-slate-900 overflow-hidden relative border-y border-white/5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[150px]"></div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Concierge Digital</span>
              <h2 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-8 leading-tight">¿Aún no te decides?</h2>
              <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed">
                Nuestra Inteligencia Artificial "Gauchito IA" está lista para armarte un itinerario a medida para el 2026. Solo haz clic en el botón flotante y comienza a chatear.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <button className="bg-white text-slate-950 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-slate-100 transition-all flex items-center gap-3 transform hover:scale-105 active:scale-95">
                  Ver Mapa Interactivo
                </button>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <img 
                        key={i} 
                        src={`https://picsum.photos/seed/user${i}/100/100`} 
                        className="w-12 h-12 rounded-full border-4 border-slate-900" 
                        alt="User"
                      />
                    ))}
                  </div>
                  <div className="text-left">
                    <p className="text-white text-sm font-bold">+1,200 viajeros</p>
                    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Planificando ahora</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <VideoShowcase />

        {/* New Map Visual Section */}
        <section className="py-32 bg-slate-950 overflow-hidden relative">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-20 relative inline-block">
              <div className="absolute -inset-10 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>
              <img 
                src="https://zkzhrtyhrmmtawjipssp.supabase.co/storage/v1/object/public/Imagenes/Mapa%20de%20argentina.jpg" 
                alt="Mapa Ilustrado de Argentina" 
                className="max-w-4xl w-full mx-auto rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border-[1px] border-white/10 transform hover:scale-[1.01] transition-transform duration-1000"
              />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-2xl transform rotate-12 hidden md:flex border-8 border-slate-950 group">
                <span className="font-montserrat font-extrabold text-slate-950 text-center leading-none text-xs group-hover:scale-110 transition-transform">
                  DESTINO<br/><span className="text-3xl">TOP</span><br/>2026
                </span>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl md:text-5xl font-montserrat font-extrabold leading-tight tracking-tight text-white mb-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Lugares emblemáticos
                </span> o puntos de interés en el mapa de Argentina.
              </h2>
              
              <div className="relative group max-w-3xl mx-auto">
                 <div className="absolute -left-10 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                 <p className="text-xl md:text-3xl font-montserrat font-bold text-slate-300 leading-relaxed italic pl-10 text-left">
                  "Monumentos como las <span className="text-blue-400">Cataratas del Iguazú</span> y el <span className="text-blue-400">Obelisco</span>, la Catedral de Ushuaia y la de Córdoba, arte rupestre prehistórico y ruinas en San Ignacio. Bailarines de <span className="text-red-500">tango</span>, <span className="text-purple-400">vino</span>."
                </p>
              </div>
              
              <div className="mt-16 flex justify-center items-center gap-6 text-slate-600 uppercase tracking-[0.4em] text-[10px] font-black">
                <div className="h-[1px] w-24 bg-white/10"></div>
                <span>Patrimonio de la Humanidad</span>
                <div className="h-[1px] w-24 bg-white/10"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AIChat />
      <Footer />
    </div>
  );
};

export default App;