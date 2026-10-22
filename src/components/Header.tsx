import React from 'react';
import { BookOpen, GraduationCap, Clock, Award, HelpCircle, RotateCcw } from 'lucide-react';

interface HeaderProps {
  activeTab: 'exam' | 'practice' | 'vocab' | 'results';
  setActiveTab: (tab: 'exam' | 'practice' | 'vocab' | 'results') => void;
  answeredCount: number;
  totalQuestions: number;
  onFinishExam: () => void;
  isExamCompleted: boolean;
  onResetExam: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  answeredCount,
  totalQuestions,
  onFinishExam,
  isExamCompleted,
  onResetExam,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900 tracking-tight whitespace-nowrap">
                UTBK SNBT English 1-50
              </span>
              <span className="text-[11px] text-slate-500 whitespace-nowrap hidden sm:inline">
                Literasi Bahasa Inggris · Kelas 12 SMA
              </span>
            </div>
          </div>

          {/* Zone 2: Clean single-line nav links */}
          <nav className="flex items-center gap-1 sm:gap-4 text-xs sm:text-sm font-medium text-slate-600">
            <button
              onClick={() => setActiveTab('exam')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeTab === 'exam'
                  ? 'bg-indigo-50 text-indigo-700 font-semibold'
                  : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Clock className="w-4 h-4 hidden sm:inline" />
              <span>Mode Ujian</span>
            </button>

            <button
              onClick={() => setActiveTab('practice')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeTab === 'practice'
                  ? 'bg-indigo-50 text-indigo-700 font-semibold'
                  : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4 hidden sm:inline" />
              <span>Mode Latihan</span>
            </button>

            <button
              onClick={() => setActiveTab('vocab')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeTab === 'vocab'
                  ? 'bg-indigo-50 text-indigo-700 font-semibold'
                  : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <HelpCircle className="w-4 h-4 hidden sm:inline" />
              <span>Kamus UTBK</span>
            </button>

            <button
              onClick={() => setActiveTab('results')}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeTab === 'results'
                  ? 'bg-indigo-50 text-indigo-700 font-semibold'
                  : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Award className="w-4 h-4 hidden sm:inline" />
              <span>Skor & Evaluasi</span>
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-2 shrink-0">
            {isExamCompleted ? (
              <button
                onClick={onResetExam}
                className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
                title="Mulai Ulang Ujian"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Ulangi Kuis</span>
              </button>
            ) : (
              <button
                onClick={onFinishExam}
                className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
              >
                Kumpulkan ({answeredCount}/{totalQuestions})
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
