import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import { useEffect, useState } from 'react';

const ThemeSwitch: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const defineInitialTheme = (): string => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const validStoredTheme = storedTheme ? storedTheme === 'dark' || storedTheme === 'light' : false;

    return validStoredTheme && storedTheme ? storedTheme : prefersDarkMode ? 'dark' : 'light';
  };

  const setRootTheme = (theme: string): void => {
    const rootElement = document.documentElement;
    if (theme === 'dark') {
      rootElement.setAttribute('data-mode', 'dark');
    } else {
      rootElement.removeAttribute('data-mode');
    }
  };

  useEffect(() => {
    const initialTheme = defineInitialTheme();

    setIsDarkMode(initialTheme === 'dark');

    setRootTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');

    setRootTheme(newMode ? 'dark' : 'light');
  };

  return (
    <div>
      <label htmlFor="themeSwitch" className="flex items-center cursor-pointer">
        <input type="checkbox" id="themeSwitch" className="hidden" checked={isDarkMode} onChange={toggleTheme} />

        <div className="w-12 h-6 bg-gray-300 rounded-full relative" title={isDarkMode ? 'Modo Escurdo' : 'Modo Claro'}>
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md flex justify-center transform transition-transform duration-300 ${isDarkMode ? 'translate-x-full' : 'translate-x-0'}`}
          >
            {isDarkMode ? (
              <MoonIcon className="text-gray-600 text-lg opacity-100" />
            ) : (
              <SunIcon className="text-yellow-500 text-lg opacity-50'" />
            )}
          </div>
        </div>
      </label>
    </div>
  );
};

export default ThemeSwitch;
