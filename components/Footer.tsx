
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">A</div>
              <span className="text-xl font-montserrat font-extrabold tracking-tighter">
                ARGENTINA<span className="text-blue-500">2026</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Tu portal inteligente para explorar la inmensidad de Argentina con el poder de la Inteligencia Artificial generativa.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-colors">
                  <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Destinos Populares</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Bariloche & Lagos</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Iguazú & Selva</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Mendoza & Vinos</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Norte & Quebrada</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Experiencias</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Turismo Aventura</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Gastronomía Premium</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Eventos 2026</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Rutas 4x4</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Newsletter IA</h4>
            <p className="text-slate-400 text-sm mb-6">Recibe tips de viaje generados por nuestro modelo para el 2026.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-slate-800 border-none rounded-l-xl px-4 py-3 text-sm flex-1 focus:ring-1 focus:ring-blue-500 outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-r-xl transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:row justify-between items-center gap-6 text-slate-500 text-xs text-center md:text-left">
          <p>© 2025 Argentina 2026. Todos los derechos reservados. Desarrollado con Gemini AI.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Soporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
