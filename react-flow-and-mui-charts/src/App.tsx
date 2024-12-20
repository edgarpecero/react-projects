import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Box } from '@mui/material';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense>
        <Outlet />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
