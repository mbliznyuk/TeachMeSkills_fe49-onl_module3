import { useEffect, useState } from 'react';

export const ThemeSwitcher: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.querySelector('.App')?.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div>
      Текущая тема: {isDark ? 'Черная' : 'Светлая'}
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
      />
    </div>
  );
};
