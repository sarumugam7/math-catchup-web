import { QUESTIONS_PER_SESSION } from '../config';
import { TOPICS } from '../topics/registry';
import type { ProgressData, TopicId } from '../types';
import { accuracy } from '../utils/progress';

type Props = {
  progress: ProgressData;
  onPractice: (id: TopicId) => void;
  onDashboard: () => void;
};

export function Home({ progress, onPractice, onDashboard }: Props) {
  const weak = TOPICS.map((t) => {
    const acc = accuracy(progress.byTopic[t.id]);
    return { topic: t, acc };
  })
    .filter((x) => x.acc !== null && x.acc < 70)
    .sort((a, b) => (a.acc ?? 100) - (b.acc ?? 100))
    .slice(0, 3);

  const grade6 = TOPICS.filter((t) => t.gradeBand === '6');
  const grade7 = TOPICS.filter((t) => t.gradeBand === '7');

  return (
    <div className="page">
      <header className="hero">
        <div>
          <p className="eyebrow">Math Catch-Up · Issaquah Math 1–2</p>
          <h1>Practice what you missed — then crush Math 2 &amp; 3</h1>
          <p className="subtitle">
            Pick a topic, solve {QUESTIONS_PER_SESSION} fresh problems, get instant
            feedback. Progress stays on this device.
          </p>
        </div>
        <button type="button" className="btn btn-secondary" onClick={onDashboard}>
          Progress dashboard
        </button>
      </header>

      {weak.length > 0 && (
        <section className="suggest card">
          <h2>Suggested focus</h2>
          <p>These topics need a bit more practice:</p>
          <div className="chip-row">
            {weak.map(({ topic, acc }) => (
              <button
                key={topic.id}
                type="button"
                className="chip"
                style={{ borderColor: topic.color }}
                onClick={() => onPractice(topic.id)}
              >
                {topic.code}. {topic.title} · {acc}%
              </button>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="section-title">Grade 6 foundations</h2>
        <div className="topic-grid">
          {grade6.map((t) => (
            <TopicCard
              key={t.id}
              code={t.code}
              title={t.title}
              blurb={t.blurb}
              color={t.color}
              acc={accuracy(progress.byTopic[t.id])}
              onClick={() => onPractice(t.id)}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Grade 7 extensions</h2>
        <div className="topic-grid">
          {grade7.map((t) => (
            <TopicCard
              key={t.id}
              code={t.code}
              title={t.title}
              blurb={t.blurb}
              color={t.color}
              acc={accuracy(progress.byTopic[t.id])}
              onClick={() => onPractice(t.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function TopicCard({
  code,
  title,
  blurb,
  color,
  acc,
  onClick,
}: {
  code: string;
  title: string;
  blurb: string;
  color: string;
  acc: number | null;
  onClick: () => void;
}) {
  return (
    <button type="button" className="topic-card" onClick={onClick}>
      <span className="topic-code" style={{ background: color }}>
        {code}
      </span>
      <span className="topic-title">{title}</span>
      <span className="topic-blurb">{blurb}</span>
      <span className="topic-meta">
        {acc === null ? 'Not started' : `${acc}% accuracy`} · Tap to practice
      </span>
    </button>
  );
}
