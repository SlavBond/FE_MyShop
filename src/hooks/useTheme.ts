'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Загружаем сохраненную тему из localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'system') {
      // Убираем data-theme для автоматического переключения
      root.removeAttribute('data-theme');
      
      // Определяем системную тему
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const updateSystemTheme = () => {
        setResolvedTheme(mediaQuery.matches ? 'dark' : 'light');
      };
      
      updateSystemTheme();
      mediaQuery.addEventListener('change', updateSystemTheme);
      
      return () => mediaQuery.removeEventListener('change', updateSystemTheme);
    } else {
      // Устанавливаем конкретную тему
      root.setAttribute('data-theme', theme);
      setResolvedTheme(theme);
    }
  }, [theme]);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return {
    theme,
    resolvedTheme,
    changeTheme,
    isLight: resolvedTheme === 'light',
    isDark: resolvedTheme === 'dark',
  };
} 