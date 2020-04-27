import React from 'react';
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import Technologies from './Components/Technologies/Technologies'
import Navigation from './Components/Navigation/Navigation'
import Socials from './Components/Socials/Socials'
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const initialState ={
  homeActive: true,
  technologiesActive: false,
  projectsActive: false
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  toggleNavBar = (home, technologies, projects) => {
    this.setState({
      homeActive: home,
      technologiesActive: technologies,
      projectsActive: projects
    })
  }

  render(){
    return (
      <Router>
        <div>
          <header className='header'>
            <div>
              <h2 className='logo'>Jakub Tatar.</h2>
            </div>
            <nav className='navbar'>
                  <Link onClick={() => this.toggleNavBar(true,false,false)} className={this.state.homeActive ? 'border' : ''} to="/">Home</Link>
                  <Link onClick={() => this.toggleNavBar(false,true,false)} className={this.state.technologiesActive ? 'border' : ''} to="/technologies">Technologies</Link>
                  <Link onClick={() => this.toggleNavBar(false,false,true)} className={this.state.projectsActive ? 'border' : ''} to="/projects">Projects</Link>
            </nav>
          </header>

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
}

export default App;
