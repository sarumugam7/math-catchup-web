import type { Problem, TopicId } from '../types';
import { QUESTIONS_PER_SESSION } from '../config';
import { generatePositiveRational } from './positiveRational';
import { generateIntegersRational } from './integersRational';
import { generateExpressions } from './expressions';
import { generateEquations } from './equations';
import { generateRatios } from './ratios';
import { generatePercent } from './percent';
import { generateGeometry } from './geometry';
import { generateData } from './data';
import { generateRationalOps } from './rationalOps';
import { generateProportions } from './proportions';
import { generatePercentProblems } from './percentProblems';
import { generateEquivalentExpr } from './equivalentExpr';
import { gradeAnswer } from '../utils/math';

const generators: Record<TopicId, () => Problem> = {
  't1-positive-rationals': generatePositiveRational,
  't2-integers-rationals': generateIntegersRational,
  't3-expressions': generateExpressions,
  't4-equations-inequalities': generateEquations,
  't5-ratio-rate': generateRatios,
  't6-percent': generatePercent,
  't7-area-volume': generateGeometry,
  't8-data': generateData,
  't71-rational-ops': generateRationalOps,
  't72-proportions': generateProportions,
  't73-percent-problems': generatePercentProblems,
  't74-equivalent-expr': generateEquivalentExpr,
};

export function generateProblem(topicId: TopicId): Problem {
  return generators[topicId]();
}

/**
 * Build a fresh session of randomized problems.
 * Dedupes by prompt+answer so the same question is unlikely to repeat
 * within one session. Each call uses Math.random(), so a new session
 * (including "Practice again") gets a new set.
 */
export function generateSession(
  topicId: TopicId,
  count: number = QUESTIONS_PER_SESSION,
): Problem[] {
  const problems: Problem[] = [];
  const seen = new Set<string>();
  const maxAttempts = count * 40;
  let guard = 0;
  while (problems.length < count && guard < maxAttempts) {
    guard += 1;
    const p = generateProblem(topicId);
    const key = `${p.prompt}|${p.promptTex ?? ''}|${p.answer}`;
    if (seen.has(key)) continue;
    seen.add(key);
    problems.push(p);
  }
  return problems;
}

export function checkAnswer(problem: Problem, userAnswer: string): boolean {
  return gradeAnswer(userAnswer, problem.answer, problem.accept ?? []);
}

export { gradeAnswer, QUESTIONS_PER_SESSION };
