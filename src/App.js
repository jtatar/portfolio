import React from 'react';
import { Github, Linkedin } from '@icons-pack/react-simple-icons'
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
  projectsActive: false,
  mainColor: 'rgb(190,66,66)'
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  toggleNavBar = (home, technologies, projects, color) => {
    this.setState({
      homeActive: home,
      technologiesActive: technologies,
      projectsActive: projects,
      mainColor: color
    })
    document.documentElement.style.setProperty('--main-color-background',color)
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
              <Link onClick={() => this.toggleNavBar(true,false,false,'rgb(190,66,66)')} className={this.state.homeActive ? 'border' : ''} to="/">Home</Link>
              <Link onClick={() => this.toggleNavBar(false,true,false,'rgb(255,210,78)')} className={this.state.technologiesActive ? 'border' : ''} to="/technologies">Technologies</Link>
              <Link onClick={() => this.toggleNavBar(false,false,true,'rgb(71,199,100)')} className={this.state.projectsActive ? 'border' : ''} to="/projects">Projects</Link>
            </nav>
            <nav className='socials' >
              <a target="_blank" href='https://github.com/jtatar'>
                <Github color="#ffffff" size={24}/>
              </a>
              <a target="_blank" href='https://www.linkedin.com/in/jakub-tatar-0643411a8/'>
                <Linkedin color="#ffffff" size={24}/>
              </a>
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
