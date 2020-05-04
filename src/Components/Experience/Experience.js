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
                        text = 'I was an apprentice for 2 months. I started by developing the arkanoid game, later in a team of four I developed an app in Unity for a monitors with touchscreens.'
                        technologies = {['Unity','C#','Git']}
                        reverse = {true}
                    />

                    <Element
                        image = {bmz}
                        title = 'BMZ Poland'
                        text = "I worked there in the IT department for 8 months. I helped in moving to the company's new headquaters, I worked in an internal helpdesk, dealt with everyday problems and set up computers for new employees."
                        technologies = {['IT Helpdesk']}
                        reverse = {false}
                    />
                </ElementsHolder>
            </main>
        );
    }
}

export default Experience;