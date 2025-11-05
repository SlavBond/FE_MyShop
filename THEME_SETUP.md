# Система тем и цветов для проекта

## Структура файлов

```
src/
├── styles/
│   ├── colors.css          # Основные цветовые переменные
│   └── examples.css        # Примеры использования
├── hooks/
│   └── useTheme.ts         # Хук для управления темой
├── components/
│   ├── UI/
│   │   ├── ThemeToggle.tsx # Переключатель темы
│   │   └── index.ts        # Экспорт компонентов
│   └── ThemeProvider.tsx   # Провайдер темы
└── app/
    ├── globals.css         # Импорт цветов
    └── layout.tsx          # Подключение ThemeProvider
```

## Как использовать

### 1. Подключение цветов

```css
/* В любом CSS файле */
.my-component {
  background: var(--surface);
  color: var(--text-primary);
  border: 1px solid var(--border);
}
```

### 2. Использование в компонентах

```tsx
import { useTheme } from '@/hooks/useTheme';

function MyComponent() {
  const { theme, changeTheme, isDark } = useTheme();
  
  return (
    <div style={{ background: 'var(--surface)' }}>
      <button onClick={() => changeTheme('dark')}>
        Темная тема
      </button>
    </div>
  );
}
```

### 3. Добавление переключателя темы

```tsx
import { ThemeToggle } from '@/components/UI';

function Header() {
  return (
    <header>
      <h1>Мой сайт</h1>
      <ThemeToggle />
    </header>
  );
}
```

## Доступные цвета

### Основные
- `--background` - основной фон
- `--foreground` - основной текст
- `--surface` - поверхность компонентов
- `--surface-hover` - поверхность при наведении

### Акцентные
- `--primary` - основной акцент
- `--primary-hover` - акцент при наведении
- `--secondary` - вторичный акцент
- `--secondary-hover` - вторичный при наведении

### Состояния
- `--success` - успех
- `--warning` - предупреждение
- `--error` - ошибка
- `--info` - информация

### Текст
- `--text-primary` - основной текст
- `--text-secondary` - вторичный текст
- `--text-muted` - приглушенный текст

### Границы и тени
- `--border` - границы
- `--shadow` - тени
- `--shadow-lg` - большие тени

## Особенности

1. **Автоматическое переключение** - тема автоматически подстраивается под системные настройки
2. **Сохранение выбора** - выбранная тема сохраняется в localStorage
3. **Плавные переходы** - все изменения анимированы
4. **Адаптивность** - компоненты адаптируются под размер экрана
5. **TypeScript** - полная типизация для всех компонентов

## Добавление новых цветов

1. Добавьте переменную в `src/styles/colors.css`
2. Укажите значения для светлой и темной темы
3. Добавьте в секцию `@media (prefers-color-scheme: dark)`

```css
:root {
  --my-color: #ff0000;
}

[data-theme="dark"] {
  --my-color: #00ff00;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    --my-color: #00ff00;
  }
}
``` 