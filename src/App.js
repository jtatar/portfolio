import React from 'react';
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import Technologies from './Components/Technologies/Technologies'
import Socials from './Components/Socials/Socials'
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/technologies">Technologies</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/technologies">
            <Technologies />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <footer>
          Elo
        </footer>
      </div>
    </Router>
  );
}

export default App;
