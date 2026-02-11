
import React from 'react';

const VideoShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-[10px]">Perspectiva 2026</span>
          <h2 className="text-3xl md:text-5xl font-montserrat font-extrabold text-white mt-2 mb-4">
            Argentina en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Todo su Esplendor</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Visualiza cada detalle de la experiencia. Un recorrido vertical completo diseñado para mostrar la inmensidad de nuestros paisajes sin perder un solo pixel.
          </p>
        </div>

        <div className="relative max-w-[420px] mx-auto group">
          {/* Efecto de Brillo Ambiental de Fondo */}
          <div className="absolute -inset-10 bg-gradient-to-tr from-blue-600/10 to-indigo-600/10 rounded-[4rem] blur-3xl group-hover:blur-[100px] transition-all duration-1000 -z-10 opacity-60"></div>
          
          {/* Contenedor Principal Estilo "Mobile Premium" */}
          <div className="relative bg-slate-900 rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border-[1px] border-white/10 ring-8 ring-slate-900 shadow-blue-500/5">
            
            {/* Capa de fondo con desenfoque */}
            <div className="absolute inset-0 opacity-30 scale-110 blur-3xl pointer-events-none">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
              >
                <source src="https://zkzhrtyhrmmtawjipssp.supabase.co/storage/v1/object/public/Videos/grok-video-09f568f7-b280-41d3-ad1e-a3ed4d5a7584.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Video Principal */}
            <div className="relative aspect-[9/16] w-full flex items-center justify-center bg-black/60">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-contain"
              >
                <source src="https://zkzhrtyhrmmtawjipssp.supabase.co/storage/v1/object/public/Videos/grok-video-09f568f7-b280-41d3-ad1e-a3ed4d5a7584.mp4" type="video/mp4" />
              </video>
            </div>
            
            {/* Interfaz de usuario simulada */}
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
              <div className="flex items-end justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full border-2 border-blue-500 p-0.5 shadow-lg shadow-blue-500/20">
                      <div className="w-full h-full rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">ARG</div>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Destino Argentina</p>
                      <p className="text-blue-400 text-[10px] font-medium tracking-wider">Misiones • Patagonia • Cuyo</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed line-clamp-2">
                    Explorando los rincones más profundos del país para el 2026. La aventura comienza aquí.
                  </p>
                </div>
                
                <div className="flex flex-col gap-5 items-center ml-4">
                  <div className="flex flex-col items-center gap-1">
                    <button className="text-white/60 hover:text-red-500 transition-colors transform hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    </button>
                    <span className="text-[10px] text-white/50 font-bold">2.4k</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <button className="text-white/60 hover:text-blue-400 transition-colors transform hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/></svg>
                    </button>
                    <span className="text-[10px] text-white/50 font-bold">Share</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notch superior */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-slate-900 rounded-b-3xl z-20 border-x border-b border-white/5 shadow-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;