
import { GoogleGenAI } from "@google/genai";
import { CONFIG } from "../config.ts";

export const getTravelAdvice = async (userPrompt: string, history: { role: 'user' | 'assistant', content: string }[]) => {
  // Inicialización limpia utilizando la configuración centralizada
  const ai = new GoogleGenAI({ apiKey: CONFIG.GEMINI_API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: CONFIG.MODEL_NAME,
      contents: [
        ...history.map(h => ({
            role: h.role === 'user' ? 'user' : 'model',
            parts: [{ text: h.content }]
        })),
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: `Eres "Viajero expérto", el asistente de elite para turismo en Argentina en ${CONFIG.YEAR}. 
        Tu misión es proporcionar recomendaciones precisas sobre destinos, clima proyectado, eventos culturales y gastronomía.
        Tono: Entusiasta, profesional y experto.
        Debes dominar al menos el idioma español e ingles y poseer un profundo conocimiento de Argentina (historia, cultura, puntos de interés
        Instrucciones: Siempre menciona que los datos son para el año ${CONFIG.YEAR}. Usa Google Search para validar eventos actuales y precios estimados.`,
        tools: [{ googleSearch: {} }],
      },
    });

    // Extracción segura del texto generado
    const text = response.text || "Disculpa, he tenido un pequeño percance técnico. ¿Podrías reformular tu pregunta?";
    
    // Procesamiento de fuentes de información (Grounding)
    const links = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
      title: chunk.web?.title || "Referencia oficial",
      uri: chunk.web?.uri || "#"
    })) || [];

    return { text, links };
  } catch (error) {
    console.error("Error en el servicio de IA:", error);
    return { 
      text: "Hola, parece que hay un problema de conexión con mi motor de IA. Por favor, verifica que la clave API esté activa.", 
      links: [] 
    };
  }
};
