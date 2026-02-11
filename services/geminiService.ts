
import { GoogleGenAI } from "@google/genai";

export const getTravelAdvice = async (userPrompt: string, history: { role: 'user' | 'assistant', content: string }[]) => {
  // Inicialización limpia según lineamientos oficiales
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
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
        Utiliza Google Search para dar información actualizada sobre precios estimados y eventos específicos de 2026.`,
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "Lo siento, tuve un problema procesando tu consulta. ¿Podrías intentar de nuevo?";
    const links = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
      title: chunk.web?.title || "Referencia",
      uri: chunk.web?.uri || "#"
    })) || [];

    return { text, links };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { text: "Hubo un error al conectar con el asistente. Por favor, verifica tu conexión.", links: [] };
  }
};