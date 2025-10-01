import { useSwitch } from '@heroui/react';
import { useTheme } from '@heroui/use-theme';
import { Route, Routes } from 'react-router-dom';

import { ThemeSwitch } from './components/theme-switch';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';

function App() {
  const { theme, setTheme } = useTheme();

  useSwitch({
    isSelected: theme === 'light',
    onChange: () => setTheme(theme === 'light' ? 'dark' : 'light'),
  });

  return (
    <>
      <ThemeSwitch className="fixed top-3 right-4 z-50" />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AdminPage />} path="/admin" />
      </Routes>
    </>
  );
}

export default App;
