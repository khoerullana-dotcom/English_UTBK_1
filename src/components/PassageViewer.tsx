import React, { useState } from 'react';
import { Passage } from '../types/quiz';
import { Highlighter, Type, RotateCcw, BookOpen, Layers } from 'lucide-react';

interface PassageViewerProps {
  passage: Passage;
  currentQuestionNumber: number;
  fontSize: 'sm' | 'base' | 'lg';
  setFontSize: (size: 'sm' | 'base' | 'lg') => void;
  onOpenVocabModal?: () => void;
}

export const PassageViewer: React.FC<PassageViewerProps> = ({
  passage,
  currentQuestionNumber,
  fontSize,
  setFontSize,
  onOpenVocabModal,
}) => {
  const [highlightColor, setHighlightColor] = useState<'yellow' | 'emerald' | 'sky' | null>(null);

  const fontSizeClass = {
    sm: 'text-sm leading-relaxed',
    base: 'text-base leading-relaxed',
    lg: 'text-lg leading-loose',
  }[fontSize];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 lg:p-6 shadow-xs flex flex-col h-full">
      {/* Passage Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
            <span className="font-semibold text-indigo-700">Bacaan {passage.number} dari 10</span>
            <span aria-hidden="true">·</span>
            <span>Soal No. {passage.questionRange[0]}–{passage.questionRange[1]}</span>
            <span aria-hidden="true">·</span>
            <span>{passage.wordCount} Kata</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            {passage.title}
          </h2>
          <div className="text-xs text-slate-500 mt-0.5">
            Topik: {passage.topic}
          </div>
        </div>

        {/* Reading Controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Font Size Selector */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setFontSize('sm')}
              className={`px-2 py-1 text-xs rounded transition-colors ${
                fontSize === 'sm' ? 'bg-white font-bold text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Ukuran Teks Kecil"
            >
              A-
            </button>
            <button
              onClick={() => setFontSize('base')}
              className={`px-2 py-1 text-xs rounded transition-colors ${
                fontSize === 'base' ? 'bg-white font-bold text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Ukuran Teks Normal"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('lg')}
              className={`px-2 py-1 text-xs rounded transition-colors ${
                fontSize === 'lg' ? 'bg-white font-bold text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Ukuran Teks Besar"
            >
              A+
            </button>
          </div>

          {/* Quick Vocab Tool */}
          {onOpenVocabModal && (
            <button
              onClick={onOpenVocabModal}
              className="p-1.5 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-200 rounded-lg transition-colors text-xs flex items-center gap-1"
              title="Buka Glosarium Kosakata UTBK"
            >
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span className="hidden sm:inline">Glosarium</span>
            </button>
          )}
        </div>
      </div>

      {/* Passage Content with Paragraph Numbering */}
      <div className="flex-1 overflow-y-auto mt-4 pr-2 space-y-5 text-slate-800">
        {passage.isPaired ? (
          <div className="space-y-6">
            <div className="border border-indigo-100 bg-indigo-50/40 rounded-xl p-4">
              <div className="text-xs font-bold text-indigo-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                {passage.text1Title || 'Text 1'}
              </div>
              <p className={`${fontSizeClass} whitespace-pre-line text-slate-800`}>
                {passage.text1}
              </p>
            </div>

            <div className="border border-emerald-100 bg-emerald-50/40 rounded-xl p-4">
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                {passage.text2Title || 'Text 2'}
              </div>
              <p className={`${fontSizeClass} whitespace-pre-line text-slate-800`}>
                {passage.text2}
              </p>
            </div>
          </div>
        ) : (
          passage.paragraphs.map((pText, idx) => (
            <div key={idx} className="flex items-start gap-3 group">
              <span className="text-xs font-mono font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 px-1.5 py-0.5 rounded shrink-0 select-none">
                [{idx + 1}]
              </span>
              <p className={`${fontSizeClass} flex-1 text-slate-800`}>
                {pText}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Footer Info */}
      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span>Angka di samping <code>[1], [2]</code> menunjukkan nomor paragraf untuk acuan soal.</span>
        </div>
        <span className="font-mono tabular-nums text-slate-400">
          Soal aktif: #{currentQuestionNumber}
        </span>
      </div>
    </div>
  );
};
