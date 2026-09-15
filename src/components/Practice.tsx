import { useMemo, useState } from 'react';
import { QUESTIONS_PER_SESSION } from '../config';
import { checkAnswer, generateSession } from '../generators';
import { getTopic } from '../topics/registry';
import type { Problem, SessionResult, TopicId } from '../types';
import { MathText } from './MathText';

type Props = {
  topicId: TopicId;
  onFinish: (result: SessionResult) => void;
  onQuit: () => void;
};

type Step =
  | { kind: 'ask' }
  | { kind: 'feedback'; correct: boolean; userAnswer: string };

export function Practice({ topicId, onFinish, onQuit }: Props) {
  const topic = getTopic(topicId)!;
  const problems = useMemo(() => generateSession(topicId, QUESTIONS_PER_SESSION), [topicId]);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState('');
  const [step, setStep] = useState<Step>({ kind: 'ask' });
  const [log, setLog] = useState<
    Array<{ problem: Problem; userAnswer: string; correct: boolean }>
  >([]);

  const problem = problems[index]!;
  const progressPct = Math.round(((index + (step.kind === 'feedback' ? 1 : 0)) / problems.length) * 100);

  function submit() {
    if (step.kind !== 'ask') return;
    const userAnswer = input.trim();
    if (!userAnswer) return;
    const correct = checkAnswer(problem, userAnswer);
    const entry = { problem, userAnswer, correct };
    setLog((prev) => [...prev, entry]);
    setStep({ kind: 'feedback', correct, userAnswer });
  }

  function advance(currentLog: typeof log) {
    if (index + 1 >= problems.length) {
      onFinish({
        topicId,
        total: problems.length,
        correct: currentLog.filter((x) => x.correct).length,
        problems: currentLog,
      });
      return;
    }
    setIndex((i) => i + 1);
    setInput('');
    setStep({ kind: 'ask' });
  }

  return (
    <div className="page practice">
      <header className="practice-bar">
        <button type="button" className="btn btn-ghost" onClick={onQuit}>
          ← Topics
        </button>
        <div className="practice-title">
          <strong>
            {topic.code}. {topic.title}
          </strong>
          <span>
            Question {index + 1} of {problems.length}
          </span>
        </div>
        <div className="progress-track" aria-hidden>
          <div className="progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
      </header>

      <div className="card problem-card">
        <p className="prompt">{problem.prompt}</p>
        {problem.promptTex && (
          <div className="math-block">
            <MathText tex={problem.promptTex} display />
          </div>
        )}

        {step.kind === 'ask' ? (
          <form
            className="answer-form"
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <label htmlFor="answer" className="sr-only">
              Your answer
            </label>
            <input
              id="answer"
              className="answer-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={problem.hint ?? 'Your answer'}
              autoComplete="off"
              autoFocus
            />
            <button type="submit" className="btn btn-primary">
              Check
            </button>
          </form>
        ) : (
          <div className={`feedback ${step.correct ? 'ok' : 'bad'}`}>
            <p className="feedback-title">
              {step.correct ? 'Nice work — correct!' : 'Not quite — keep going'}
            </p>
            {!step.correct && (
              <p>
                You entered <strong>{step.userAnswer}</strong>. Correct answer:{' '}
                <strong>{problem.answer}</strong>
              </p>
            )}
            <p className="explanation">{problem.explanation}</p>
            {problem.explanationTex && (
              <MathText tex={problem.explanationTex} display />
            )}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => advance(log)}
            >
              {index + 1 >= problems.length ? 'See results' : 'Next question'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
