import React, { useState } from 'react';
import { Flag, CheckCircle2, Circle, AlertCircle } from 'lucide-react';

interface QuestionNavGridProps {
  totalQuestions: number;
  currentQuestionId: number;
  onSelectQuestion: (id: number) => void;
  answers: Record<number, number | null>;
  doubtful: Record<number, boolean>;
}

type FilterType = 'all' | 'answered' | 'doubtful' | 'unanswered';

export const QuestionNavGrid: React.FC<QuestionNavGridProps> = ({
  totalQuestions,
  currentQuestionId,
  onSelectQuestion,
  answers,
  doubtful,
}) => {
  const [filter, setFilter] = useState<FilterType>('all');

  const questionList = Array.from({ length: totalQuestions }, (_, i) => i + 1);

  const answeredCount = Object.values(answers).filter((a) => a !== null && a !== undefined).length;
  const doubtfulCount = Object.values(doubtful).filter(Boolean).length;
  const unansweredCount = totalQuestions - answeredCount;

  const filteredQuestions = questionList.filter((id) => {
    const isAnswered = answers[id] !== null && answers[id] !== undefined;
    const isDoubt = !!doubtful[id];

    if (filter === 'answered') return isAnswered;
    if (filter === 'doubtful') return isDoubt;
    if (filter === 'unanswered') return !isAnswered;
    return true;
  });

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-900">
          Daftar Soal 1–{totalQuestions}
        </h3>
        <span className="text-xs font-mono tabular-nums text-slate-500">
          {answeredCount}/{totalQuestions} Terjawab
        </span>
      </div>

      {/* Filter Segmented Control */}
      <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg my-3">
        <button
          onClick={() => setFilter('all')}
          className={`flex-1 py-1 text-[11px] font-medium rounded-md transition-colors text-center ${
            filter === 'all'
              ? 'bg-white text-slate-900 shadow-xs font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Semua ({totalQuestions})
        </button>
        <button
          onClick={() => setFilter('answered')}
          className={`flex-1 py-1 text-[11px] font-medium rounded-md transition-colors text-center ${
            filter === 'answered'
              ? 'bg-white text-indigo-700 shadow-xs font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Terjawab ({answeredCount})
        </button>
        <button
          onClick={() => setFilter('doubtful')}
          className={`flex-1 py-1 text-[11px] font-medium rounded-md transition-colors text-center ${
            filter === 'doubtful'
              ? 'bg-white text-amber-700 shadow-xs font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Ragu ({doubtfulCount})
        </button>
        <button
          onClick={() => setFilter('unanswered')}
          className={`flex-1 py-1 text-[11px] font-medium rounded-md transition-colors text-center ${
            filter === 'unanswered'
              ? 'bg-white text-slate-800 shadow-xs font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Kosong ({unansweredCount})
        </button>
      </div>

      {/* Number Grid */}
      <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-2 max-h-[340px] overflow-y-auto pr-1">
        {filteredQuestions.map((num) => {
          const isCurrent = num === currentQuestionId;
          const isAnswered = answers[num] !== null && answers[num] !== undefined;
          const isDoubt = !!doubtful[num];

          let btnClass = 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50';

          if (isDoubt) {
            btnClass = 'bg-amber-400 text-slate-900 border-amber-500 font-bold';
          } else if (isAnswered) {
            btnClass = 'bg-indigo-600 text-white border-indigo-700 font-semibold';
          }

          if (isCurrent) {
            btnClass += ' ring-2 ring-offset-2 ring-indigo-500';
          }

          return (
            <button
              key={num}
              onClick={() => onSelectQuestion(num)}
              className={`h-9 rounded-lg border text-xs flex items-center justify-center relative font-mono transition-all ${btnClass}`}
              title={`Soal No ${num}${isDoubt ? ' (Ragu-ragu)' : isAnswered ? ' (Sudah Dijawab)' : ' (Belum Dijawab)'}`}
            >
              <span>{num}</span>
              {isDoubt && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-600 rounded-full border border-white" />
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-indigo-600"></div>
          <span>Terjawab</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-amber-400"></div>
          <span>Ragu-ragu</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-white border border-slate-300"></div>
          <span>Belum</span>
        </div>
      </div>
    </div>
  );
};
