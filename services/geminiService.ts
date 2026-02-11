
import { GoogleGenAI } from "@google/genai";

/**
 * Clave API autorizada por el usuario para el despliegue en Vercel.
 * Se utiliza directamente para evitar errores de referencia en entornos sin bundler.
 */
const GEMINI_API_KEY = "AIzaSyCCCqTzK4Fmfh9BiQBWp65xSWCSkS7a3GI";

export const getTravelAdvice = async (userPrompt: string, history: { role: 'user' | 'assistant', content: string }[]) => {
  // Inicialización del cliente de Google GenAI con la clave estática
  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({
            role: h.role === 'user' ? 'user' : 'model',
            parts: [{ text: h.content }]
        })),
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: `Eres "Gauchito IA", un asistente virtual experto en turismo en Argentina para el año 2026. 
        Tu objetivo es recomendar destinos según la temporada, eventos culturales de 2026 (como aniversarios, festivales tecnológicos y deportivos), 
        gastronomía local y consejos logísticos. 
        Responde de manera amable, apasionada y profesional. Usa un tono que invite a viajar. 
        Si el usuario pregunta por una temporada específica, destaca destinos estrella para esos meses.
        Utiliza Google Search para dar información actualizada sobre precios estimados y eventos específicos de 2026.
        Menciona siempre que la información está proyectada para el año 2026.`,
        tools: [{ googleSearch: {} }],
      },
    });

    // Uso de la propiedad .text según las especificaciones de la SDK
    const text = response.text || "Lo siento, tuve un problema procesando tu consulta. ¿Podrías intentar de nuevo?";
    
    // Extracción de fuentes de información (Grounding)
    const links = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
      title: chunk.web?.title || "Referencia de Google Search",
      uri: chunk.web?.uri || "#"
    })) || [];

    return { text, links };
  } catch (error) {
    console.error("Error crítico en Gemini API:", error);
    return { 
      text: "Hola, parece que hubo un inconveniente técnico al conectar con mis servidores. Por favor, asegúrate de que la clave API sea válida y reintenta en unos momentos.", 
      links: [] 
    };
  }
};
