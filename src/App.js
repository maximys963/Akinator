/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainScreen from './components/MainScreen/MainScreen';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route
            path="/"
            component={MainScreen}
            exect
          />
        </Switch>
      </>
    </Router>
  );
}
export default App;
