/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainScreen from './components/MainScreen/MainScreen';
import GameScreen from './components/GameScreen/GameScreen';
import WinnerScreen from './components/WinnerScreen/WinnerScreen';
import Rules from './components/Rules/Rules';
import Menu from './components/Menu/Menu';
import './App.css';

function App() {
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({
    user: 0,
    akinator: 0,
  });
  return (
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route
            path="/Akinator_Int20h/"
            render={() => (
              <MainScreen />
            )}
            exact
          />
          <Route
            path="/Akinator_Int20h/game"
            render={() => (
              <GameScreen
                setWinner={setWinner}
                setScore={setScore}
                score={score}
              />
            )}
          />
          <Route
            path="/Akinator_Int20h/winner"
            render={() => (
              <WinnerScreen
                winner={winner}
                setScore={setScore}
              />
            )}
          />
          <Route
            path="/Akinator_Int20h/rules"
            component={Rules}
          />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
