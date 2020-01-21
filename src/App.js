/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainScreen from './components/MainScreen/MainScreen';
import GameScreen from './components/GameScreen/GameScreen';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route
            path="/"
            render={() => (<MainScreen />)}
            exact
          />
          <Route
            path="/game"
            render={() => (<GameScreen />)}
          />
        </Switch>
      </>
    </Router>
  );
}
export default App;
