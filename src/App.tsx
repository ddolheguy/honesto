import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Footer, ProtectedRoute } from './components';
import historyService from './services/historyService';
import { configureStore } from './store';
import { GlobalStyle } from './theme/globalStyles';
import theme from './theme/theme';

import Login from './views/authentication/Login/Login';
import Portal from './views/portal/Portal/Portal';

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={historyService}>
          <GlobalStyle />
          <Switch>
            <Route path='/login' exact={true} component={Login} />
            <ProtectedRoute path='/' component={Portal} />
            <Redirect to='/' />
          </Switch>
        </Router>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
