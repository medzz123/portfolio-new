import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import React, { FunctionComponent, useEffect, useState } from 'react';

import { ThemeSwitchContainer } from './ThemeSwitch.styles';

const ThemeSwitch: FunctionComponent = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  if (!mounted) return null;

  return (
    <ThemeSwitchContainer type="button" data-testid="themeSwitch" onClick={toggleTheme}>
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </ThemeSwitchContainer>
  );
};

export default ThemeSwitch;
