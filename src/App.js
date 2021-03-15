import React from 'react'
import Home from './components/Home.js'
import { Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
