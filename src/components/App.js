import React from 'react'
import Home from './Home'
import Nav from './Nav'
import { HashRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path='/' component={Nav} />
      <div>
        <Route exact path='/' component={Home} />
      </div>
    </Router>
  );
}

export default App;
