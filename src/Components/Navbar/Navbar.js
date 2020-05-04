import React from 'react';
import './Navbar.css'
import icon from '../../Images/hamburger.png'
import { Github, Linkedin } from '@icons-pack/react-simple-icons'
import { Link } from "react-router-dom";

const Navbar = ({toggleNavBar, toggleMobileBar, homeActive, projectsActive, experienceActive}) => {
    return(
        <header className='header'>
            <div className='mobileNavbarWrapper'>
                <div>
                <h2 className='logo'>Jakub Tatar.</h2>
                </div>
                <div className='icon' onClick={toggleMobileBar}>
                <img src={icon} alt='Mobile menu'/>
                </div>
            </div>
            <nav className='navbar'>
                <Link onClick={() => toggleNavBar(true,false,false,'rgb(190,66,66)')} className={homeActive ? 'border' : ''} to="/">Home</Link>
                <Link onClick={() => toggleNavBar(false,true,false,'rgb(71,199,100)')} className={projectsActive ? 'border' : ''} to="/projects">Projects</Link>
                <Link onClick={() => toggleNavBar(false,false,true,'rgb(255,210,78)')} className={experienceActive ? 'border' : ''} to="/experience">Experience</Link>
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
    );
}

export default Navbar;