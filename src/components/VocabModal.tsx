import React, { useState } from 'react';
import { UTBK_VOCABULARY } from '../data/vocabulary';
import { VocabItem } from '../types/quiz';
import { Search, X, BookOpen, Volume2, Check } from 'lucide-react';

interface VocabModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VocabModal: React.FC<VocabModalProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');
  const [selectedWord, setSelectedWord] = useState<VocabItem | null>(null);
  const [copiedWord, setCopiedWord] = useState<string | null>(null);

  if (!isOpen) return null;

  const filtered = UTBK_VOCABULARY.filter(
    (item) =>
      item.word.toLowerCase().includes(search.toLowerCase()) ||
      item.meaningId.toLowerCase().includes(search.toLowerCase()) ||
      item.synonyms?.some((s) => s.toLowerCase().includes(search.toLowerCase()))
  );

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedWord(text);
    setTimeout(() => setCopiedWord(null), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full max-h-[85vh] flex flex-col shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Glosarium Kosakata Akademis UTBK
              </h3>
              <p className="text-xs text-slate-500">
                Kamus kosakata penting yang kerap muncul dalam teks Literasi Bahasa Inggris
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

        {/* Search Input */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/50">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari kata bahasa Inggris, arti, atau sinonim..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* List of Words */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 divide-y divide-slate-100">
          {filtered.length === 0 ? (
            <div className="text-center py-10 text-xs text-slate-500">
              Tidak ada kosakata yang cocok dengan "{search}".
            </div>
          ) : (
            filtered.map((item) => (
              <div key={item.word} className="pt-3 first:pt-0">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-indigo-950 font-mono">
                      {item.word}
                    </span>
                    <span className="text-[11px] text-slate-500 italic bg-slate-100 px-1.5 py-0.5 rounded">
                      {item.partOfSpeech}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleSpeak(item.word)}
                      className="p-1 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors"
                      title="Dengarkan Pengucapan (Audio Pronunciation)"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleCopy(item.word)}
                      className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded transition-colors"
                      title="Salin Kata"
                    >
                      {copiedWord === item.word ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <span className="text-[10px] text-slate-400 font-mono">salin</span>
                      )}
                    </button>
                  </div>
                </div>

                <p className="text-xs text-slate-800 leading-relaxed mb-1.5">
                  <span className="font-semibold text-slate-600">Arti (ID): </span>
                  {item.meaningId}
                </p>

                <div className="text-xs text-slate-600 italic bg-slate-50 p-2 rounded border border-slate-100 mb-1.5">
                  "{item.exampleEn}"
                </div>

                {item.synonyms && item.synonyms.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1 text-[11px] text-slate-500">
                    <span className="font-medium text-slate-400">Sinonim UTBK:</span>
                    {item.synonyms.map((s, idx) => (
                      <span key={idx} className="bg-indigo-50 text-indigo-700 px-1.5 py-0.2 rounded font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs text-slate-500">
          <span>Total {filtered.length} kosakata akademis</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-xs transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
