import React from 'react';
import { Question } from '../types/quiz';
import { Flag, ArrowLeft, ArrowRight, CheckCircle2, XCircle, Sparkles, BookOpen } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  selectedOption: number | null;
  onSelectOption: (optionIndex: number) => void;
  isDoubtful: boolean;
  onToggleDoubtful: () => void;
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
  mode: 'exam' | 'practice' | 'review';
  showExplanation: boolean;
  onToggleExplanation: () => void;
  onOpenAiTutor: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOption,
  onSelectOption,
  isDoubtful,
  onToggleDoubtful,
  onPrev,
  onNext,
  isFirst,
  isLast,
  mode,
  showExplanation,
  onToggleExplanation,
  onOpenAiTutor,
}) => {
  const optionLetters = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 lg:p-6 shadow-xs flex flex-col justify-between h-full">
      {/* Question Header */}
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4 gap-3">
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-slate-900 font-mono">
              Soal {question.id}
            </span>
            <span className="text-xs text-slate-400">/ 50</span>
            <span className="text-slate-300">·</span>
            <span className="text-xs font-medium text-indigo-700 bg-indigo-50/80 px-2 py-0.5 rounded">
              {question.skillType}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Ragu-ragu Checkbox */}
            {mode === 'exam' && (
              <button
                type="button"
                onClick={onToggleDoubtful}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${
                  isDoubtful
                    ? 'bg-amber-100 border-amber-300 text-amber-900 font-semibold'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Flag className={`w-3.5 h-3.5 ${isDoubtful ? 'text-amber-700 fill-amber-700' : 'text-slate-400'}`} />
                <span>Ragu-ragu</span>
              </button>
            )}

            {/* AI Tutor Quick Button */}
            <button
              onClick={onOpenAiTutor}
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg transition-colors"
              title="Tanya penjelasan kalimat atau kata sulit ke AI Tutor"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span className="hidden sm:inline">Tanya Tutor AI</span>
            </button>
          </div>
        </div>

        {/* Question Text */}
        <h3 className="text-base font-semibold text-slate-900 leading-snug mb-5">
          {question.questionText}
        </h3>

        {/* Multiple Choice Options (A, B, C, D, E) */}
        <div className="space-y-3">
          {question.options.map((optText, idx) => {
            const letter = optionLetters[idx];
            const isSelected = selectedOption === idx;
            const isCorrect = question.correctAnswer === idx;

            let borderStyle = 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 bg-white';
            let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-200';
            let statusIcon = null;

            if (mode === 'review' || (mode === 'practice' && showExplanation)) {
              if (isCorrect) {
                borderStyle = 'border-emerald-500 bg-emerald-50/60 text-emerald-950 font-medium';
                badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
                statusIcon = <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />;
              } else if (isSelected && !isCorrect) {
                borderStyle = 'border-rose-400 bg-rose-50/60 text-rose-950';
                badgeStyle = 'bg-rose-500 text-white border-rose-500';
                statusIcon = <XCircle className="w-4 h-4 text-rose-500 shrink-0" />;
              } else {
                borderStyle = 'border-slate-200 opacity-60 bg-white';
              }
            } else if (isSelected) {
              borderStyle = 'border-indigo-600 bg-indigo-50/80 text-indigo-950 shadow-xs ring-1 ring-indigo-600';
              badgeStyle = 'bg-indigo-600 text-white border-indigo-600 font-bold';
            }

            return (
              <button
                key={idx}
                type="button"
                onClick={() => onSelectOption(idx)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3.5 ${borderStyle}`}
              >
                <div
                  className={`w-6 h-6 rounded-md border flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 ${badgeStyle}`}
                >
                  {letter}
                </div>
                <div className="flex-1 text-sm leading-relaxed text-slate-800">
                  {optText}
                </div>
                {statusIcon}
              </button>
            );
          })}
        </div>

        {/* Practice Mode Explanation Toggle */}
        {mode === 'practice' && (
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={onToggleExplanation}
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{showExplanation ? 'Sembunyikan Pembahasan' : 'Lihat Kunci & Pembahasan Lengkap'}</span>
            </button>
            {selectedOption !== null && (
              <span className={`text-xs font-medium ${selectedOption === question.correctAnswer ? 'text-emerald-600' : 'text-rose-600'}`}>
                {selectedOption === question.correctAnswer ? 'Jawaban Anda Tepat!' : 'Jawaban Anda Kurang Tepat'}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className={`px-4 py-2 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1.5 ${
            isFirst
              ? 'opacity-40 cursor-not-allowed bg-slate-50 text-slate-400 border-slate-200'
              : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-xs'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Sebelumnya</span>
        </button>

        <span className="text-xs font-mono text-slate-400">
          {question.id} dari 50
        </span>

        <button
          onClick={onNext}
          disabled={isLast}
          className={`px-4 py-2 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1.5 ${
            isLast
              ? 'opacity-40 cursor-not-allowed bg-slate-50 text-slate-400 border-slate-200'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white border-transparent shadow-xs'
          }`}
        >
          <span>Selanjutnya</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
