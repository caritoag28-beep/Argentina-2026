
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log("Iniciando aplicación Argentina 2026...");

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Error crítico: No se encontró el elemento #root en el DOM.");
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Aplicación renderizada correctamente.");
  } catch (err) {
    console.error("Fallo durante el renderizado inicial:", err);
    rootElement.innerHTML = `
      <div style="padding: 20px; color: white; background: #0f172a; height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; flex-direction: column;">
        <h1 style="color: #3b82f6;">Error de Carga</h1>
        <p>Hubo un problema al iniciar la interfaz. Por favor, recarga la página.</p>
        <pre style="font-size: 10px; color: #475569; margin-top: 20px;">${err instanceof Error ? err.message : 'Error desconocido'}</pre>
      </div>
    `;
  }
}
