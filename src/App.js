import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Projects from './Components/Projects/Projects';
import Home from './Components/Home/Home';
import Experience from './Components/Experience/Experience';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

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
          <Navbar toggleNavBar={this.toggleNavBar} toggleMobileBar={this.toggleMobileBar} homeActive={this.state.homeActive} projectsActive={this.state.projectsActive} experienceActive={this.state.experienceActive}/>
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
          {!this.state.homeActive ? <Footer/> : null}
        </div>
      </Router>
    );
  }
}

export default App;
