import React from 'react'
import itsilesia from '../../Images/itsilesia.png'
import bmz from '../../Images/bmz.png'
import comarch from '../../Images/comarch.jpg'
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
                        image = {comarch}
                        title = 'Comarch'
                        text = 'I started as a junior developer in May of 2021. I was responsible for the core part of the frontend framework developed in React that was used for applications in the telecomunication industry by companies like Orange, Vodafone, Switch, etc. I also got some experience working with Node part of our project and creating mocks with Java. After a year, I also took care of our interns and did code reviews.'
                        technologies = {['React','Javascript', 'Typecript', 'Node', 'Git', 'Jira', 'Java', 'GraphQL', 'Jest', 'React testing library']}
                        reverse = {false}
                    />
                    <Element
                        image = {itsilesia}
                        title = 'IT Silesia'
                        text = 'I was an apprentice for two months. I started by developing the Arkanoid game. Later, in a team of four, I developed an app in Unity for monitors with touchscreens.'
                        technologies = {['Unity','C#','Git']}
                        reverse = {true}
                    />
                    <Element
                        image = {bmz}
                        title = 'BMZ Poland'
                        text = "I worked there in the IT department for 8 months. I helped in moving to the company's new headquarters, I worked in an internal helpdesk, dealt with everyday problems, and set up computers for new employees."
                        technologies = {['IT Helpdesk']}
                        reverse = {false}
                    />
                </ElementsHolder>
            </main>
        );
    }
}

export default Experience;