import React, { useState } from 'react';
import { Question, SkillType } from '../types/quiz';
import { Award, CheckCircle2, XCircle, AlertCircle, RotateCcw, Printer, ArrowRight, BookOpen, Sparkles, Filter } from 'lucide-react';

interface ScoreResultViewProps {
  questions: Question[];
  answers: Record<number, number | null>;
  doubtful: Record<number, boolean>;
  onSelectQuestion: (questionId: number) => void;
  onResetExam: () => void;
  onGoToPractice: () => void;
  heroImageSrc?: string;
}

export const ScoreResultView: React.FC<ScoreResultViewProps> = ({
  questions,
  answers,
  doubtful,
  onSelectQuestion,
  onResetExam,
  onGoToPractice,
  heroImageSrc,
}) => {
  const [filter, setFilter] = useState<'all' | 'incorrect' | 'correct' | 'unanswered'>('all');

  const total = questions.length; // 50
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  // Track skills
  const skillStats: Record<string, { total: number; correct: number }> = {};

  questions.forEach((q) => {
    const userAns = answers[q.id];
    if (!skillStats[q.skillType]) {
      skillStats[q.skillType] = { total: 0, correct: 0 };
    }
    skillStats[q.skillType].total += 1;

    if (userAns === null || userAns === undefined) {
      unansweredCount += 1;
    } else if (userAns === q.correctAnswer) {
      correctCount += 1;
      skillStats[q.skillType].correct += 1;
    } else {
      incorrectCount += 1;
    }
  });

  // Calculate UTBK estimated scaled score: Range 200 - 800
  // Formula: 200 + (correctCount / 50) * 600
  const scaledScore = Math.round(200 + (correctCount / total) * 600);
  const accuracyPercentage = Math.round((correctCount / total) * 100);

  // Target PTN Prediction tier
  let tierTitle = 'Tingkat Pemula';
  let tierDesc = 'Perbanyak membaca teks bahasa Inggris dan perkaya kosakata akademis untuk mendongkrak skor ke atas 600.';
  let tierColor = 'text-amber-700 bg-amber-50 border-amber-200';

  if (scaledScore >= 720) {
    tierTitle = 'Sangat Kompetitif (Peluang Lolos Sangat Tinggi)';
    tierDesc = 'Skor Anda berada di persentil puncak nasional (>95%), sangat berpeluang masuk jurusan top seperti Kedokteran UI, STEI ITB, atau FEB UGM.';
    tierColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
  } else if (scaledScore >= 620) {
    tierTitle = 'Kompetitif (Peluang Lolos Tinggi)';
    tierDesc = 'Skor yang solid untuk menembus program studi rumpun Saintek & Soshum favorit di berbagai PTN Klaster 1 nasional.';
    tierColor = 'text-indigo-700 bg-indigo-50 border-indigo-200';
  } else if (scaledScore >= 500) {
    tierTitle = 'Menengah (Perlu Pemantapan Trik)';
    tierDesc = 'Potensi Anda bagus. Fokus pada eliminasi opsi pengecoh dan pertanyaan inferensi untuk mendongkrak skor ke 650+.';
    tierColor = 'text-blue-700 bg-blue-50 border-blue-200';
  }

  // Filter questions for detailed list
  const filteredQuestions = questions.filter((q) => {
    const userAns = answers[q.id];
    const isCorrect = userAns === q.correctAnswer;
    const isUnanswered = userAns === null || userAns === undefined;

    if (filter === 'correct') return isCorrect;
    if (filter === 'incorrect') return !isCorrect && !isUnanswered;
    if (filter === 'unanswered') return isUnanswered;
    return true;
  });

  const letters = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Top Banner / Summary Card */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="p-6 lg:p-8 lg:col-span-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <span>Evaluasi Hasil Simulasi</span>
                <span aria-hidden="true">·</span>
                <span>Standar UTBK SNBT Kemendikbud</span>
                <span aria-hidden="true">·</span>
                <span>50 Soal Literasi Bahasa Inggris</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                Hasil & Pembahasan Lengkap UTBK
              </h1>
              <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                Simulasi ini menguji kemampuan analisis teks akademis (Reading Comprehension) tingkat SMA kelas 12. Di bawah ini adalah rincian estimasi skor, akurasi per sub-materi, dan pembahasan tiap nomor.
              </p>
            </div>

            {/* Score Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-xs text-slate-500 font-medium">Estimasi Skor UTBK</div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-indigo-700 tabular-nums">
                  {scaledScore}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Skala 200–800</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-xs text-slate-500 font-medium">Jawaban Benar</div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-600 tabular-nums">
                  {correctCount}
                  <span className="text-xs font-normal text-slate-400 ml-1">/ {total}</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Akurasi {accuracyPercentage}%</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-xs text-slate-500 font-medium">Jawaban Salah</div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-rose-600 tabular-nums">
                  {incorrectCount}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Perlu dievaluasi</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-xs text-slate-500 font-medium">Kosong / Lewat</div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-600 tabular-nums">
                  {unansweredCount}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Belum sempat diisi</div>
              </div>
            </div>

            {/* Prediction Banner */}
            <div className={`p-4 rounded-xl border ${tierColor} mb-2`}>
              <div className="text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>{tierTitle}</span>
              </div>
              <p className="text-xs leading-relaxed">
                {tierDesc}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                <span>Cetak / Simpan PDF</span>
              </button>

              <button
                onClick={onGoToPractice}
                className="px-4 py-2 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span>Pelajari Mode Latihan</span>
              </button>

              <button
                onClick={onResetExam}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5 ml-auto"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Ulangi Simulasi</span>
              </button>
            </div>
          </div>

          {/* Right Hero Visual */}
          <div className="lg:col-span-4 bg-slate-100 relative min-h-[220px] lg:min-h-full">
            {heroImageSrc ? (
              <img
                src={heroImageSrc}
                alt="Siswa belajar persiapan UTBK"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-6 text-slate-400 text-xs">
                UTBK SNBT 2026 Preparation
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
              <div className="text-xs font-semibold text-indigo-200">Tips Ujian UTBK</div>
              <p className="text-xs opacity-90 mt-1">
                Kunci sukses Literasi Bahasa Inggris adalah membiasakan membaca cepat (skimming) untuk mencari ide pokok dan scanning untuk kata kunci spesifik.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Breakdown by Skill Category */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
        <h2 className="text-base font-bold text-slate-900 mb-1">
          Analisis Penguasaan Sub-Materi (Skill Breakdown)
        </h2>
        <p className="text-xs text-slate-500 mb-5">
          Gunakan rincian ini untuk mengetahui materi yang sudah Anda kuasai dan materi yang memerlukan latihan ekstra.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skillStats).map(([skill, stat]) => {
            const pct = Math.round((stat.correct / stat.total) * 100);
            return (
              <div key={skill} className="p-4 rounded-xl border border-slate-100 bg-slate-50/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-800">{skill}</span>
                    <span className="font-mono font-bold text-slate-700 tabular-nums">{pct}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        pct >= 75 ? 'bg-emerald-500' : pct >= 50 ? 'bg-indigo-500' : 'bg-amber-500'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
                <div className="mt-3 text-[11px] text-slate-500 flex justify-between">
                  <span>{stat.correct} benar dari {stat.total} soal</span>
                  <span>{pct >= 75 ? 'Tuntas' : pct >= 50 ? 'Cukup' : 'Perlu Belajar'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Question-by-Question Review List */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-4 mb-4">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Daftar Soal & Kunci Jawaban Lengkap (1–50)
            </h2>
            <div className="text-xs text-slate-500 mt-0.5">
              Klik nomor soal untuk membuka bacaan, opsi, dan pembahasan lengkapnya.
            </div>
          </div>

          {/* Filter segment */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                filter === 'all' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua ({total})
            </button>
            <button
              onClick={() => setFilter('correct')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                filter === 'correct' ? 'bg-white text-emerald-700 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Benar ({correctCount})
            </button>
            <button
              onClick={() => setFilter('incorrect')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                filter === 'incorrect' ? 'bg-white text-rose-700 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Salah ({incorrectCount})
            </button>
            <button
              onClick={() => setFilter('unanswered')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                filter === 'unanswered' ? 'bg-white text-slate-800 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Kosong ({unansweredCount})
            </button>
          </div>
        </div>

        {/* Questions Table / List */}
        <div className="divide-y divide-slate-100">
          {filteredQuestions.map((q) => {
            const userAns = answers[q.id];
            const isCorrect = userAns === q.correctAnswer;
            const isUnanswered = userAns === null || userAns === undefined;
            const isDoubt = !!doubtful[q.id];

            return (
              <div
                key={q.id}
                className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/80 px-2 rounded-lg transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 ${
                      isCorrect
                        ? 'bg-emerald-100 text-emerald-800'
                        : isUnanswered
                        ? 'bg-slate-100 text-slate-600'
                        : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {q.id}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-slate-900">
                        Soal No. {q.id}
                      </span>
                      <span className="text-[11px] text-slate-400">·</span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {q.skillType}
                      </span>
                      {isDoubt && (
                        <span className="text-[10px] text-amber-800 bg-amber-100 px-1.5 py-0.2 rounded font-semibold">
                          Ragu
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-700 line-clamp-1 max-w-2xl">
                      {q.questionText}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-0 border-slate-100">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-400 text-[11px]">Anda:</span>
                    <span
                      className={`font-mono font-bold px-1.5 py-0.5 rounded text-[11px] ${
                        isCorrect
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : isUnanswered
                          ? 'bg-slate-100 text-slate-500'
                          : 'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}
                    >
                      {userAns !== null && userAns !== undefined ? letters[userAns] : '-'}
                    </span>

                    <span className="text-slate-400 text-[11px]">Kunci:</span>
                    <span className="font-mono font-bold px-1.5 py-0.5 rounded text-[11px] bg-slate-900 text-white">
                      {letters[q.correctAnswer]}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectQuestion(q.id)}
                    className="px-3 py-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-md transition-colors flex items-center gap-1"
                  >
                    <span>Buka Soal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
