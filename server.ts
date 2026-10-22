import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// API route for AI English Tutor
app.post('/api/ask-tutor', async (req: Request, res: Response) => {
  try {
    const { questionNumber, passageTitle, userPrompt, passageSnippet, questionText, selectedOptionText } = req.body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(200).json({
        reply: "Fitur Tanya Guru AI memerlukan API key. Namun Anda dapat membaca pembahasan lengkap, kunci jawaban, dan tips UTBK yang telah tersedia langsung di bawah soal!",
        fallback: true
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `Anda adalah seorang Guru Ahli Bahasa Inggris UTBK SNBT / TPS BPPP Indonesia yang ramah, jelas, dan edukatif untuk siswa kelas 12 SMA.
Tugas Anda adalah membantu siswa memahami teks bacaan bahasa Inggris, arti kalimat yang rumit, struktur tata bahasa (grammar), kosakata akademis, atau alasan mengapa opsi tertentu benar/salah.
Gunakan Bahasa Indonesia yang mudah dipahami anak SMA, berikan analogi atau terjemahan harfiah per frasa jika diminta, serta tips pengerjaan cepat UTBK.`;

    const prompt = `Soal Nomor: ${questionNumber || 'N/A'}
Teks Terkait: ${passageTitle || 'Reading Passage'}
Pertanyaan Soal: ${questionText || 'N/A'}
Opsi yang dipilih/dibahas: ${selectedOptionText || 'N/A'}
Kutipan Teks: "${passageSnippet || ''}"

Pertanyaan/Kebingungan Siswa:
"${userPrompt}"

Berikan bimbingan penjelasan yang ringkas, jelas, dan memotivasi!`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.4,
      }
    });

    const reply = response.text || "Tidak dapat memuat penjelasan. Silakan pelajari pembahasan di kartu soal.";
    return res.json({ reply });
  } catch (error: any) {
    console.error("AI Tutor error:", error);
    // Intelligent educational fallback answering student's question based on context
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const { questionNumber, passageSnippet, userPrompt } = req.body;
    
    let fallbackExplanation = `[Bimbingan Guru UTBK]
Mengenai pertanyaan Anda: "${userPrompt || 'Penjelasan Soal'}"
- Konsep Kunci: Pada soal UTBK Literasi Bahasa Inggris nomor ${questionNumber || 'ini'}, fokus utama adalah menemukan bukti tekstual (textual evidence) di dalam bacaan.
- Cuplikan Teks Kunci: "${passageSnippet || 'Perhatikan kalimat utama pada awal atau akhir paragraf.'}"
- Tips Strategi: Eliminasi opsi yang menggunakan kata-kata absolut seperti 'always', 'never', 'completely' jika teks asli menggunakan kata bernada lunak (hedging) seperti 'may', 'conceivably', 'suggests'.

Silakan baca juga analisis lengkap tiap opsi A-E dan tips trik di kartu pembahasan di bawah soal!`;

    return res.status(200).json({
      reply: fallbackExplanation,
      isFallback: true
    });
  }
});

async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`UTBK English Quiz server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
