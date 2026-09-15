import { TOPICS } from '../topics/registry';
import type { ProgressData, TopicId } from '../types';
import { accuracy } from '../utils/progress';

type Props = {
  progress: ProgressData;
  onBack: () => void;
  onPractice: (id: TopicId) => void;
  onReset: () => void;
};

export function Dashboard({ progress, onBack, onPractice, onReset }: Props) {
  const rows = TOPICS.map((t) => {
    const stats = progress.byTopic[t.id];
    const acc = accuracy(stats);
    return { t, stats, acc };
  });

  const practiced = rows.filter((r) => r.acc !== null);
  const overall =
    practiced.length === 0
      ? null
      : Math.round(
          practiced.reduce((s, r) => s + (r.acc ?? 0), 0) / practiced.length,
        );

  const weak = rows
    .filter((r) => r.acc !== null && (r.acc as number) < 70)
    .sort((a, b) => (a.acc ?? 0) - (b.acc ?? 0));

  return (
    <div className="page">
      <header className="hero">
        <div>
          <button type="button" className="btn btn-ghost" onClick={onBack}>
            ← Back
          </button>
          <h1>Progress dashboard</h1>
          <p className="subtitle">
            {progress.sessionsCompleted} session
            {progress.sessionsCompleted === 1 ? '' : 's'} completed
            {overall !== null ? ` · ~${overall}% average across practiced topics` : ''}
          </p>
        </div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            if (
              confirm(
                'Reset all progress on this device? This cannot be undone.',
              )
            ) {
              onReset();
            }
          }}
        >
          Reset progress
        </button>
      </header>

      {weak.length > 0 && (
        <section className="card suggest">
          <h2>Weak topics to revisit</h2>
          <div className="chip-row">
            {weak.map(({ t, acc }) => (
              <button
                key={t.id}
                type="button"
                className="chip"
                style={{ borderColor: t.color }}
                onClick={() => onPractice(t.id)}
              >
                {t.code}. {t.title} · {acc}%
              </button>
            ))}
          </div>
        </section>
      )}

      <div className="card">
        <table className="stats-table">
          <thead>
            <tr>
              <th>Topic</th>
              <th>Tried</th>
              <th>Correct</th>
              <th>Accuracy</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.map(({ t, stats, acc }) => (
              <tr key={t.id}>
                <td>
                  <span
                    className="dot"
                    style={{ background: t.color }}
                    aria-hidden
                  />
                  {t.code}. {t.title}
                </td>
                <td>{stats?.attempted ?? 0}</td>
                <td>{stats?.correct ?? 0}</td>
                <td>
                  {acc === null ? (
                    <span className="muted">—</span>
                  ) : (
                    <span className={acc >= 70 ? 'ok-text' : 'bad-text'}>
                      {acc}%
                    </span>
                  )}
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-small"
                    onClick={() => onPractice(t.id)}
                  >
                    Practice
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
