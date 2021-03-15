import React from 'react'
import Home from './components/Home.js'
import Skills from './components/Skills.js'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
      <Home />
      <Skills />
      <Projects />
      <Contact />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
