import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ProtectedRoute } from './components';
import historyService from './services/historyService';
import { configureStore } from './store';
import theme from './theme/theme';

import Login from './views/authentication/Login/Login';

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={historyService}>
          <Switch>
            <Route path='/login' component={Login} />
            <Redirect to='/' />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
