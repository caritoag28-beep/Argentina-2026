
import React from 'react';

const SpiritOfArgentina: React.FC = () => {
  return (
    <section className="py-32 bg-slate-950 overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[70%] bg-blue-900/10 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-indigo-900/10 rounded-full blur-[100px] opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative group">
              {/* Animated glow behind the image */}
              <div className="absolute -inset-20 bg-gradient-to-tr from-blue-600/20 via-transparent to-indigo-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="relative z-10 transform hover:scale-[1.03] transition-transform duration-700 ease-out cursor-default">
                <img 
                  src="https://zkzhrtyhrmmtawjipssp.supabase.co/storage/v1/object/public/Imagenes/Argentina.png" 
                  alt="Espíritu de Argentina" 
                  className="w-full max-w-[600px] mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_55px_55px_rgba(59,130,246,0.2)] transition-all duration-700"
                />
              </div>

              {/* Decorative floating badges around the image */}
              <div className="absolute -top-4 -right-4 md:right-0 bg-slate-900 shadow-2xl rounded-2xl p-4 border border-white/10 hidden md:block animate-bounce-slow backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Territorio</p>
                    <p className="text-sm font-bold text-white">2.78M km²</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-blue-500/20">
              Identidad Nacional
            </span>
            <h2 className="text-4xl md:text-7xl font-montserrat font-black text-white mb-8 leading-[1.1] tracking-tighter">
              EL ALMA DE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">NUESTRA TIERRA</span>
            </h2>
            
            <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Argentina es más que un destino; es una emoción que se vive en cada rincón. Desde los glaciares del sur hasta la calidez del norte, capturamos la esencia de un país que te espera con los brazos abiertos en 2026.
            </p>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border-2 border-white/5 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all bg-white/5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-slate-300">Diversidad Infinita</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border-2 border-white/5 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all bg-white/5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21l9-9-9-9-9 9 9 9z" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-slate-300">Pasión Inigualable</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SpiritOfArgentina;