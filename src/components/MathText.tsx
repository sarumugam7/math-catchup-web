import katex from 'katex';
import { useMemo } from 'react';

type Props = {
  tex: string;
  display?: boolean;
  className?: string;
};

export function MathText({ tex, display = false, className }: Props) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(tex, {
        throwOnError: false,
        displayMode: display,
        strict: 'ignore',
      });
    } catch {
      return tex;
    }
  }, [tex, display]);

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
