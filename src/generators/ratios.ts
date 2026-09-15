import type { Problem } from '../types';
import { formatFraction, pick, randInt, simplifyFraction, uid } from '../utils/math';

export function generateRatios(): Problem {
  return pick([writeRatio, unitRate, scaleRatio, equivalentRatio])();
}

function writeRatio(): Problem {
  const a = randInt(2, 9);
  const b = randInt(2, 9);
  const s = simplifyFraction(a, b);
  const answer = formatFraction(s.n, s.d);
  return {
    id: uid(),
    topicId: 't5-ratio-rate',
    prompt: `Write the ratio ${a} to ${b} as a simplified fraction.`,
    promptTex: `${a}:${b}`,
    answer,
    accept: [`${s.n}:${s.d}`, `${a}/${b}`],
    explanation: `Simplify ${a}/${b} by dividing by their GCF → ${answer}.`,
    hint: 'a/b',
  };
}

function unitRate(): Problem {
  const packs = randInt(2, 6);
  const priceEach = randInt(2, 9);
  const total = packs * priceEach;
  return {
    id: uid(),
    topicId: 't5-ratio-rate',
    prompt: `${packs} snacks cost $${total}. What is the unit price in dollars per snack?`,
    promptTex: `\\dfrac{${total}}{${packs}}`,
    answer: String(priceEach),
    accept: [`$${priceEach}`, `${priceEach}.00`],
    explanation: `Unit rate = total ÷ count = ${total}÷${packs}=${priceEach}.`,
  };
}

function scaleRatio(): Problem {
  const a = randInt(2, 5);
  const b = randInt(2, 5);
  const k = randInt(2, 6);
  return {
    id: uid(),
    topicId: 't5-ratio-rate',
    prompt: `A recipe uses ${a} cups flour for ${b} cups sugar. How many cups of sugar for ${a * k} cups flour?`,
    promptTex: `\\dfrac{${a}}{${b}} = \\dfrac{${a * k}}{?}`,
    answer: String(b * k),
    explanation: `Scale factor is ${k}, so sugar = ${b}×${k}=${b * k}.`,
  };
}

function equivalentRatio(): Problem {
  const a = randInt(2, 6);
  const b = randInt(2, 6);
  const k = randInt(2, 5);
  return {
    id: uid(),
    topicId: 't5-ratio-rate',
    prompt: `Find the missing number: ${a}:${b} = ${a * k}:?`,
    promptTex: `${a}:${b} = ${a * k}:x`,
    answer: String(b * k),
    explanation: `Multiply both parts by ${k}: ${a * k}:${b * k}.`,
  };
}
