import { getTopic } from '../topics/registry';
import type { SessionResult } from '../types';

type Props = {
  result: SessionResult;
  onAgain: () => void;
  onHome: () => void;
  onDashboard: () => void;
};

export function Results({ result, onAgain, onHome, onDashboard }: Props) {
  const topic = getTopic(result.topicId)!;
  const pct = Math.round((100 * result.correct) / result.total);
  const message =
    pct >= 90
      ? 'Outstanding! You’re locked in.'
      : pct >= 70
        ? 'Solid session — a little more practice and you’re golden.'
        : 'Good effort. Review the misses and try another round.';

  return (
    <div className="page">
      <div className="card results-card">
        <p className="eyebrow">Session complete</p>
        <h1>
          {result.correct}/{result.total} correct ({pct}%)
        </h1>
        <p className="subtitle">
          {topic.code}. {topic.title}
        </p>
        <p className="encourage">{message}</p>

        <div className="btn-row">
          <button type="button" className="btn btn-primary" onClick={onAgain}>
            Practice again
          </button>
          <button type="button" className="btn btn-secondary" onClick={onHome}>
            Pick another topic
          </button>
          <button type="button" className="btn btn-ghost" onClick={onDashboard}>
            Dashboard
          </button>
        </div>

        <h2 className="section-title">Review</h2>
        <ul className="review-list">
          {result.problems.map((row, i) => (
            <li key={row.problem.id} className={row.correct ? 'ok' : 'bad'}>
              <span className="qnum">Q{i + 1}</span>
              <div>
                <p>{row.problem.prompt}</p>
                <p className="small">
                  Your answer: <strong>{row.userAnswer}</strong>
                  {!row.correct && (
                    <>
                      {' '}
                      · Correct: <strong>{row.problem.answer}</strong>
                    </>
                  )}
                </p>
                {!row.correct && (
                  <p className="small muted">{row.problem.explanation}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
