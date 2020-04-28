import React from 'react'
import './Home.css';

import {
    Link
  } from "react-router-dom";

const Home = ({toggleNavBar, technologiesActive}) => {
    return(
        <main className='home'>
            <div className='text'>
                <h1>
                    Hello, I'm Jakub a <br/>
                    Full stack Developer.
                </h1>
                <p>
                    I am a student at silesian university of technology.<br/> I create my apps with HTML, CSS, JS, React and Node.
                </p>
                <Link className='button' onClick={() => toggleNavBar(false,true,false,'rgb(255,210,78)')} className={technologiesActive ? 'border' : ''} to="/technologies">Technologies</Link>
            </div>
        </main>
    );
}

export default Home;