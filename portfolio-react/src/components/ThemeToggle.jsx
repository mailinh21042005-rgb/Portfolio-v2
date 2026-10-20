import { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function ThemeToggle() {
  const [dark, setDark] = useLocalStorage('dark', false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((current) => !current)}
      aria-pressed={dark}
      aria-label={dark ? 'Bật giao diện sáng' : 'Bật giao diện tối'}
      className="ml-1 rounded-full border border-sky-200 bg-white/70 px-3 py-2 text-sm transition hover:scale-105 dark:border-slate-600 dark:bg-slate-800"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}