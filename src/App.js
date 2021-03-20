import React from 'react'
import Header from './components/Header.js'
import Home from './components/Home.js'
import Skills from './components/Skills.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'
import { Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
        <div className="menu">
        <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      </div>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
