
import React from 'react';

const ResearchInsights: React.FC = () => {
  const pdfUrl = "https://zkzhrtyhrmmtawjipssp.supabase.co/storage/v1/object/public/Archivos%20PDF/Dialnet-SituacionActualDelTurismoEnLaArgentina-208543.pdf";

  const stats = [
    {
      label: "Crecimiento 90-98",
      value: "116.8%",
      description: "Incremento masivo del turismo receptivo e interno en Argentina durante la década analizada."
    },
    {
      label: "Preferencia Costa",
      value: "42.5%",
      description: "De los turistas internos eligen destinos de la Costa Atlántica para su descanso estival."
    },
    {
      label: "Infraestructura",
      value: "+7.7k",
      description: "Establecimientos hoteleros registrados, sentando las bases de la oferta actual."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6 border border-blue-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Perspectiva Histórica
            </div>
            
            <h2 className="text-3xl md:text-5xl font-montserrat font-extrabold text-white mb-6 leading-tight">
              Análisis de la <br />
              <span className="text-blue-500">Evolución Turística</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Para entender el potencial de 2026, exploramos los cimientos del sector. El estudio de la <strong>Dra. Marta Sammarchi</strong> (Universidad del Salvador) detalla cómo Argentina se consolidó como un centro receptor de clase mundial, analizando desde la oferta hotelera hasta el impacto socioeconómico.
            </p>

            <div className="space-y-6 mb-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex gap-6 items-start p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="text-3xl font-montserrat font-black text-blue-500 min-w-[110px]">
                    {stat.value}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{stat.label}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href={pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all flex items-center gap-2 shadow-xl shadow-white/5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Ver Fuente Original (PDF)
              </a>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative p-8 bg-slate-800/50 rounded-[3rem] border border-white/5 shadow-inner backdrop-blur-sm">
              <div className="bg-slate-900 rounded-2xl shadow-2xl p-8 md:p-12 border border-white/5 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="border-b border-white/5 pb-6 mb-6">
                  <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">Cuadernos de Turismo</div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white leading-tight">
                    Situación actual del turismo en la Argentina
                  </h3>
                  <p className="text-sm text-slate-500 mt-2 italic font-medium">Marta Sammarchi • USAL</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <p className="text-xs text-slate-400 font-medium">Análisis de la planta turística (equipamiento e instalación).</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <p className="text-xs text-slate-400 font-medium">Impacto en el medio ambiente y la cultura local.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <p className="text-xs text-slate-400 font-medium">Evolución de los recursos humanos y nivel educativo.</p>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[8px] uppercase font-bold text-slate-600">Publicado</span>
                      <span className="text-[10px] font-bold text-slate-400">Año 2001</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[8px] uppercase font-bold text-slate-600">Referencia</span>
                      <span className="text-[10px] font-bold text-slate-400">Dialnet-208543</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResearchInsights;