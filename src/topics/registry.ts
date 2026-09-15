import type { TopicMeta } from '../types';

export const TOPICS: TopicMeta[] = [
  {
    id: 't1-positive-rationals',
    code: '1',
    title: 'Use Positive Rational Numbers',
    blurb: 'Add, subtract, multiply, and divide fractions & decimals.',
    gradeBand: '6',
    color: '#3b82f6',
  },
  {
    id: 't2-integers-rationals',
    code: '2',
    title: 'Integers and Rational Numbers',
    blurb: 'Compare, order, and place signed numbers on a number line.',
    gradeBand: '6',
    color: '#8b5cf6',
  },
  {
    id: 't3-expressions',
    code: '3',
    title: 'Numeric and Algebraic Expressions',
    blurb: 'Evaluate expressions and work with variables.',
    gradeBand: '6',
    color: '#06b6d4',
  },
  {
    id: 't4-equations-inequalities',
    code: '4',
    title: 'Represent and Solve Equations and Inequalities',
    blurb: 'Solve one-step equations and graph simple inequalities.',
    gradeBand: '6',
    color: '#10b981',
  },
  {
    id: 't5-ratio-rate',
    code: '5',
    title: 'Understand and Use Ratio and Rate',
    blurb: 'Write ratios, unit rates, and scale quantities.',
    gradeBand: '6',
    color: '#f59e0b',
  },
  {
    id: 't6-percent',
    code: '6',
    title: 'Understand and Use Percent',
    blurb: 'Convert between fractions, decimals, and percents.',
    gradeBand: '6',
    color: '#ef4444',
  },
  {
    id: 't7-area-volume',
    code: '7',
    title: 'Solve Area, Surface Area, and Volume',
    blurb: 'Rectangles, triangles, nets, and rectangular prisms.',
    gradeBand: '6',
    color: '#ec4899',
  },
  {
    id: 't8-data',
    code: '8',
    title: 'Display, Describe, and Summarize Data',
    blurb: 'Mean, median, mode, range, and simple data sets.',
    gradeBand: '6',
    color: '#14b8a6',
  },
  {
    id: 't71-rational-ops',
    code: '7-1',
    title: 'Rational Number Operations',
    blurb: 'Add, subtract, multiply, and divide signed rationals.',
    gradeBand: '7',
    color: '#6366f1',
  },
  {
    id: 't72-proportions',
    code: '7-2',
    title: 'Analyze and Use Proportional Relationships',
    blurb: 'Find missing values and constant of proportionality.',
    gradeBand: '7',
    color: '#a855f7',
  },
  {
    id: 't73-percent-problems',
    code: '7-3',
    title: 'Analyze and Solve Percent Problems',
    blurb: 'Tax, tip, discount, markup, and percent change.',
    gradeBand: '7',
    color: '#f97316',
  },
  {
    id: 't74-equivalent-expr',
    code: '7-4',
    title: 'Generate Equivalent Expressions',
    blurb: 'Combine like terms and use the distributive property.',
    gradeBand: '7',
    color: '#0ea5e9',
  },
];

export function getTopic(id: string): TopicMeta | undefined {
  return TOPICS.find((t) => t.id === id);
}
