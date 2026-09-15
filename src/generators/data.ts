import type { Problem } from '../types';
import { pick, randInt, uid } from '../utils/math';

export function generateData(): Problem {
  return pick([mean, median, mode, range])();
}

function mean(): Problem {
  const n = 4;
  const vals = Array.from({ length: n }, () => randInt(2, 12));
  // force integer mean
  const targetMean = randInt(4, 10);
  const sumNeeded = targetMean * n;
  const current = vals.reduce((a, b) => a + b, 0);
  vals[n - 1] = vals[n - 1]! + (sumNeeded - current);
  if (vals[n - 1]! < 1) return mean();
  return {
    id: uid(),
    topicId: 't8-data',
    prompt: `Find the mean (average) of: ${vals.join(', ')}`,
    promptTex: `\\text{mean of } ${vals.join(',\\ ')}`,
    answer: String(targetMean),
    explanation: `Sum = ${sumNeeded}, count = ${n}, mean = ${sumNeeded}÷${n}=${targetMean}.`,
  };
}

function median(): Problem {
  const vals = [randInt(1, 5), randInt(6, 10), randInt(11, 15), randInt(3, 8), randInt(8, 14)];
  const sorted = [...vals].sort((a, b) => a - b);
  const med = sorted[2]!;
  return {
    id: uid(),
    topicId: 't8-data',
    prompt: `Find the median of: ${vals.join(', ')}`,
    promptTex: `${vals.join(',\\ ')}`,
    answer: String(med),
    explanation: `Sorted: ${sorted.join(', ')}. Middle value is ${med}.`,
  };
}

function mode(): Problem {
  const modeVal = randInt(2, 9);
  const others = [randInt(1, 12), randInt(1, 12), randInt(1, 12)].map((v) =>
    v === modeVal ? v + 1 : v,
  );
  const vals = [modeVal, modeVal, ...others];
  // shuffle
  for (let i = vals.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [vals[i], vals[j]] = [vals[j]!, vals[i]!];
  }
  return {
    id: uid(),
    topicId: 't8-data',
    prompt: `Find the mode of: ${vals.join(', ')}`,
    promptTex: `${vals.join(',\\ ')}`,
    answer: String(modeVal),
    explanation: `Mode is the most frequent value: ${modeVal} appears twice.`,
  };
}

function range(): Problem {
  const vals = Array.from({ length: 5 }, () => randInt(1, 20));
  const lo = Math.min(...vals);
  const hi = Math.max(...vals);
  return {
    id: uid(),
    topicId: 't8-data',
    prompt: `Find the range of: ${vals.join(', ')}`,
    promptTex: `${vals.join(',\\ ')}`,
    answer: String(hi - lo),
    explanation: `Range = max − min = ${hi} − ${lo} = ${hi - lo}.`,
  };
}
