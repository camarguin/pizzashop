import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import OrderPage from './pages/OrderPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <>
            <HomePage />
          </>
        </Route>
        <Route path="/order">
          <OrderPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
