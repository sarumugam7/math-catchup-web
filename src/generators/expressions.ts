import type { Problem } from '../types';
import { pick, randInt, uid } from '../utils/math';

export function generateExpressions(): Problem {
  return pick([evaluate, orderOfOps, substitute, writeExpression])();
}

function evaluate(): Problem {
  const a = randInt(2, 9);
  const b = randInt(2, 8);
  const c = randInt(1, 6);
  const result = a * b + c;
  return {
    id: uid(),
    topicId: 't3-expressions',
    prompt: `Evaluate: ${a} × ${b} + ${c}`,
    promptTex: `${a} \\times ${b} + ${c}`,
    answer: String(result),
    explanation: `Multiply first: ${a}×${b}=${a * b}, then add ${c} → ${result}.`,
  };
}

function orderOfOps(): Problem {
  const a = randInt(2, 6);
  const b = randInt(2, 5);
  const c = randInt(2, 4);
  const result = a + b * c;
  return {
    id: uid(),
    topicId: 't3-expressions',
    prompt: `Evaluate using order of operations: ${a} + ${b} × ${c}`,
    promptTex: `${a} + ${b} \\times ${c}`,
    answer: String(result),
    explanation: `Do multiplication before addition: ${b}×${c}=${b * c}, then ${a}+${b * c}=${result}.`,
  };
}

function substitute(): Problem {
  const x = randInt(2, 8);
  const m = randInt(2, 5);
  const b = randInt(1, 9);
  const result = m * x + b;
  return {
    id: uid(),
    topicId: 't3-expressions',
    prompt: `If x = ${x}, evaluate ${m}x + ${b}.`,
    promptTex: `${m}x + ${b},\\; x=${x}`,
    answer: String(result),
    explanation: `Replace x with ${x}: ${m}(${x})+${b}=${m * x}+${b}=${result}.`,
  };
}

function writeExpression(): Problem {
  const n = randInt(3, 9);
  return {
    id: uid(),
    topicId: 't3-expressions',
    prompt: `Write an algebraic expression: "a number n plus ${n}". Enter like n+${n}.`,
    promptTex: `n + ${n}`,
    answer: `n+${n}`,
    accept: [`n + ${n}`, `${n}+n`, `${n} + n`],
    explanation: `"A number n plus ${n}" is written n+${n}.`,
    hint: `n+${n}`,
  };
}
