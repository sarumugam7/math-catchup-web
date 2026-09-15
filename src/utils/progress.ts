import type { ProgressData, TopicId, TopicStats } from '../types';

const KEY = 'math-catchup-progress-v1';

const empty: ProgressData = {
  version: 1,
  byTopic: {},
  sessionsCompleted: 0,
};

export function loadProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...empty, byTopic: {} };
    const parsed = JSON.parse(raw) as ProgressData;
    if (parsed?.version !== 1) return { ...empty, byTopic: {} };
    return parsed;
  } catch {
    return { ...empty, byTopic: {} };
  }
}

export function saveProgress(data: ProgressData): void {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function recordSession(
  topicId: TopicId,
  correct: number,
  total: number,
): ProgressData {
  const data = loadProgress();
  const prev: TopicStats = data.byTopic[topicId] ?? {
    attempted: 0,
    correct: 0,
  };
  data.byTopic[topicId] = {
    attempted: prev.attempted + total,
    correct: prev.correct + correct,
    lastPracticed: new Date().toISOString(),
  };
  data.sessionsCompleted += 1;
  saveProgress(data);
  return data;
}

export function accuracy(stats?: TopicStats): number | null {
  if (!stats || stats.attempted === 0) return null;
  return Math.round((100 * stats.correct) / stats.attempted);
}

export function resetProgress(): ProgressData {
  saveProgress({ ...empty, byTopic: {} });
  return loadProgress();
}
