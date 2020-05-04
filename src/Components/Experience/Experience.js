import React from 'react'
import itsilesia from '../../Images/itsilesia.png'
import bmz from '../../Images/bmz.png'
import ElementsHolder from '../ElementsHolder/ElementsHolder'
import Element from '../Element/Element'
import './Experience.css'


class Experience extends React.Component {

    componentDidMount(){
        const {toggleNavBar} = this.props;
        toggleNavBar(false,false,true,'rgb(255,210,78)')
    }

    render(){
        return(
            <main className='mainContentExperience'>
                <ElementsHolder pageTitle = 'Experience.'>
                    <Element
                        image = {itsilesia}
                        title = 'IT Silesia'
                        text = 'I have been a trainee for 2 months. I started with developing an arkanoid game and later in four-person team I was developing an app in Unity for a monitors with touchscreens.'
                        technologies = {['Unity','C#','Git']}
                        reverse = {true}
                    />

                    <Element
                        image = {bmz}
                        title = 'BMZ Poland'
                        text = 'I worked there in an IT team for 8 months, helped moving to the new headquaters, worked in internal helpdesk, dealt with daily occurring problems and configured new computers for new employees.'
                        technologies = {['IT Helpdesk']}
                        reverse = {false}
                    />
                </ElementsHolder>
            </main>
        );
    }
}

export default Experience;