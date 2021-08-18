import { CssBaseline, ThemeProvider, createTheme } from '@material-ui/core';
import Home from './pages/Home';

const theme = createTheme({
  typography: {
    h3: {
      fontFamily: 'Atkinson Hyperlegible',
      fontStyle: 'italic',
    },
    h5: {
      fontFamily: 'Atkinson Hyperlegible',
      fontStyle: 'italic',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
