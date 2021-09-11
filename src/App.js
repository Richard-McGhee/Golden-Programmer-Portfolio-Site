import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Home />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <nav>
          <Link to="/projects" className="navLinks">Projects</Link>
          <Link to="/experience" className="navLinks">Work Experience</Link>
          <Link to="/resume" className="navLinks">Resume</Link>
        </nav>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
        </Switch>
      </header>
    </div>
  )
}

export default App
