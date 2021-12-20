import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Home />        
      <nav>
        <Link to="/" className="navLinks">Home</Link>
        <Link to="/projects" className="navLinks">Projects</Link>
        <Link to="/experience" className="navLinks">Work Experience</Link>
        <Link to="/resume" className="navLinks">Resume</Link>
        <a href="https://github.com/Richard-McGhee" className="navLinks">Github</a>
        <a href="https://www.linkedin.com/in/richardjmcghee/" classname="navLinks">LinkedIn</a>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default App
