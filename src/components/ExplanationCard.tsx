import React from 'react';
import { Question } from '../types/quiz';
import { CheckCircle2, Lightbulb, BookMarked, Sparkles } from 'lucide-react';

interface ExplanationCardProps {
  question: Question;
  userSelectedOption: number | null;
  onOpenAiTutor: () => void;
}

export const ExplanationCard: React.FC<ExplanationCardProps> = ({
  question,
  userSelectedOption,
  onOpenAiTutor,
}) => {
  const letters = ['A', 'B', 'C', 'D', 'E'];
  const correctLetter = letters[question.correctAnswer];
  const userLetter = userSelectedOption !== null ? letters[userSelectedOption] : 'Belum Dijawab';
  const isUserCorrect = userSelectedOption === question.correctAnswer;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 lg:p-6 shadow-xs space-y-5">
      {/* Header Result */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm font-mono">
            {correctLetter}
          </div>
          <div>
            <div className="text-xs text-slate-500 font-medium">Kunci Jawaban Resmi</div>
            <div className="text-sm font-bold text-slate-900">
              Opsi {correctLetter}: {question.options[question.correctAnswer]}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {userSelectedOption !== null && (
            <span
              className={`text-xs px-2.5 py-1 rounded-md font-semibold border ${
                isUserCorrect
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                  : 'bg-rose-50 text-rose-800 border-rose-200'
              }`}
            >
              Pilihan Anda: {userLetter} {isUserCorrect ? '(Tepat)' : '(Keliru)'}
            </span>
          )}
          <button
            onClick={onOpenAiTutor}
            className="text-xs font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 px-2.5 py-1 rounded-md transition-colors flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Tanya AI Soal Ini</span>
          </button>
        </div>
      </div>

      {/* Inti Alasan & Kalimat Petunjuk */}
      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Inti Pembahasan</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          {question.explanation.summary}
        </p>

        {question.explanation.clueSentence && (
          <div className="mt-3 pt-3 border-t border-slate-200/60">
            <div className="text-xs font-semibold text-slate-500 mb-1">
              Kalimat Kunci dalam Teks Bacaan:
            </div>
            <p className="text-xs font-mono bg-white p-2.5 rounded border border-slate-200 text-slate-800 italic">
              "{question.explanation.clueSentence}"
            </p>
          </div>
        )}
      </div>

      {/* Analisis Tiap Opsi (A, B, C, D, E) */}
      <div className="space-y-3">
        <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Bedah Opsi Jawaban (Analisis Pengecoh)
        </div>
        <div className="space-y-2">
          {letters.map((ltr, idx) => {
            const isCorrect = idx === question.correctAnswer;
            const explanation = question.explanation.optionAnalysis[ltr];
            if (!explanation) return null;

            return (
              <div
                key={ltr}
                className={`p-3 rounded-lg border text-xs leading-relaxed ${
                  isCorrect
                    ? 'bg-emerald-50/70 border-emerald-200 text-slate-900'
                    : 'bg-white border-slate-100 text-slate-600'
                }`}
              >
                <div className="flex items-start gap-2">
                  <span
                    className={`font-mono font-bold px-1.5 py-0.5 rounded text-[11px] shrink-0 ${
                      isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    Opsi {ltr}
                  </span>
                  <div>
                    <span className="font-semibold text-slate-800">{isCorrect ? 'Jawaban Benar: ' : ''}</span>
                    {explanation}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tips & Trik UTBK SNBT */}
      <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
        <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <div className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">
            Tips & Trik Menjawab Soal UTBK Ini
          </div>
          <p className="text-xs text-amber-950 leading-relaxed">
            {question.explanation.strategyTip}
          </p>
        </div>
      </div>

      {/* Kosakata Kunci */}
      {question.explanation.keyVocab && question.explanation.keyVocab.length > 0 && (
        <div className="pt-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
            <BookMarked className="w-4 h-4 text-indigo-600" />
            <span>Kosakata Kunci (Academic Vocabulary)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {question.explanation.keyVocab.map((v, i) => (
              <div key={i} className="p-2.5 rounded-lg border border-slate-100 bg-slate-50 text-xs">
                <span className="font-semibold text-indigo-900">{v.word}</span>:
                <span className="text-slate-600 ml-1">{v.meaning}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
