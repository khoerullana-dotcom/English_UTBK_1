export type SkillType = 
  | 'Main Idea & Topic'
  | 'Specific Detail & Fact'
  | 'Inference & Implication'
  | 'Author Tone & Attitude'
  | 'Vocabulary in Context'
  | 'Text Structure & Logic'
  | 'Paraphrasing & Restatement'
  | 'Comparative Analysis';

export interface VocabItem {
  word: string;
  partOfSpeech: string;
  meaningId: string;
  exampleEn: string;
  synonyms?: string[];
}

export interface QuestionExplanation {
  summary: string;
  clueSentence: string;
  optionAnalysis: {
    [key: string]: string; // 'A', 'B', 'C', 'D', 'E'
  };
  strategyTip: string;
  keyVocab: { word: string; meaning: string }[];
}

export interface Question {
  id: number; // 1 to 50
  passageId: string;
  questionText: string;
  options: string[]; // 5 options
  correctAnswer: number; // 0=A, 1=B, 2=C, 3=D, 4=E
  skillType: SkillType;
  explanation: QuestionExplanation;
}

export interface Passage {
  id: string;
  number: number; // 1 to 10
  title: string;
  topic: string;
  isPaired?: boolean;
  text1Title?: string;
  text1?: string;
  text2Title?: string;
  text2?: string;
  content: string; // full text or joined
  paragraphs: string[];
  questionRange: [number, number]; // e.g. [1, 5]
  wordCount: number;
}

export interface UserExamState {
  answers: Record<number, number | null>; // questionId -> option index (0..4)
  doubtful: Record<number, boolean>; // questionId -> boolean (ragu-ragu)
  timeRemainingSeconds: number;
  isCompleted: boolean;
  startedAt: number;
  completedAt?: number;
  timeSpentPerQuestion: Record<number, number>;
}
