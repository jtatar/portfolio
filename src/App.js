import React from 'react';
import { Github, Linkedin } from '@icons-pack/react-simple-icons'
import './App.css';
import icon from './Images/hamburger.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Projects from './Components/Projects/Projects';
import Home from './Components/Home/Home';
import Experience from './Components/Experience/Experience';


const initialState ={
  homeActive: true,
  experienceActive: false,
  projectsActive: false,
  mainColor: 'rgb(190,66,66)',
  isMobileNavbarOpen: false
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  toggleNavBar = (home, projects, experience, color) => {
    this.setState({
      homeActive: home,
      experienceActive: experience,
      projectsActive: projects,
      mainColor: color
    })
    document.documentElement.style.setProperty('--main-color-background',color)
    this.updateTitle(home, projects, experience)
  }

  updateTitle(home, projects, experience){
    let title = ''
    if(home){
      title = 'Home'
    } else if (projects){
      title = 'Projects'
    } else {
      title = 'Experience'
    }
    document.title = `Jakub Tatar - ${title}`
  }

  toggleMobileBar = () => {
    !this.state.isMobileNavbarOpen ? document.documentElement.style.setProperty('--mobile-navbar-open','flex')
    : document.documentElement.style.setProperty('--mobile-navbar-open','none')
    
    this.setState(prevState => ({
      ...prevState,
      isMobileNavbarOpen: !prevState.isMobileNavbarOpen
    }))
  }

  render(){
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className='wrapper' style={{overflowY:this.state.homeActive ? 'hidden' : 'auto'}}>
          <header className='header'>
            <div className='mobileNavbarWrapper'>
              <div>
                <h2 className='logo'>Jakub Tatar.</h2>
              </div>
              <div className='icon' onClick={this.toggleMobileBar}>
                <img src={icon} alt='Mobile menu'/>
              </div>
            </div>
            <nav className='navbar'>
              <Link onClick={() => this.toggleNavBar(true,false,false,'rgb(190,66,66)')} className={this.state.homeActive ? 'border' : ''} to="/">Home</Link>
              <Link onClick={() => this.toggleNavBar(false,true,false,'rgb(71,199,100)')} className={this.state.projectsActive ? 'border' : ''} to="/projects">Projects</Link>
              <Link onClick={() => this.toggleNavBar(false,false,true,'rgb(255,210,78)')} className={this.state.experienceActive ? 'border' : ''} to="/experience">Experience</Link>
            </nav>
            <nav className='socials' >
              <a className='navbarLinks' target="_blank" rel="noopener noreferrer" href='https://github.com/jtatar'>
                <Github color="#ffffff" size={24}/>
              </a>
              <a className='navbarLinks' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/jakub-tatar-0643411a8/'>
                <Linkedin color="#ffffff" size={24}/>
              </a>
            </nav>
          </header>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/experience">
              <Experience toggleNavBar ={this.toggleNavBar}/>
            </Route>
            <Route path="/projects">
              <Projects toggleNavBar ={this.toggleNavBar}/>
            </Route>
            <Route path="/">
              <Home toggleNavBar = {this.toggleNavBar}/>
            </Route>
          </Switch>
          {!this.state.homeActive ? <footer className='footer'>
            <p>© 2020 Jakub Tatar</p>
          </footer> : null}
        </div>
      </Router>
    );
  }
}

export default App;
