import { useCallback, useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Home } from './components/Home';
import { Practice } from './components/Practice';
import { Results } from './components/Results';
import type { ProgressData, SessionResult, TopicId } from './types';
import {
  loadProgress,
  recordSession,
  resetProgress,
} from './utils/progress';

type Screen =
  | { name: 'home' }
  | { name: 'practice'; topicId: TopicId; key: number }
  | { name: 'results'; result: SessionResult }
  | { name: 'dashboard' };

export default function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'home' });
  const [progress, setProgress] = useState<ProgressData>(() => loadProgress());

  const goHome = useCallback(() => setScreen({ name: 'home' }), []);

  const startPractice = useCallback((topicId: TopicId) => {
    setScreen({ name: 'practice', topicId, key: Date.now() });
  }, []);

  const finishSession = useCallback((result: SessionResult) => {
    const next = recordSession(result.topicId, result.correct, result.total);
    setProgress(next);
    setScreen({ name: 'results', result });
  }, []);

  return (
    <div className="app-shell">
      <div className="app-bg" aria-hidden />
      {screen.name === 'home' && (
        <Home
          progress={progress}
          onPractice={startPractice}
          onDashboard={() => setScreen({ name: 'dashboard' })}
        />
      )}
      {screen.name === 'practice' && (
        <Practice
          key={screen.key}
          topicId={screen.topicId}
          onFinish={finishSession}
          onQuit={goHome}
        />
      )}
      {screen.name === 'results' && (
        <Results
          result={screen.result}
          onAgain={() => startPractice(screen.result.topicId)}
          onHome={goHome}
          onDashboard={() => setScreen({ name: 'dashboard' })}
        />
      )}
      {screen.name === 'dashboard' && (
        <Dashboard
          progress={progress}
          onBack={goHome}
          onPractice={startPractice}
          onReset={() => setProgress(resetProgress())}
        />
      )}
    </div>
  );
}
