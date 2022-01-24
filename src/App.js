import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import Experience from './components/Experience'

function App() {
  return (
    <div className="App">       
      <nav>
        <Link to="/" className="navLinks">Home</Link>
        <Link to="/projects" className="navLinks">Projects</Link>
        <Link to="/experience" className="navLinks">Experience</Link>
        <a href="https://docs.google.com/document/d/1xgglYDbWKPrKsmcCInK9Q2SH-794qSExtvFftkhPtmI/edit?usp=sharing" className="navLinks">Resume</a>
        <a href="https://github.com/Richard-McGhee" className="navLinks">Github</a>
        <a href="https://www.linkedin.com/in/richardjmcghee/" className="navLinks">LinkedIn</a>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/experience" component={Experience} />
      </Switch>
    </div>
  )
}

export default App
