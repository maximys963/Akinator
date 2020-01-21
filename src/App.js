/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainScreen from './components/MainScreen/MainScreen';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');

  function onUserNameSet(name) {
    setUserName(name);
  }

  return (
    <Router>
      <>
        <Switch>
          <Route
            path="/"
            render={() => (<MainScreen setUser={onUserNameSet} />)}
            exect
          />
        </Switch>
      </>
    </Router>
  );
}
export default App;
