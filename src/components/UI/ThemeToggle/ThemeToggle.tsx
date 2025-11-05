'use client';

import { useTheme } from '@/hooks/useTheme';
import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const { theme, changeTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="theme-toggle-skeleton" />;
  }

  return (
    <div className="theme-toggle">
      <button
        onClick={() => changeTheme('light')}
        className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
        title="Светлая тема"
      >
        <SunIcon />
      </button>
      
      <button
        onClick={() => changeTheme('system')}
        className={`theme-btn ${theme === 'system' ? 'active' : ''}`}
        title="Системная тема"
      >
        <MonitorIcon />
      </button>
      
      <button
        onClick={() => changeTheme('dark')}
        className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
        title="Темная тема"
      >
        <MoonIcon />
      </button>
    </div>
  );
}

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="5"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  );
} 