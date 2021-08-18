import { CssBaseline, ThemeProvider, createTheme } from '@material-ui/core';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
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
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
