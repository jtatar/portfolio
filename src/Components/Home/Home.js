import React from 'react'
import './Home.css';

import {
    Link
  } from "react-router-dom";

const initialState={
    backgroundX: 0,
    frontX: 0
}

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = initialState;
    }
    
    mouseMovement = (event) => {
        const windowWidth = window.innerWidth;
        const middle = windowWidth/2;
        let newX = 0;
        if(middle > event.clientX){
            newX = ((event.clientX-middle)/(windowWidth-middle))*(48-0)
        } else{
            newX = ((event.clientX-0)/(middle-0))*(0+48)-48
        }
        console.log(newX);
        this.setState({
            backgroundX: newX,
            frontX: newX/2
        })
    }

    render(){
        const {toggleNavBar, technologiesActive} = this.props;
        return(
            <main onMouseMove={this.mouseMovement} className='home'>
                <div className='text'>
                    <h1>
                        Hello, I'm Jakub a <br/>
                        Full stack Developer.
                    </h1>
                    <p className='homeText'>
                        I am a student at silesian university of technology.<br/> I create my apps with HTML, CSS, JS, React and Node.
                    </p>
                    <Link className='button' onClick={() => toggleNavBar(false,true,false,'rgb(255,210,78)')} className={technologiesActive ? 'border' : ''} className='navbarLinks' to="/projects">Projects</Link>
                </div>
                <div style={{transform: `translate3d(${this.state.backgroundX}px, 0px, 0px)`,transition:'.2s'}} className='background'></div>
                <div style={{transform: `translate3d(${this.state.frontX}px, 0px, 0px)`,transition:'.2s'}} className='front'></div>
            </main>
        );
    }
}


export default Home;