/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainScreen from './components/MainScreen/MainScreen';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route
          path="/"
          component={MainScreen}
          exect
        />
      </Switch>
    </div>
  </Router>
);

export default App;
