import React, { useState } from 'react';
import { Question, Passage } from '../types/quiz';
import { Sparkles, X, Send, Bot, User, Loader2, Lightbulb } from 'lucide-react';

interface AiTutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  question: Question;
  passage: Passage;
  selectedOption: number | null;
}

export const AiTutorModal: React.FC<AiTutorModalProps> = ({
  isOpen,
  onClose,
  question,
  passage,
  selectedOption,
}) => {
  const [promptText, setPromptText] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'tutor'; text: string }>>([
    {
      sender: 'tutor',
      text: `Halo! Saya Guru AI Bahasa Inggris UTBK. Ada yang ingin kamu tanyakan mengenai Soal No. ${question.id} ("${question.skillType}") atau bacaan "${passage.title}"? Kamu bisa klik pertanyaan instan di bawah atau ketik langsung pertanyaanmu.`
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = [
    'Terjemahkan kalimat kunci teks ini ke Bahasa Indonesia',
    'Mengapa opsi jawaban yang saya pilih keliru?',
    'Jelaskan struktur tata bahasa (grammar) kalimat petunjuk',
    'Bagaimana cara cepat menemukan ide pokok teks ini?'
  ];

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg = textToSend.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setPromptText('');
    setIsLoading(true);

    const letters = ['A', 'B', 'C', 'D', 'E'];
    const chosenText = selectedOption !== null ? `Opsi ${letters[selectedOption]}: ${question.options[selectedOption]}` : 'Belum memilih opsi';

    try {
      const response = await fetch('/api/ask-tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionNumber: question.id,
          passageTitle: passage.title,
          userPrompt: userMsg,
          passageSnippet: question.explanation.clueSentence || passage.paragraphs[0],
          questionText: question.questionText,
          selectedOptionText: chosenText,
        }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { sender: 'tutor', text: data.reply || 'Maaf, terjadi kesalahan saat menghubungi tutor.' }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'tutor',
          text: `Pembahasan Soal ${question.id}: Jawaban benar adalah Opsi ${letters[question.correctAnswer]}. Alasan: ${question.explanation.summary}. Kalimat kunci: "${question.explanation.clueSentence}".`
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full max-h-[85vh] flex flex-col shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-purple-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Tutor Interaktif AI UTBK
                </h3>
                <span className="text-[11px] font-mono font-semibold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                  Soal #{question.id}
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Tanyakan kalimat sulit, grammar, kosakata, atau tips eliminasi jawaban
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Stream */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/40">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${
                msg.sender === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-purple-600 text-white shadow-xs'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
              </div>

              <div
                className={`max-w-[85%] p-3.5 rounded-xl text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-tr-xs'
                    : 'bg-white border border-slate-200 text-slate-800 rounded-tl-xs shadow-2xs whitespace-pre-line'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-purple-700 italic bg-purple-50 p-2.5 rounded-lg border border-purple-100 max-w-fit">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Tutor sedang merangkum penjelasan terbaik...</span>
            </div>
          )}
        </div>

        {/* Quick Prompts Bar */}
        <div className="px-4 py-2 border-t border-slate-100 bg-white">
          <div className="text-[11px] font-semibold text-slate-400 mb-1 flex items-center gap-1">
            <Lightbulb className="w-3 h-3 text-amber-500" />
            <span>Saran Pertanyaan Cepat:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {quickPrompts.map((qp, i) => (
              <button
                key={i}
                onClick={() => handleSend(qp)}
                disabled={isLoading}
                className="text-[11px] px-2.5 py-1 bg-slate-100 hover:bg-purple-50 hover:text-purple-700 text-slate-700 rounded-md transition-colors border border-slate-200 text-left"
              >
                {qp}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-3 border-t border-slate-200 bg-white flex items-center gap-2">
          <input
            type="text"
            placeholder="Ketik pertanyaanmu seputar soal atau teks ini..."
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend(promptText)}
            disabled={isLoading}
            className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
          />
          <button
            onClick={() => handleSend(promptText)}
            disabled={!promptText.trim() || isLoading}
            className="p-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-40 text-white rounded-lg transition-colors shrink-0"
            title="Kirim Pertanyaan"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
