import { useSwitch } from '@heroui/react';
import { useTheme } from '@heroui/use-theme';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  const { theme, setTheme } = useTheme();

  useSwitch({
    isSelected: theme === 'light',
    onChange: () => setTheme(theme === 'light' ? 'dark' : 'light'),
  });

  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
    </Routes>
  );
}

export default App;
