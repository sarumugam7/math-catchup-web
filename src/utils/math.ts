/** Greatest common divisor (non-negative). */
export function gcd(a: number, b: number): number {
  a = Math.abs(Math.trunc(a));
  b = Math.abs(Math.trunc(b));
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a || 1;
}

export function simplifyFraction(n: number, d: number): { n: number; d: number } {
  if (d < 0) {
    n = -n;
    d = -d;
  }
  const g = gcd(n, d);
  return { n: n / g, d: d / g };
}

export function formatFraction(n: number, d: number): string {
  const s = simplifyFraction(n, d);
  if (s.d === 1) return String(s.n);
  return `${s.n}/${s.d}`;
}

export function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

/** Strip spaces, lowercase, unify minus signs and multiplication. */
export function normalizeText(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/[−–—]/g, '-')
    .replace(/\s+/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/≤/g, '<=')
    .replace(/≥/g, '>=')
    .replace(/≠/g, '!=');
}

/**
 * Parse a student answer that may be an integer, decimal, or fraction a/b.
 * Returns null if unparsable as a single number.
 */
export function parseNumberish(raw: string): number | null {
  const s = normalizeText(raw);
  if (!s) return null;

  // mixed number like 1 1/2 or 1+1/2
  const mixed = /^(-?\d+)[+ ](-?\d+)\/(\d+)$/.exec(s.replace(/\+/g, '+'));
  if (mixed) {
    const whole = Number(mixed[1]);
    const n = Number(mixed[2]);
    const d = Number(mixed[3]);
    if (!d) return null;
    const sign = whole < 0 ? -1 : 1;
    return whole + sign * (n / d);
  }

  if (s.includes('/')) {
    const parts = s.split('/');
    if (parts.length !== 2) return null;
    const n = Number(parts[0]);
    const d = Number(parts[1]);
    if (!Number.isFinite(n) || !Number.isFinite(d) || d === 0) return null;
    return n / d;
  }

  // percent like 25%
  if (s.endsWith('%')) {
    const v = Number(s.slice(0, -1));
    if (!Number.isFinite(v)) return null;
    return v;
  }

  const v = Number(s);
  return Number.isFinite(v) ? v : null;
}

/** Compare two numeric answers with tolerance; also accept equivalent fractions. */
export function numbersEqual(a: number, b: number, eps = 1e-6): boolean {
  return Math.abs(a - b) <= eps;
}

/**
 * Grade a free-response answer against canonical + accept list.
 * Tries numeric equality first, then normalized string equality.
 */
export function gradeAnswer(
  userRaw: string,
  answer: string,
  accept: string[] = [],
): boolean {
  const candidates = [answer, ...accept];
  const userNorm = normalizeText(userRaw);
  if (!userNorm) return false;

  for (const c of candidates) {
    if (normalizeText(c) === userNorm) return true;
  }

  const userNum = parseNumberish(userRaw);
  if (userNum !== null) {
    for (const c of candidates) {
      const cNum = parseNumberish(c);
      if (cNum !== null && numbersEqual(userNum, cNum)) return true;
    }
  }

  // expression-ish: sort terms lightly by removing *1 and +0 noise already normalized
  for (const c of candidates) {
    if (normalizeExpression(userRaw) === normalizeExpression(c)) return true;
  }

  return false;
}

export function normalizeExpression(raw: string): string {
  let s = normalizeText(raw);
  // 2x -> 2*x for comparison consistency? keep as-is but unify juxtaposition
  s = s.replace(/(\d)([a-z])/g, '$1*$2');
  s = s.replace(/([a-z])(\d)/g, '$1*$2');
  // remove unnecessary * before (
  s = s.replace(/\*\(/g, '(');
  return s;
}

export function uid(prefix = 'p'): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
