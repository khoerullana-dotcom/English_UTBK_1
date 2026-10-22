import React, { useState, useEffect } from 'react';
import { PASSAGES } from './data/passages';
import { QUESTIONS } from './data/questions';
import { Header } from './components/Header';
import { ExamTimer } from './components/ExamTimer';
import { QuestionNavGrid } from './components/QuestionNavGrid';
import { PassageViewer } from './components/PassageViewer';
import { QuestionCard } from './components/QuestionCard';
import { ExplanationCard } from './components/ExplanationCard';
import { ScoreResultView } from './components/ScoreResultView';
import { VocabModal } from './components/VocabModal';
import { AiTutorModal } from './components/AiTutorModal';
import { UTBK_VOCABULARY } from './data/vocabulary';
import bannerImg from './assets/images/utbk_study_banner_1792650872956.jpg';
import { AlertTriangle, CheckCircle, Flag, BookOpen, Layers, Clock, Award } from 'lucide-react';

const STORAGE_KEY = 'utbk_english_exam_state_v1';
const DEFAULT_TIME_SECONDS = 75 * 60; // 75 minutes for 50 questions

export default function App() {
  const [activeTab, setActiveTab] = useState<'exam' | 'practice' | 'vocab' | 'results'>('exam');
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [doubtful, setDoubtful] = useState<Record<number, boolean>>({});
  const [timeRemaining, setTimeRemaining] = useState<number>(DEFAULT_TIME_SECONDS);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isExamCompleted, setIsExamCompleted] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [showPracticeExplanation, setShowPracticeExplanation] = useState<boolean>(false);
  const [isVocabModalOpen, setIsVocabModalOpen] = useState<boolean>(false);
  const [isAiTutorModalOpen, setIsAiTutorModalOpen] = useState<boolean>(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);

  // Restore saved state from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.answers) setAnswers(parsed.answers);
        if (parsed.doubtful) setDoubtful(parsed.doubtful);
        if (typeof parsed.timeRemaining === 'number') setTimeRemaining(parsed.timeRemaining);
        if (typeof parsed.isExamCompleted === 'boolean') setIsExamCompleted(parsed.isExamCompleted);
        if (parsed.currentQuestionId) setCurrentQuestionId(parsed.currentQuestionId);
      }
    } catch (e) {
      console.error('Failed to load saved state', e);
    }
  }, []);

  // Save state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          answers,
          doubtful,
          timeRemaining,
          isExamCompleted,
          currentQuestionId,
        })
      );
    } catch (e) {
      console.error('Failed to save state', e);
    }
  }, [answers, doubtful, timeRemaining, isExamCompleted, currentQuestionId]);

  // Timer countdown
  useEffect(() => {
    if (isExamCompleted || isPaused || activeTab !== 'exam') return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsExamCompleted(true);
          setActiveTab('results');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isExamCompleted, isPaused, activeTab]);

  const currentQuestion = QUESTIONS.find((q) => q.id === currentQuestionId) || QUESTIONS[0];
  const currentPassage = PASSAGES.find((p) => p.id === currentQuestion.passageId) || PASSAGES[0];

  const handleSelectOption = (optIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionId]: optIndex,
    }));
  };

  const handleToggleDoubtful = () => {
    setDoubtful((prev) => ({
      ...prev,
      [currentQuestionId]: !prev[currentQuestionId],
    }));
  };

  const handlePrevQuestion = () => {
    if (currentQuestionId > 1) {
      setCurrentQuestionId((prev) => prev - 1);
      setShowPracticeExplanation(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionId < QUESTIONS.length) {
      setCurrentQuestionId((prev) => prev + 1);
      setShowPracticeExplanation(false);
    }
  };

  const handleFinishExamPrompt = () => {
    setIsConfirmModalOpen(true);
  };

  const confirmFinishExam = () => {
    setIsConfirmModalOpen(false);
    setIsExamCompleted(true);
    setActiveTab('results');
  };

  const handleResetExam = () => {
    if (window.confirm('Apakah Anda yakin ingin mengulang simulasi? Semua jawaban akan direset.')) {
      setAnswers({});
      setDoubtful({});
      setTimeRemaining(DEFAULT_TIME_SECONDS);
      setIsPaused(false);
      setIsExamCompleted(false);
      setCurrentQuestionId(1);
      setActiveTab('exam');
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const answeredCount = Object.values(answers).filter((a) => a !== null && a !== undefined).length;
  const doubtfulCount = Object.values(doubtful).filter(Boolean).length;
  const unansweredCount = QUESTIONS.length - answeredCount;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Top Bar Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        answeredCount={answeredCount}
        totalQuestions={QUESTIONS.length}
        onFinishExam={handleFinishExamPrompt}
        isExamCompleted={isExamCompleted}
        onResetExam={handleResetExam}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {activeTab === 'results' ? (
          <ScoreResultView
            questions={QUESTIONS}
            answers={answers}
            doubtful={doubtful}
            onSelectQuestion={(id) => {
              setCurrentQuestionId(id);
              setActiveTab('exam');
            }}
            onResetExam={handleResetExam}
            onGoToPractice={() => {
              setActiveTab('practice');
            }}
            heroImageSrc={bannerImg}
          />
        ) : activeTab === 'vocab' ? (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <span>Perbendaharaan Kata UTBK</span>
                <span aria-hidden="true">·</span>
                <span>Kosakata Akademis & Konseptual</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-900 mb-2">
                Bank Kosakata Literasi Bahasa Inggris
              </h1>
              <p className="text-sm text-slate-600 max-w-2xl">
                Kosakata tingkat lanjut (CEFR B2-C1) yang paling sering muncul dalam soal bacaan sains, sosiologi, teknologi, dan ekonomi UTBK SNBT.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {UTBK_VOCABULARY.map((v) => (
                <div key={v.word} className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-bold text-indigo-900 font-mono">
                      {v.word}
                    </span>
                    <span className="text-xs text-slate-500 italic bg-slate-100 px-2 py-0.5 rounded">
                      {v.partOfSpeech}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 mb-2">
                    <span className="font-semibold text-slate-600">Makna: </span>
                    {v.meaningId}
                  </p>
                  <div className="text-xs text-slate-600 italic bg-slate-50 p-2.5 rounded border border-slate-100 mb-2">
                    "{v.exampleEn}"
                  </div>
                  {v.synonyms && (
                    <div className="text-xs text-slate-500 flex flex-wrap items-center gap-1">
                      <span className="font-medium text-slate-400">Sinonim:</span>
                      {v.synonyms.map((s, idx) => (
                        <span key={idx} className="bg-indigo-50 text-indigo-700 px-1.5 py-0.2 rounded font-mono text-[11px]">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Exam & Practice Split Layout */
          <div className="space-y-4">
            {/* Top Workspace Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white px-4 py-3 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {activeTab === 'exam' ? 'Simulasi Ujian (Timer Aktif)' : 'Mode Belajar Santai (Bisa Cek Kunci)'}
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs text-slate-600">
                  Bacaan ke-{currentPassage.number} dari 10
                </span>
              </div>

              <div className="flex items-center gap-4">
                {activeTab === 'exam' && (
                  <ExamTimer
                    timeRemainingSeconds={timeRemaining}
                    isPaused={isPaused}
                    onTogglePause={() => setIsPaused(!isPaused)}
                  />
                )}
              </div>
            </div>

            {/* Split Screen 2-Zone Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              {/* Left Zone: Passage (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col h-[650px] lg:h-[720px]">
                <PassageViewer
                  passage={currentPassage}
                  currentQuestionNumber={currentQuestion.id}
                  fontSize={fontSize}
                  setFontSize={setFontSize}
                  onOpenVocabModal={() => setIsVocabModalOpen(true)}
                />
              </div>

              {/* Right Zone: Question & Navigation Grid (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                {/* Question Card */}
                <div className="flex-1 min-h-[440px]">
                  <QuestionCard
                    question={currentQuestion}
                    selectedOption={answers[currentQuestion.id] ?? null}
                    onSelectOption={handleSelectOption}
                    isDoubtful={!!doubtful[currentQuestion.id]}
                    onToggleDoubtful={handleToggleDoubtful}
                    onPrev={handlePrevQuestion}
                    onNext={handleNextQuestion}
                    isFirst={currentQuestionId === 1}
                    isLast={currentQuestionId === QUESTIONS.length}
                    mode={activeTab === 'practice' ? 'practice' : isExamCompleted ? 'review' : 'exam'}
                    showExplanation={showPracticeExplanation}
                    onToggleExplanation={() => setShowPracticeExplanation(!showPracticeExplanation)}
                    onOpenAiTutor={() => setIsAiTutorModalOpen(true)}
                  />
                </div>

                {/* Explanation Card (If practice mode and revealed, or if exam finished) */}
                {(showPracticeExplanation || isExamCompleted) && (
                  <div className="mt-2">
                    <ExplanationCard
                      question={currentQuestion}
                      userSelectedOption={answers[currentQuestion.id] ?? null}
                      onOpenAiTutor={() => setIsAiTutorModalOpen(true)}
                    />
                  </div>
                )}

                {/* Navigation Grid (1 - 50) */}
                <QuestionNavGrid
                  totalQuestions={QUESTIONS.length}
                  currentQuestionId={currentQuestionId}
                  onSelectQuestion={(id) => {
                    setCurrentQuestionId(id);
                    setShowPracticeExplanation(false);
                  }}
                  answers={answers}
                  doubtful={doubtful}
                />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Confirmation Modal to Finish Exam */}
      {isConfirmModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-md w-full p-6 shadow-xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200 shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Kumpulkan Lembar Jawaban?
                </h3>
                <p className="text-xs text-slate-500">
                  Periksa kelengkapan jawaban sebelum mengakhiri simulasi
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-2 mb-5 text-xs text-slate-700">
              <div className="flex justify-between">
                <span>Soal Terjawab:</span>
                <span className="font-mono font-bold text-indigo-700 tabular-nums">
                  {answeredCount} / {QUESTIONS.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Ditandai Ragu-ragu:</span>
                <span className="font-mono font-bold text-amber-700 tabular-nums">
                  {doubtfulCount}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Belum Dijawab (Kosong):</span>
                <span className="font-mono font-bold text-rose-700 tabular-nums">
                  {unansweredCount}
                </span>
              </div>
            </div>

            {unansweredCount > 0 && (
              <p className="text-xs text-amber-800 bg-amber-50 p-2.5 rounded-lg border border-amber-200 mb-5">
                Perhatian: Anda masih memiliki {unansweredCount} soal yang belum dijawab. Di sistem UTBK SNBT tidak ada pengurangan nilai untuk jawaban salah.
              </p>
            )}

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setIsConfirmModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
              >
                Kembali Kerjakan
              </button>
              <button
                onClick={confirmFinishExam}
                className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors"
              >
                Ya, Kumpulkan Sekarang
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Vocab Modal */}
      <VocabModal
        isOpen={isVocabModalOpen}
        onClose={() => setIsVocabModalOpen(false)}
      />

      {/* AI Tutor Modal */}
      <AiTutorModal
        isOpen={isAiTutorModalOpen}
        onClose={() => setIsAiTutorModalOpen(false)}
        question={currentQuestion}
        passage={currentPassage}
        selectedOption={answers[currentQuestion.id] ?? null}
      />
    </div>
  );
}
