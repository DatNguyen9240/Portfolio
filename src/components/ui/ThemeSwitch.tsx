import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react'; // Bạn có thể dùng bất kỳ icon set nào, hoặc emoji

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(
    () =>
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`relative w-20 h-10 flex items-center rounded-full px-1 transition-colors duration-500 shadow-inner ${
        isDark
          ? 'bg-gradient-to-r from-slate-800 to-slate-900'
          : 'bg-gradient-to-r from-yellow-300 to-yellow-500'
      }`}
    >
      <span
        className={`absolute left-1 top-1 h-8 w-8 rounded-full shadow-md transform transition-transform duration-500 flex items-center justify-center text-white text-sm ${
          isDark ? 'translate-x-10 bg-slate-700' : 'translate-x-0 bg-yellow-400'
        }`}
      >
        {isDark ? <Moon size={18} /> : <Sun size={18} />}
      </span>
    </button>
  );
}
