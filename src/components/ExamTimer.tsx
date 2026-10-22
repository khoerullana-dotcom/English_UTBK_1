import React from 'react';
import { Clock, Pause, Play, AlertCircle } from 'lucide-react';

interface ExamTimerProps {
  timeRemainingSeconds: number;
  isPaused: boolean;
  onTogglePause: () => void;
  totalSeconds?: number;
}

export const ExamTimer: React.FC<ExamTimerProps> = ({
  timeRemainingSeconds,
  isPaused,
  onTogglePause,
}) => {
  const hours = Math.floor(timeRemainingSeconds / 3600);
  const minutes = Math.floor((timeRemainingSeconds % 3600) / 60);
  const seconds = timeRemainingSeconds % 60;

  const isLowTime = timeRemainingSeconds > 0 && timeRemainingSeconds <= 600; // < 10 mins
  const isCriticalTime = timeRemainingSeconds > 0 && timeRemainingSeconds <= 300; // < 5 mins

  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-medium transition-colors ${
          isCriticalTime
            ? 'bg-rose-50 border-rose-200 text-rose-700'
            : isLowTime
            ? 'bg-amber-50 border-amber-200 text-amber-700'
            : 'bg-white border-slate-200 text-slate-700'
        }`}
      >
        <Clock className={`w-3.5 h-3.5 ${isCriticalTime ? 'text-rose-600' : 'text-slate-500'}`} />
        <span className="text-slate-500 text-xs hidden md:inline">Sisa Waktu:</span>
        <span className="font-mono font-semibold tracking-wider tabular-nums">
          {hours > 0 ? `${hours.toString().padStart(2, '0')}:` : ''}
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </span>
        {isLowTime && (
          <AlertCircle className="w-3.5 h-3.5 text-amber-600 ml-0.5" />
        )}
      </div>

      <button
        onClick={onTogglePause}
        className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
        title={isPaused ? 'Lanjutkan Waktu' : 'Jeda Sementara'}
        aria-label={isPaused ? 'Resume Timer' : 'Pause Timer'}
      >
        {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-600" /> : <Pause className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};
