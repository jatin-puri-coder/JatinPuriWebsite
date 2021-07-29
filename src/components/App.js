import React from 'react'
import Home from './Home'
import Nav from './Nav'
import About from './About'
import Projects from './Projects'
import Music from './Music'
import { HashRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path='/' component={Nav} />
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/music' component={Music} />
      </div>
    </Router>
  );
}

export default App;
