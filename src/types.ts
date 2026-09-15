export type TopicId =
  | 't1-positive-rationals'
  | 't2-integers-rationals'
  | 't3-expressions'
  | 't4-equations-inequalities'
  | 't5-ratio-rate'
  | 't6-percent'
  | 't7-area-volume'
  | 't8-data'
  | 't71-rational-ops'
  | 't72-proportions'
  | 't73-percent-problems'
  | 't74-equivalent-expr';

export interface TopicMeta {
  id: TopicId;
  code: string;
  title: string;
  blurb: string;
  gradeBand: '6' | '7';
  color: string;
}

export interface Problem {
  id: string;
  topicId: TopicId;
  prompt: string;
  promptTex?: string;
  /** Canonical answer string shown to the student */
  answer: string;
  /** Extra accepted answers after normalization */
  accept?: string[];
  explanation: string;
  explanationTex?: string;
  /** Optional hint for input (e.g. "fraction or decimal") */
  hint?: string;
}

export type GradeResult = {
  correct: boolean;
  expected: string;
};

export interface TopicStats {
  attempted: number;
  correct: number;
  lastPracticed?: string;
}

export interface ProgressData {
  version: 1;
  byTopic: Partial<Record<TopicId, TopicStats>>;
  sessionsCompleted: number;
}

export interface SessionResult {
  topicId: TopicId;
  total: number;
  correct: number;
  problems: Array<{
    problem: Problem;
    userAnswer: string;
    correct: boolean;
  }>;
}
